import { ChoiceOption } from '@ditdot-dev/vue-flow-form';
import { uti } from '@/store/data.js';
import { sheet } from './_base';
import { useStore } from '@/store/store';

export const urinaryCatheter = sheet({
  id: 'urinaryCatheter',
  title: 'Heeft patiënt een urine katheter?',

  options: [
    {
      label: 'Ja',
      value: 'yes',
    },
    {
      label: 'Nee',
      value: 'no',
    },
  ],

  jump() {
    const store = useStore();

    if (
      store.getQuestion('tissueInvasion')?.model === 'local' &&
      store.getQuestion('riskAssessment')?.model !== 'pregnant' &&
      store.getQuestion('urinaryCatheter')?.model === 'yes'
    ) {
      store.setAdvice(
        'Behandeling van asymptomatische bacteriurie wordt in alle patiëntgroepen, met uitzondering van zwangeren, afgeraden'
      );
      store.setDocumentation('Geen behandeling nodig.');

      return '_submit';
    }

    const tissueInvasion = store.getQuestion('tissueInvasion')?.model ?? '';
    const riskAssessment = store.getQuestion('riskAssessment')?.model ?? '';

    store.updateQuestion('antibiotics', {
      options: uti[tissueInvasion][riskAssessment].antibiotics.description.map(
        (antibiotic, index) => {
          let name = antibiotic.split(',')[0];

          return new ChoiceOption({
            label: name,
            value: `${antibiotic}|${uti[tissueInvasion][riskAssessment].antibiotics.contraIndications[index]}`,
          });
        }
      ),
    });

    // Next question
  },
});
