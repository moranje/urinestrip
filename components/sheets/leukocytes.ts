import { sheet } from './_base';
import { useStore } from '@/store/store';

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
      value: 'urineCultures',
    },
  ],

  jump() {
    const store = useStore();
    const answer = store.getQuestion('leukocytes')?.model ?? '';

    store.setAdvice(
      'Omdat een deel van urineweginfecties gemist wordt met alleen de nitriet test (iets meer dan 20%) wordt bij positieve leukocyten aanvullende diagnostiek geadviseerd.'
    );
    store.setDocumentation(
      `Vooralsnog geen urineweginfectie aan kunnen tonen, omdat er wel witte bloedcellen werden gevonden wordt aanvullend nog een ${
        answer === 'dipslide'
          ? 'dipslide'
          : answer === 'urineSediment'
          ? 'urinesediment'
          : 'urinekweek'
      } gedaan. Mocht hierbij een bacterie gevonden worden dan kan behandeling nodig zijn.`
    );

    return '_submit';
  },
});
