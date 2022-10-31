import { defineStore } from 'pinia';
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
import {
  ChoiceOption,
  FormQuestion,
  JumpFunction,
  JumpObject,
} from '@/components/sheets/_base';
import {
  Link,
  uti,
  leukocytes as leukocyteData,
  blood as bloodData,
  other,
  Treatment,
  TreatmentOption,
} from '@/store/data.js';

export type Spread = 'local' | 'tissueInvasion';
export type RiskGroups =
  | 'healthy'
  | 'vulnerable'
  | 'pregnant'
  | 'cadWoman'
  | 'men'
  | 'cadMen'
  | 'children';
export type SubLeukocytes = 'dipslide' | 'urineSediment' | 'urineCulture';
export type SubBlood =
  | 'visibleHematuria'
  | 'proteinuria'
  | 'invisiableHematuria';
export type SubOther = 'clinicalSuspicion' | 'noConclusiveAbnormality';
export type Choice = '0' | '1' | '2' | '3';
type UTI = `uti.${Spread}.${RiskGroups}.${Choice}`;
type Leukocytes = `leukocytes.${SubLeukocytes}.${Choice}`;
type Blood = `blood.${SubBlood}.${Choice}`;
type Other = `other.${SubOther}.${Choice}`;
type Namespace = UTI | Leukocytes | Blood | Other | '';

const TREATMENT_SHIM: Treatment = {
  treatment: [] as TreatmentOption[],
  sources: null,
};
const TREATMENT_OPTION_SHIM: TreatmentOption = {
  description: '',
  contraIndications: null,
  documentation: '',
};

function getUtiData(namespace: UTI, treatmentOnly: boolean) {
  const [_, spread, riskGroup, option] = namespace.split('.') as [
    string,
    Spread,
    RiskGroups,
    Choice
  ];

  if (treatmentOnly === true) return uti[spread][riskGroup].treatment[+option];

  return uti[spread][riskGroup];
}

function getLeukocyteData(namespace: Leukocytes, treatmentOnly: boolean) {
  const [_, group, option] = namespace.split('.') as [
    string,
    SubLeukocytes,
    Choice
  ];
  if (treatmentOnly === true) return leukocyteData[group].treatment[+option];

  return leukocyteData[group];
}

function getBloodData(namespace: Blood, treatmentOnly: boolean) {
  const [_, group, option] = namespace.split('.') as [string, SubBlood, Choice];
  if (treatmentOnly === true) return bloodData[group].treatment[+option];

  return bloodData[group];
}

function getOtherData(namespace: Other, treatmentOnly: boolean) {
  const [_, group, option] = namespace.split('.') as [string, SubOther, Choice];

  if (treatmentOnly === true) return other[group].treatment[+option];

  return other[group];
}

function getDataFromNamespace(
  namespace: Namespace,
  treatmentOnly: boolean = false
) {
  const [set] = namespace.split('.');

  if (set === 'uti') return getUtiData(namespace as UTI, treatmentOnly);
  if (set === 'leukocytes')
    return getLeukocyteData(namespace as Leukocytes, treatmentOnly);
  if (set === 'blood') return getBloodData(namespace as Blood, treatmentOnly);
  if (set === 'other') return getOtherData(namespace as Other, treatmentOnly);

  throw new Error(`Invalid type secified for data retrieval (type: ${set})`);
}

export const useStore = defineStore('store', {
  state: () => ({
    // formPath: 'uti' as string,
    // advice:
    //   'De combinatie van negatieve uitslag van de nitriettest en de leukotest maakt de kans op een urineweginfectie klein. Indien ook geen bloed in de urine wordt gevonden zijn er geen protocollaire vervolgstappen. Afwijkende waarden kunnen in bepaalde gevallen weldegelijk van betekenis zijn (glucosurie bij een niet-diabeet) maar moeten op individuele basis afgewogen worden.' as string,
    // documentation:
    //   'Urineweginfectie met voldoende zekerheid uitgesloten.' as string,
    // contraIndications: '' as string,
    namespace: '' as Namespace,
    // option: -1 as -1 | 0 | 1 | 2 | 3,
    questions: [] as FormQuestion[],
  }),
  getters: {
    // getFromPath: (state) => state.formPath,
    // getAdvice: (state) => state.advice,
    // getDocumentation: (state) => state.documentation,
    // getContraIndications: (state) => state.contraIndications,
    getTreatment: (state) => {
      if (state.namespace === '') return TREATMENT_SHIM;

      return getDataFromNamespace(state.namespace) as Treatment;
    },
    getTreatmentOption: (state) => {
      if (state.namespace === '') return TREATMENT_OPTION_SHIM;

      return getDataFromNamespace(state.namespace, true) as TreatmentOption;
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
    // setFromPath(formPath: string) {
    //   this.formPath = formPath;
    // },
    // setAdvice(advice: string) {
    //   this.advice = advice;
    // },
    // setDocumentation(documentation: string) {
    //   this.documentation = documentation;
    // },
    // setContraIndications(contraIndications: string) {
    //   this.contraIndications = contraIndications;
    // },
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
    setNamespace(namespace: Namespace) {
      this.namespace = namespace;
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
