import { sheet } from './_base';
import { Choice, RiskGroups, Spread, useStore } from '@/store/store';

export const antibiotics = sheet({
  id: 'antibiotics',
  title: 'Welke behandeling kan patiënt krijgen',

  options: [],

  jump() {
    const store = useStore();
    const tissueInvasion = (store.getQuestion('tissueInvasion')?.model ??
      '') as Spread;
    const riskAssessment = (store.getQuestion('riskAssessment')?.model ??
      '') as RiskGroups;
    const antibiotics = (store.getQuestion('antibiotics')?.model ??
      '') as Choice;

    store.setNamespace(
      `uti.${tissueInvasion}.${riskAssessment}.${antibiotics}`
    );

    return '_submit';
  },
});
