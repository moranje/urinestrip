export const uti = {
  local: {
    healthy: {
      antibiotics: [
        'Afwachtend beleid (eventueel met pijnstilling), opnieuw urineonderzoek indien geen verbetering na 7 dagen',
        'Nitrofurantoïne, 5 dagen, 2 dd 100 mg mga of 4 dd 50 mg',
        'Fosfomycine, eenmalig, 3 g, bij voorkeur voor de nacht',
        'Trimethoprim, 3 dagen, 1 dd 300 mg voor de nacht',
      ],
      advice:
        'Leg uit dat een cystitis veel voorkomt, niet besmettelijk is, maar kan terugkomen. Het betreft een hinderlijke, in principe onschuldige aandoening, die spontaan binnen 1 week kan genezen.\nMet antibiotische behandeling zijn de klachten doorgaans eerder verdwenen. Klachten kunnen tot enkele dagen na afloop van de behandeling blijven bestaan. Antibioticagebruik kan echter leiden tot bijwerkingen en antibioticaresistentie.\nLaat de patiënt bij verergering van de klachten (koorts, algemeen ziek-zijn) direct contact opnemen met de (dienstdoende) huisarts. Controle van de urine is niet nodig indien de klachten, al dan niet met antibiotische behandeling, verdwijnen. Verricht, wanneer de klachten bij behandeling met alleen pijnstilling langer dan een week aanhouden, opnieuw urineonderzoek en start bij een persisterende infectie antibiotische behandeling. Verricht, wanneer de klachten 24 tot 48 uur na afloop van een antibioticumkuur niet duidelijk zijn afgenomen, opnieuw urineonderzoek en verstrek, indien aangewezen, een ander antibioticum dan het eerst gegeven middel. Ook bij afdoende behandeling kunnen klachten tot enkele dagen na behandeling blijven bestaan.',
      docs: '<treatment>. Contact bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking. Controle van de urine is niet nodig indien de klachten, al dan niet met antibiotische behandeling, verdwijnen.',
    },
    vulnerable: {
      antibiotics: [
        'Nitrofurantoïne, 7 dagen, 2 dd 100 mg mga of 4 dd 50 mg (off-label)',
        'Fosfomycine, eenmalig, 3 gram, bij voorkeur voor de nacht (off-label)',
        'Trimethoprim, 7 dagen, 1 dd 300 mg voor de nacht (off-label)',
      ],
      advice:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Laat de patiënt bij verergering van de klachten (koorts, algemeen ziek-zijn) direct contact opnemen met de (dienstdoende) huisarts',
      docs: '<treatment>. Urine op kweek (behalve bij verder gezonde vrouwen met DM), graag contact over uitslag. Opnieuw controle van urine is niet nodig indien de klachten na de kuur verdwijnen. Contact bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking.',
    },
    pregnant: {
      antibiotics: [
        'Nitrofurantoïne, 7 dagen, 2 dd 100 mg mga of 4 dd 50 mg (off-label); gecontra-indiceerd > 38 weken',
        'Amoxicilline/clavulaanzuur, 5 dagen, 3 dd 500/125 mg',
      ],
      advice:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Laat de patiënt bij verergering van de klachten (koorts, algemeen ziek-zijn) direct contact opnemen met de (dienstdoende) huisarts. Vraag zwangeren contact op te nemen over de uitslag van de kweek vanwege de mogelijke consequenties van de uitslag voor de bevalling',
      docs: '<treatment>. Urine op kweek (ook om groep-B-streptokokken (GBS) uit te sluiten), graag contact over uitslag. Opnieuw controle van urine is niet nodig indien de klachten na de kuur verdwijnen. Contact bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking.',
    },
    cadWoman: {
      antibiotics: [],
      advice:
        'Behandeling van asymptomatische bacteriurie wordt in alle patiëntgroepen, met uitzondering van zwangeren, afgeraden',
      docs: 'Behandeling is niet nodig in afwezigheid van tekenen van weefselinvasie (koorts, algehele malaise, (koude) rillingen, flank- of perineumpijn, een delier)',
    },
    men: {
      antibiotics: [
        'Nitrofurantoïne, 7 dagen, 2 dd 100 mg mga of 4 dd 50 mg (off-label)',
        'Trimethoprim, 7 dagen, 1 dd 300 mg voor de nacht (off-label)',
      ],
      advice:
        'Mannen lopen een groter risico op complicaties. Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Laat de patiënt bij verergering van de klachten (koorts, algemeen ziek-zijn) direct contact opnemen met de (dienstdoende) huisarts. Verricht, wanneer de klachten 24 tot 48 uur na afloop van de antibioticumkuur niet duidelijk zijn afgenomen, opnieuw urineonderzoek en verstrek, indien aangewezen, een alternatief middel',
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Opnieuw controle van urine is niet nodig indien de klachten na de kuur verdwijnen. Contact bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking.',
    },
    cadMen: {
      antibiotics: [],
      advice:
        'Behandeling van asymptomatische bacteriurie wordt in alle patiëntgroepen, met uitzondering van zwangeren, afgeraden',
      docs: 'Behandeling is niet nodig in afwezigheid van tekenen van weefselinvasie (koorts, algehele malaise, (koude) rillingen, flank- of perineumpijn, een delier)',
    },
    children: {
      antibiotics: [
        'Nitrofurantoïne, 5 dagen, 5 tot 6 mg/kg lichaamsgewicht in 4 giften; maximaal 200 mg/dag',
        'Amoxicilline/clavulaanzuur, 3 dagen, 50/12,5 mg/kg lichaamsgewicht in 3 giften, maximaal 1500/375 mg/dag in 3 doses',
      ],
      advice:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Laat de patiënt bij verergering van de klachten (koorts, algemeen ziek-zijn) direct contact opnemen met de (dienstdoende) huisarts.  Geef ouders van kinderen met een urineweginfectie die zindelijk zijn of > 5 jaar uitleg over de werking van de bekkenbodem en vertel dat ontspanning nodig is voor volledige lediging van blaas en darmen.',
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Opnieuw controle van urine is niet nodig indien de klachten na de kuur verdwijnen. Contact bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking. Indien binnen 48 uur geen verbetering overweeg verwijzing naar kinderarts.',
    },
  },
  tissueInvasion: {
    healthy: {
      antibiotics: [
        'Ciprofloxacine, 7 dagen, 2 dd 500 mg',
        'Amoxicilline/clavulaanzuur, 10 dagen, 3 dd 500/125 mg',
        'Cotrimoxazol, 10 dagen, 2 dd 960 mg (off-label)',
      ],
      advice:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Instrueer de patiënt contact op te nemen indien < 48 uur geen verbetering optreedt, of eerder bij verergering van het ziektebeeld of zich ontwikkelende verwardheid.',
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Opnieuw controle van urine is niet nodig indien de klachten na de kuur verdwijnen. Contact indien na 48 uur geen vebetering of verergering optreedt en bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking.',
    },
    vulnerable: {
      antibiotics: [
        'Ciprofloxacine, 7 dagen, 2 dd 500 mg',
        'Amoxicilline/clavulaanzuur, 10 dagen, 3 dd 500/125 mg',
        'Cotrimoxazol, 10 dagen, 2 dd 960 mg (off-label)',
      ],
      advice: 'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Instrueer de patiënt contact op te nemen indien < 48 uur geen verbetering optreedt, of eerder bij verergering van het ziektebeeld of zich ontwikkelende verwardheid.',
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Opnieuw controle van urine is niet nodig indien de klachten na de kuur verdwijnen. Contact indien na 48 uur geen vebetering of verergering optreedt en bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking.',
    },
    pregnant: {
      antibiotics: [ 'Verwijs naar gynaecoloog' ],
      advice:
        'Een pyelonefritis in de zwangerschap gaat gepaard met een verhoogd risico op ernstige morbiditeit of mortaliteit. Het advies om zwangeren met een pyelonefritis voor behandeling te verwijzen naar de 2e lijn sluit aan bij de aanbeveling uit de richtlijn Urineweginfecties in de Zwangerschap van de NVOG',
      docs: 'Verwijs naar gynaecoloog',
    },
    cadWoman: {
      antibiotics: [
        'Ciprofloxacine, 7 dagen, 2 dd 500 mg',
        'Amoxicilline/clavulaanzuur, 10 dagen, 3 dd 500/125 mg',
        'Cotrimoxazol, 10 dagen, 2 dd 960 mg (off-label)',
      ],
      advice: 'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Instrueer de patiënt contact op te nemen indien < 48 uur geen verbetering optreedt, of eerder bij verergering van het ziektebeeld of zich ontwikkelende verwardheid.',
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Opnieuw controle van urine is niet nodig indien de klachten na de kuur verdwijnen. Contact indien na 48 uur geen vebetering of verergering optreedt en bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking.',
    },
    men: {
      antibiotics: [
        'Ciprofloxacine, 14 dagen, 2 dd 500 mg',
        'Amoxicilline/clavulaanzuur, 14 dagen, 3 dd 500/125 mg',
        'Cotrimoxazol, 14 dagen, 2 dd 960 mg (off-label)',
      ],
      advice: 'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Instrueer de patiënt contact op te nemen indien < 48 uur geen verbetering optreedt, of eerder bij verergering van het ziektebeeld of zich ontwikkelende verwardheid.',
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Opnieuw controle van urine is niet nodig indien de klachten na de kuur verdwijnen. Contact indien na 48 uur geen vebetering of verergering optreedt en bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking.',
    },
    cadMen: {
      antibiotics: [
        'Ciprofloxacine, 14 dagen, 2 dd 500 mg',
        'Amoxicilline/clavulaanzuur, 14 dagen, 3 dd 500/125 mg',
        'Cotrimoxazol, 14 dagen, 2 dd 960 mg (off-label)',
      ],
      advice: 'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Instrueer de patiënt contact op te nemen indien < 48 uur geen verbetering optreedt, of eerder bij verergering van het ziektebeeld of zich ontwikkelende verwardheid.',
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Opnieuw controle van urine is niet nodig indien de klachten na de kuur verdwijnen. Contact indien na 48 uur geen vebetering of verergering optreedt en bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking.',
    },
    children: {
      antibiotics: [
        'Amoxicilline/clavulaanzuur, 10 dagen, < 40 kg: 50/12,5 mg/kg lichaamsgewicht in 3 giften; > 40 kg: 1500/375 mg/dag in 3 doses',
        'Cotrimoxazol, 10 dagen, 30/6 mg/kg/dag in 2 giften, max 1600/320 mg/dag',
      ],
      advice: 'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Instrueer de patiënt contact op te nemen indien < 48 uur geen verbetering optreedt, of eerder bij verergering van het ziektebeeld of zich ontwikkelende verwardheid. Leg uit aan ouders met een kind van > 1 maand en < 2 jaar dat het maken van een echo van de urinewegen nodig is om uit te sluiten dat er sprake is van een onderliggende oorzaak van de infectie. Geef ouders van kinderen die zindelijk zijn of > 5 jaar uitleg over de werking van de bekkenbodem en vertel dat ontspanning nodig is voor volledige lediging van blaas en darmen.',
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Opnieuw controle van urine is niet nodig indien de klachten na de kuur verdwijnen. Contact indien na 48 uur geen vebetering of verergering optreedt en bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking.',
    },
  },
};
