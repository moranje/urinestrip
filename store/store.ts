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

export const useStore = defineStore('store', {
  state: () => ({
    formPath: 'uti' as string,
    advice:
      'De combinatie van negatieve uitslag van de nitriettest en de leukotest maakt de kans op een urineweginfectie klein. Indien ook geen bloed in de urine wordt gevonden zijn er geen protocollaire vervolgstappen. Afwijkende waarden kunnen in bepaalde gevallen weldegelijk van betekenis zijn (glucosurie bij een niet-diabeet) maar moeten op individuele basis afgewogen worden.' as string,
    documentation:
      'Urineweginfectie met voldoende zekerheid uitgesloten.' as string,
    contraIndications: '' as string,
    questions: [] as FormQuestion[],
  }),
  getters: {
    getFromPath: (state) => state.formPath,
    getAdvice: (state) => state.advice,
    getDocumentation: (state) => state.documentation,
    getContraIndications: (state) => state.contraIndications,
    getQuestions: (state) => state.questions,
    getQuestion: (state) => (id: string) =>
      state.questions.find((question: FormQuestion) => question.id === id),
  },
  actions: {
    setFromPath(formPath: string) {
      this.formPath = formPath;
    },
    setAdvice(advice: string) {
      this.advice = advice;
    },
    setDocumentation(documentation: string) {
      this.documentation = documentation;
    },
    setContraIndications(contraIndications: string) {
      this.contraIndications = contraIndications;
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
