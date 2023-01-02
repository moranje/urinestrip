import { defineStore } from 'pinia';
import jsonData from '@/store/data.json';
import {
  ChoiceOption,
  FormQuestion,
  JumpFunction,
  JumpObject,
} from '@/components/sheets/_base';
import {
  testResult,
  tissueInvasion,
  riskAssessment,
  urinaryCatheter,
  antibiotics,
  leukocytes,
  blood,
  invisiableHematuria,
} from '@/components/sheets';
import { migrate } from '@/components/migrate';

export type Type = 'local' | 'tissueInvasion';
export type Group =
  | 'healthy'
  | 'vulnerable'
  | 'pregnant'
  | 'cadWoman'
  | 'men'
  | 'cadMen'
  | 'children';
export type Test = 'dipslide' | 'urineSediment' | 'urineCulture';
export type Result = 'visibleHematuria' | 'proteinuria' | 'invisiableHematuria';
export type Conclusion = 'clinicalSuspicion' | 'noConclusiveAbnormality';
export type Choice = '0' | '1' | '2' | '3';

export type Link = {
  name: string;
  url: string;
};
export type TreatmentOption = {
  description: string;
  contraIndications: string[] | null;
  documentation: string;
  info?: string;
  additionalTest?: string;
  testAfterTreatment?: string;
};
export type Treatment = {
  treatment: TreatmentOption[];
  generalInfo?: string;
  explainer?: string;
  sources: Link[] | null;
};

type Namespace =
  | `uti.${Type}.${Group}`
  | `leukocytes.${Test}`
  | `blood.${Result}`
  | `other.${Conclusion}`;
type Path =
  | `uti.${Type}.${Group}.${Choice}`
  | `leukocytes.${Test}.${Choice}`
  | `blood.${Result}.${Choice}`
  | `other.${Conclusion}.${Choice}`
  | '';

type Version = {
  version: number;
};
export type Store = Version & {
  [Property in Namespace]: Treatment;
};

interface StoreState {
  data: Store;
  questions: FormQuestion[];
  selectedPath: Path;
}

const data: Store = jsonData;
const TREATMENT_SHIM: Treatment = {
  treatment: [] as TreatmentOption[],
  sources: null,
};
const TREATMENT_OPTION_SHIM: TreatmentOption = {
  description: '',
  contraIndications: null,
  documentation: '',
};
const STORE_NAME = 'us-store';

function getData(state: StoreState): Treatment;
function getData(state: StoreState, treatmentOnly: true): TreatmentOption;
function getData(state: StoreState, treatmentOnly: boolean = false) {
  const index = +(state.selectedPath.split('.').pop() || -1);
  const namespace = state.selectedPath.replace(/\.\d/, '') as Namespace; // remove last dot and digit

  if (treatmentOnly === true) {
    return state.data[namespace].treatment[index] as TreatmentOption;
  }

  return state.data[namespace] as Treatment;
}

export const useStore = defineStore(STORE_NAME, {
  state: () => ({
    data: {} as Store,
    questions: [] as FormQuestion[],
    selectedPath: '' as Path,
  }),

  hydrate(state) {
    if (localStorage.getItem(STORE_NAME) == null) {
      state.data = data;
    } else if (state.data.version === data.version) {
      // State is up to date, do nothing
    } else {
      state.data = migrate(
        JSON.parse(localStorage.getItem(STORE_NAME)!).data,
        data
      );
    }
  },

  persist: {
    storage: persistedState.localStorage,
    paths: ['data', 'selectedPath'],
  },

  getters: {
    getSelectedNamespace: (state) => {
      return state.selectedPath.replace(/\.\d/, '') as Namespace;
    },
    getSelectedOption: (state) => {
      return +(state.selectedPath.split('.').pop() || -1);
    },
    getTreatment: (state) => {
      if (state.selectedPath === '') return TREATMENT_SHIM;

      return getData(state);
    },
    getTreatmentOption: (state) => {
      if (state.selectedPath === '') return TREATMENT_OPTION_SHIM;

      return getData(state, true) as TreatmentOption;
    },
    getQuestions: (state) => state.questions,
    getQuestion: (state) => (id: string) => {
      const question = state.questions.find(
        (question: FormQuestion) => question.id === id
      );

      if (question != null) return question;

      throw new Error(`No form question with id ${id}`);
    },
  },

  actions: {
    setPath(path: Path) {
      this.selectedPath = path;
    },
    setTreatment(key: keyof Treatment, value: any) {
      this.data[this.getSelectedNamespace][key] = value;
    },
    setTreatmentOption(key: keyof TreatmentOption, value: any) {
      this.data[this.getSelectedNamespace].treatment[this.getSelectedOption][
        key
      ] = value;

      // useLocalStorage('us-store', this.data);
    },
    loadQuestions() {
      // clear state
      this.questions = [];

      testResult();
      tissueInvasion();
      riskAssessment();
      urinaryCatheter();
      antibiotics();
      leukocytes();
      blood();
      invisiableHematuria();
    },
    setQuestion(
      id: string,
      {
        title,
        required,
        jump,
        options,
      }: {
        title: string;
        required: boolean;
        jump?: JumpFunction | JumpObject;
        options: ChoiceOption[];
      }
    ) {
      this.questions.push({
        type: 'multiplechoice',
        id,
        title,
        multiple: false,
        nextStepOnAnswer: true,
        required,
        jump,
        options,
        model: '',
      });
    },
    updateQuestion(
      id: string,
      options: {
        title?: string;
        required?: boolean;
        jump?: JumpFunction | JumpObject;
        options?: ChoiceOption[];
        model?: any;
      }
    ) {
      this.questions.forEach((question) => {
        if (question.id === id) {
          Object.assign(question, options);
        }
      });
    },
  },
});
