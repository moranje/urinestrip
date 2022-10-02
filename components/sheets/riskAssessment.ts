import { sheet } from './_base';
import { useStore } from '@/store/store';

export const riskAssessment = sheet({
  id: 'riskAssessment',
  title: 'Behoort patiënt tot een risicogroep?',

  options: [
    {
      label: 'Nee',
      value: 'healthy',
    },
    {
      label: 'Diabetes mellitus of een verminderde weerstand',
      value: 'vulnerable',
    },
    {
      label:
        'Patiënten met afwijkingen aan de nieren of urinewegen (zoals ernstige nierfunctiestoornissen (eGFR < 30 ml/min/1,73 m2), cystenieren, nierstenen, een neurogene blaas, een bemoeilijkte mictie of bekend blaasresidu)',
      value: 'vulnerable',
    },
    {
      label: 'Patiënten met neurologische blaasfunctiestoornissen',
      value: 'vulnerable',
    },
    {
      label: 'Zwangeren',
      value: 'pregnant',
    },
    {
      label: 'Mannen',
      value: 'men',
    },
    {
      label: 'Kinderen',
      value: 'children',
    },
  ],

  jump() {
    const store = useStore();

    if (
      store.getQuestion('tissueInvasion')?.model === 'tissueInvasion' &&
      store.getQuestion('riskAssessment')?.model === 'pregnant'
    ) {
      store.setAdvice(
        'Een pyelonefritis in de zwangerschap gaat gepaard met een verhoogd risico op ernstige morbiditeit of mortaliteit. Het advies om zwangeren met een pyelonefritis voor behandeling te verwijzen naar de 2e lijn sluit aan bij de aanbeveling uit de richtlijn Urineweginfecties in de Zwangerschap van de NVOG'
      );
      store.setDocumentation('Verwijzing naar gynaecoloog');

      return '_submit';
    }

    // Next question
  },
});
