import { sheet } from './_base';
import { Choice, useStore } from '@/store/store';

export const invisiableHematuria = sheet({
  id: 'invisiableHematuria',
  title: 'Bloed op de urinestrip',

  options: [
    {
      label: '1e keer bloed bij de urinestrip',
      value: '0',
    },
    {
      label: '2e keer geen bloed bij de urinestrip',
      value: '1',
    },
    {
      label: 'Bloed op 2 van de max. 3 testen',
      value: '2',
    },
  ],

  jump() {
    const store = useStore();
    const answer = store.getQuestion('invisiableHematuria').model as Choice;

    store.setPath(`blood.invisiableHematuria.${answer}`);

    return '_submit';
  },
});
