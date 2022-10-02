import { sheet } from './_base';
import { useStore } from '@/store/store';

export const invisiableHematuria = sheet({
  id: 'invisiableHematuria',
  title: 'Bloed op de urinestrip',

  options: [
    {
      label: '1e keer bloed bij de urinestrip',
      value: 'first',
    },
    {
      label: '2e keer geen bloed bij de urinestrip',
      value: 'second',
    },
    {
      label: 'Bloed op 2 van de max. 3 testen',
      value: 'final',
    },
  ],

  jump() {
    const store = useStore();
    const answer = store.getQuestion('invisiableHematuria')?.model ?? '';

    store.setAdvice(
      'Het vinden van erytrocyten in de urine is niet altijd een teken van een onderliggend lijden (de sensitiviteit van de urinesticktest voor erytrocyten is 91,6%, de specificiteit is 56,9%. De lage specificiteit maakt dat een positieve urinesticktest geen garantie biedt op erytrocyten in de urine). Als de urinesticktest positief is bij een patiënt zonder klachten of met klachten zonder duidelijke oorzaak, luidt het advies om de test na 1 week te herhalen en dan nogmaals als de tweede test negatief is. Als 2 urinesticktests binnen enkele weken een positieve uitslag geven, mag men spreken van ‘persisterend erytrocytenverlies in de urine’. Foutpositieve testuitslagen ontstaan door myoglobinurie, forse bacteriurie, oxiderende schoonmaakmiddelen bij het reinigen van verzamelpotjes en contaminatie met bijvoorbeeld menstruatiebloed of bloed uit rectum of colon. Foutnegatieve resultaten ontstaan door hoge concentraties eiwit (> 5 g/l), vitamine C of nitriet (> 2,5 mmol/l), en conserveermiddelen (formaline).'
    );

    if (answer === 'first' || answer === 'second') {
      store.setDocumentation(
        'Over 1 week controle op bloed via een urineonderzoek. Instructies: enkele dagen vóór het onderzoek niet intensief te sporten, de urine niet te verzamelen tijdens een menstruatie en een schoon verzamelpotje te gebruiken. Bij nieuwe symptomen contact. Indien bij controle geen bloed in de urine geen verdere controle.'
      );

      return '_submit';
    }

    store.setDocumentation(
      'Afspraak op het spreekuur ingepland voor verdere inventarisatie hematurie (glomerulair of urinewegen/blaas).'
    );

    return '_submit';
  },
});
