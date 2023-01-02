import { sheet } from './_base';
import { Choice, Group, Type, useStore } from '@/store/store';

export const antibiotics = sheet({
  id: 'antibiotics',
  title: 'Welke behandeling kan patiënt krijgen',

  options: [],

  jump() {
    const store = useStore();
    const tissueInvasion = (store.getQuestion('tissueInvasion')?.model ??
      '') as Type;
    const riskAssessment = (store.getQuestion('riskAssessment')?.model ??
      '') as Group;
    const antibiotics = (store.getQuestion('antibiotics')?.model ??
      '') as Choice;

    store.setPath(`uti.${tissueInvasion}.${riskAssessment}.${antibiotics}`);

    return '_submit';
  },
});
