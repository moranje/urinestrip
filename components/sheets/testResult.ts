import { sheet } from './_base';
import { useStore } from '@/store/store';

export const testResult = sheet({
  id: 'testResult',
  title: 'Test uitslag',

  options: [
    {
      label:
        'Gezonde, niet-zwangere vrouwen met eerder objectief vastgestelde urineweginfecties bij herkenning van de klachten',
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
      value: 'urineCulture',
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
      value: 'other',
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
    const answer = store.getQuestion('testResult')?.model ?? '';

    if (answer === 'blood') store.setFromPath('hematuria');

    if (goTo[answer]) return goTo[answer];

    if (answer === 'recognizedComplaint') {
      store.updateQuestion('tissueInvasion', { model: 'local' });
      store.updateQuestion('riskAssessment', { model: 'healthy' });

      return 'urinaryCatheter';
    }

    if (answer === 'urineCulture') {
      store.setAdvice(
        'Verricht een kweek met resistentiebepaling bij een aanhoudend vermoeden van een urineweginfectie, terwijl urinestick en dipslide of sediment negatief blijven.'
      );
      store.setFromPath(
        'Gezien aanhoudend vermoeden op urineweginfectie toch urinekweek ingezet'
      );
    }

    return '_submit';
  },
});
