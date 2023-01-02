import { sheet } from './_base';
import { Conclusion, useStore } from '@/store/store';

export const testResult = sheet({
  id: 'testResult',
  title: 'Test uitslag (op volgorde van afhandelen)',

  options: [
    {
      label:
        'Geen urine (nodig): Gezonde, niet-zwangere vrouwen met eerder objectief vastgestelde urineweginfecties bij herkenning van de klachten zonder tekenen van weefselinvasie',
      value: 'recognizedComplaint',
    },
    {
      label: 'Nitriet positief',
      value: 'nitrite',
    },
    {
      label: 'Dipslide, sediment of kweek positief',
      value: 'urineCultures',
    },
    {
      label:
        'Aanhoudend vermoeden UWI ondanks negatieve nitriet en dipslide/urinesediment',
      value: 'clinicalSuspicion',
    },
    {
      label: 'Leukocyten',
      value: 'leukocytes',
    },
    {
      label: 'Bloed',
      value: 'blood',
    },
    {
      label: 'Overig',
      value: 'noConclusiveAbnormality',
    },
  ],

  jump() {
    const store = useStore();
    const goTo: { [key: string]: string } = {
      nitrite: 'tissueInvasion',
      urineCultures: 'tissueInvasion',
      leukocytes: 'leukocytes',
      blood: 'blood',
    };
    const answer = store.getQuestion('testResult').model;

    if (answer === 'recognizedComplaint') {
      store.updateQuestion('tissueInvasion', { model: 'local' });
      store.updateQuestion('riskAssessment', { model: 'healthy' });

      return 'urinaryCatheter';
    }

    if (goTo[answer]) return goTo[answer];

    console.log('ANSWER', answer);
    store.setPath(`other.${answer as Conclusion}.0`);

    return '_submit';
  },
});
