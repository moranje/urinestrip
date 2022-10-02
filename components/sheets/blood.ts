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
    const answer = store.getQuestion('blood')?.model ?? '';

    if (answer === 'visibleHematuria') {
      store.setAdvice(
        'Plan een afspraak op het spreekuur in. Macroscopische hematurie die niet wordt verklaard door menstruatie, myoglobinurie na extreme inspanning, een urineweginfectie of nierstenen is een alarmsymptoom en verdiend aanvullend onderzoek naar onderliggende oorzaak. Zie https://www.henw.org/artikelen/microscopisch-erytrocytenverlies-de-urine'
      );
      store.setDocumentation('Afspraak op spreekuur ingepland.');

      return '_submit';
    } else if (answer === 'proteinuria') {
      store.setAdvice(
        'Urinescreening met urinestrip is veelal positief vanaf een eiwit(albumine)concentratie van ongeveer 100-300 mg/l. Een positieve urinestrip voor eiwit samen met hematurie rechtvaardigt dan ook een nefrologische analyse. Instrueer de patiënt dat een urinemonster zo snel mogelijk na verzamelen bij het laboratorium moet worden ingeleverd (liefst ter plaatse). Gebruik de tweede, midstraal, ochtendurine (een verzameling van twee tot vier uur na lozing van de eerste ochtendurine) voor onderzoek. Omdat dit monster geconcentreerd en zuur is, zijn de erytrocyten beter te behouden. Maar het langdurige overnachtverblijf in de blaas vergroot de kans op afbraak.'
      );
      store.setDocumentation(
        'Bloedonderzoek op kreatinine/eGFR, nuchter glucose\nUrine: sediment (vraagstelling: Erytrocyten? Percentage dysmorfe erytrocyten, (inclusief acanthocyten) en (indien aanwezig) percentage acanthocyten ten opzichte van het totaal aantal erytrocyten? Aanwezigheid en aard van cilinders?) en mate van proteïnurie (albumine, kreatinine en ACR)\nBloeddrukmeting\nNa onderzoeken op korte termijn afspraak op spreekuur'
      );

      return '_submit';
    }
  },
});
