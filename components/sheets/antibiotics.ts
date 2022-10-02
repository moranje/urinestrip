import { sheet } from './_base';
import { uti } from '@/store/data.js';
import { useStore } from '@/store/store';

export const antibiotics = sheet({
  id: 'antibiotics',
  title: 'Welke behandeling kan patiënt krijgen',

  options: [],

  jump() {
    const store = useStore();
    const tissueInvasion = store.getQuestion('tissueInvasion')?.model ?? '';
    const riskAssessment = store.getQuestion('riskAssessment')?.model ?? '';
    const antibiotics = store.getQuestion('antibiotics')?.model ?? '';

    const [description, contraIndications] = antibiotics.split('|');

    store.setAdvice(uti[tissueInvasion][riskAssessment].advice);
    store.setDocumentation(
      uti[tissueInvasion][riskAssessment].docs.replace(
        '<treatment>',
        description
      )
    );
    store.setContraIndications(contraIndications);

    return '_submit';
  },
});
