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
      store.getQuestion('tissueInvasion').model === 'local' &&
      store.getQuestion('riskAssessment').model !== 'pregnant' &&
      store.getQuestion('urinaryCatheter').model === 'yes'
    ) {
      store.setNamespace('uti.local.cadMen.0');

      return '_submit';
    }

    const tissueInvasion = store.getQuestion('tissueInvasion').model;
    const riskAssessment = store.getQuestion('riskAssessment').model;

    store.updateQuestion('antibiotics', {
      options: uti[tissueInvasion][riskAssessment].treatment.map(
        (option, index) => {
          let name = option.description.split(',')[0];

          return new ChoiceOption({
            label: name,
            value: `${index}`,
          });
        }
      ),
    });

    // Next question
  },
});
