import { sheet } from './_base';
import { useStore } from '@/store/store';

export const blood = sheet({
  id: 'blood',
  title: 'Is daarbij sprake van',

  options: [
    {
      label: 'Zichtbaar bloed in het monster',
      value: 'visibleHematuria',
    },
    {
      label: 'Patiënt vertelt bloed bij de urine te zien',
      value: 'visibleHematuria',
    },
    {
      label: 'Proteinurie',
      value: 'proteinuria',
    },
    {
      label: 'Geen van deze',
      value: 'none',
    },
  ],

  jump() {
    const store = useStore();
    const answer = store.getQuestion('blood').model;

    if (answer === 'visibleHematuria') {
      store.setNamespace('blood.visibleHematuria.0');

      return '_submit';
    } else if (answer === 'proteinuria') {
      store.setNamespace('blood.proteinuria.0');

      return '_submit';
    }
  },
});
