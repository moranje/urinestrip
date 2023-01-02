import { ChoiceOption } from '@ditdot-dev/vue-flow-form';
import data from '@/store/data.json';
import { sheet } from './_base';
import { useStore, Type, Group } from '@/store/store';

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
      store.setPath('uti.local.cadMen.0');

      return '_submit';
    }

    const type = store.getQuestion('tissueInvasion').model as Type;
    const group = store.getQuestion('riskAssessment').model as Group;

    store.updateQuestion('antibiotics', {
      options: data[`uti.${type}.${group}`].treatment.map((option, index) => {
        let name = option.description.split(',')[0];

        return new ChoiceOption({
          label: name,
          value: `${index}`,
        });
      }),
    });

    // Next question
  },
});
