import { sheet } from './_base';
import { SubLeukocytes, useStore } from '@/store/store';

export const leukocytes = sheet({
  id: 'leukocytes',
  title: 'Welke vervolgonderzoek krijgt patiënt?',

  options: [
    {
      label: 'Dipslide',
      value: 'dipslide',
    },
    {
      label: 'Urinesediment (vanaf 12 jaar)',
      value: 'urineSediment',
    },
    {
      label: 'Kweek',
      value: 'urineCulture',
    },
  ],

  jump() {
    const store = useStore();
    const answer = store.getQuestion('leukocytes').model as SubLeukocytes;

    store.setNamespace(`leukocytes.${answer}.0`);

    return '_submit';
  },
});
