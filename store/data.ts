export const uti: {
  [key: string]: {
    [key: string]: {
      antibiotics: {
        description: string[];
        contraIndications: string[];
      };
      advice: string;
      docs: string;
    };
  };
} = {
  local: {
    healthy: {
      antibiotics: {
        description: [
          'Afwachtend beleid (eventueel met pijnstilling), opnieuw urineonderzoek indien geen verbetering na 7 dagen, als de urineweg infectie niet weg is start alsnog met antibiotica',
          'Nitrofurantoïne, 5 dagen, 2 dd 100 mg mga of 4 dd 50 mg',
          'Fosfomycine, eenmalig, 3 g, bij voorkeur voor de nacht',
          'Trimethoprim, 3 dagen, 1 dd 300 mg voor de nacht',
        ],
        contraIndications: [
          '',
          'Contra-indicaties: eGFR < 30 ml/min en G6PD-deficiëntie',
          'Let op: Geef vrouwen die borstvoeding geven bij voorkeur geen fosfomycine',
          'Contra-indicaties zijn onder andere ernstige leverfunctiestoornissen, ernstige afwijkingen in het bloedbeeld, acute porfyrie en methotrexaatgebruik. Let op: Bij een eGFR 10-30 ml/min: eerste 3 dagen normale dosering. Daarna 50% van de normale dosering. Bij combinatie met spirinolacton kan hyperkaliëmie optreden; de kaliumconcentratie moet worden gecontroleerd na 2-4 dagen gebruik',
        ],
      },
      advice:
        'Leg uit dat een cystitis veel voorkomt, niet besmettelijk is, maar kan terugkomen. Het betreft een hinderlijke, in principe onschuldige aandoening, die spontaan binnen 1 week kan genezen (55% van gezonde vrouwen).\nMet antibiotische behandeling zijn de klachten doorgaans eerder verdwenen. Klachten kunnen tot enkele dagen na afloop van de behandeling blijven bestaan. Antibioticagebruik kan echter leiden tot bijwerkingen en antibioticaresistentie.\nLaat de patiënt bij verergering van de klachten (koorts, algemeen ziek-zijn) direct contact opnemen met de (dienstdoende) huisarts. Controle van de urine is niet nodig indien de klachten, al dan niet met antibiotische behandeling, verdwijnen. Verricht, wanneer de klachten bij behandeling met alleen pijnstilling langer dan een week aanhouden, opnieuw urineonderzoek en start bij een persisterende infectie antibiotische behandeling. Verricht, wanneer de klachten 24 tot 48 uur na afloop van een antibioticumkuur niet duidelijk zijn afgenomen, opnieuw urineonderzoek en verstrek, indien aangewezen, een ander antibioticum dan het eerst gegeven middel. Ook bij afdoende behandeling kunnen klachten tot enkele dagen na behandeling blijven bestaan.',
      docs: '<treatment>. Contact bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking.',
    },
    vulnerable: {
      antibiotics: {
        description: [
          'Nitrofurantoïne, 7 dagen, 2 dd 100 mg mga of 4 dd 50 mg (off-label)',
          'Fosfomycine, eenmalig, 3 gram, bij voorkeur voor de nacht (off-label)',
          'Trimethoprim, 7 dagen, 1 dd 300 mg voor de nacht (off-label)',
        ],
        contraIndications: [
          'Contra-indicaties: eGFR < 30 ml/min en een G6PD-deficiëntie',
          '',
          'Contra-indicaties zijn onder andere ernstige leverfunctiestoornissen, ernstige afwijkingen in het bloedbeeld, acute porfyrie en methotrexaatgebruik. Let op: Bij een eGFR 10-30 ml/min: eerste 3 dagen normale dosering. Daarna 50% van de normale dosering. Bij combinatie met spirinolacton kan hyperkaliëmie optreden; de kaliumconcentratie moet worden gecontroleerd na 2-4 dagen gebruik',
        ],
      },
      advice:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Laat de patiënt bij verergering van de klachten (koorts, algemeen ziek-zijn) direct contact opnemen met de (dienstdoende) huisarts',
      docs: '<treatment>. Urine op kweek (behalve bij verder gezonde vrouwen met DM), graag contact over uitslag. Contact bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking.',
    },
    pregnant: {
      antibiotics: {
        description: [
          'Nitrofurantoïne, 7 dagen, 2 dd 100 mg mga of 4 dd 50 mg (off-label); gecontra-indiceerd > 38 weken',
          'Amoxicilline/clavulaanzuur, 5 dagen, 3 dd 500/125 mg',
        ],
        contraIndications: [
          'Contra-indicaties: eGFR < 30 ml/min en een G6PD-deficiëntie',
          'Let op: Bij een eGFR < 30 ml/min: pas de dosering aan naar amoxicilline/clavulaanzuur 875/125 mg 2 dd',
        ],
      },
      advice:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Laat de patiënt bij verergering van de klachten (koorts, algemeen ziek-zijn) direct contact opnemen met de (dienstdoende) huisarts. Vraag zwangeren contact op te nemen over de uitslag van de kweek vanwege de mogelijke consequenties van de uitslag voor de bevalling',
      docs: '<treatment>. Urine op kweek (ook om groep-B-streptokokken (GBS) uit te sluiten), graag contact over uitslag. Contact bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking.',
    },
    cadWoman: {
      antibiotics: {
        description: [],
        contraIndications: [],
      },
      advice:
        'Behandeling van asymptomatische bacteriurie wordt in alle patiëntgroepen, met uitzondering van zwangeren, afgeraden',
      docs: 'Behandeling is niet nodig in afwezigheid van tekenen van weefselinvasie (koorts, algehele malaise, (koude) rillingen, flank- of perineumpijn, een delier)',
    },
    men: {
      antibiotics: {
        description: [
          'Nitrofurantoïne, 7 dagen, 2 dd 100 mg mga of 4 dd 50 mg (off-label)',
          'Trimethoprim, 7 dagen, 1 dd 300 mg voor de nacht (off-label)',
        ],
        contraIndications: [
          'Contra-indicaties: eGFR < 30 ml/min en een G6PD-deficiëntie',
          'Contra-indicaties zijn onder andere ernstige leverfunctiestoornissen, ernstige afwijkingen in het bloedbeeld, acute porfyrie en methotrexaatgebruik. Let op: Bij een eGFR 10-30 ml/min: eerste 3 dagen normale dosering. Daarna 50% van de normale dosering. Bij combinatie met spirinolacton kan hyperkaliëmie optreden; de kaliumconcentratie moet worden gecontroleerd na 2-4 dagen gebruik',
        ],
      },
      advice:
        'Mannen lopen een groter risico op complicaties. Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Laat de patiënt bij verergering van de klachten (koorts, algemeen ziek-zijn) direct contact opnemen met de (dienstdoende) huisarts. Verricht, wanneer de klachten 24 tot 48 uur na afloop van de antibioticumkuur niet duidelijk zijn afgenomen, opnieuw urineonderzoek en verstrek, indien aangewezen, een alternatief middel',
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Contact bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking.',
    },
    cadMen: {
      antibiotics: {
        description: [],
        contraIndications: [],
      },
      advice:
        'Behandeling van asymptomatische bacteriurie wordt in alle patiëntgroepen, met uitzondering van zwangeren, afgeraden',
      docs: 'Behandeling is niet nodig in afwezigheid van tekenen van weefselinvasie (koorts, algehele malaise, (koude) rillingen, flank- of perineumpijn, een delier)',
    },
    children: {
      antibiotics: {
        description: [
          'Nitrofurantoïne, 5 dagen, 5 tot 6 mg/kg lichaamsgewicht in 4 giften; maximaal 200 mg/dag',
          'Amoxicilline/clavulaanzuur, 3 dagen, 50/12,5 mg/kg lichaamsgewicht in 3 giften, maximaal 1500/375 mg/dag in 3 doses',
        ],
        contraIndications: [
          'Contra-indicaties: eGFR < 30 ml/min en een G6PD-deficiëntie',
          'Let op: Bij een eGFR < 30 ml/min: pas de dosering aan naar amoxicilline/clavulaanzuur 875/125 mg 2 dd',
        ],
      },
      advice:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Laat de patiënt bij verergering van de klachten (koorts, algemeen ziek-zijn) direct contact opnemen met de (dienstdoende) huisarts.  Geef ouders van kinderen met een urineweginfectie die zindelijk zijn of > 5 jaar uitleg over de werking van de bekkenbodem en vertel dat ontspanning nodig is voor volledige lediging van blaas en darmen.',
      docs: '<treatment>. Urine op kweek bij kinderen < 12 jaar, graag contact over uitslag. Contact bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking. Indien binnen 48 uur geen verbetering overweeg verwijzing naar kinderarts.',
    },
  },
  tissueInvasion: {
    healthy: {
      antibiotics: {
        description: [
          'Ciprofloxacine, 7 dagen, 2 dd 500 mg',
          'Amoxicilline/clavulaanzuur, 10 dagen, 3 dd 500/125 mg',
          'Cotrimoxazol, 10 dagen, 2 dd 960 mg (off-label)',
        ],
        contraIndications: [
          'Contra-indicaties: het geven van borstvoeding, ernstige gecombineerde lever- en nierfunctiestoornissen, neuropathie en peesaandoeningen gerelateerd aan het eerdere gebruik van fluorochinolonen. Overweeg een alternatief bij patiënten met een verhoogd risico op een aorta-aneurysma of -dissectie. Let op: Bij een eGFR 10-30 ml/min: geef de normale keerdosis met een interval van 24 uur tussen 2 doses. Neem niet gelijktijdig in met metaalverbindingen, zoals calcium, magnesium- en ijzerpreparaten.',
          'Let op: Bij een eGFR < 30 ml/min: pas de dosering aan naar amoxicilline/clavulaanzuur 875/125 mg 2 dd',
          'Contra-indicaties: gebruik van cumarine of methotrexaat en bij ernstige lever- en nierfunctiestoornissen, ernstige afwijkingen in het bloedbeeld of acute porfyrie. Let op: bij een eGFR 10-30 ml/min: geef 50% van de normale keerdosis OF verdubbel het doseerinterval.',
        ],
      },
      advice:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Instrueer de patiënt contact op te nemen indien < 48 uur geen verbetering optreedt, of eerder bij verergering van het ziektebeeld of zich ontwikkelende verwardheid. Stops, als uit de kweek blijkt dat de verwekker gevoelig is voor amoxicilline, amoxicilline/clavulaanzuur of cotrimoxazol het eerder gestarte ciprofloxacine en vul de kuur aan met het alternatief. Vooral ciprofloxacine kent een risico op ernstige bijwerkingen.',
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Contact indien na 48 uur geen vebetering of verergering optreedt en bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking.',
    },
    vulnerable: {
      antibiotics: {
        description: [
          'Ciprofloxacine, 7 dagen, 2 dd 500 mg',
          'Amoxicilline/clavulaanzuur, 10 dagen, 3 dd 500/125 mg',
          'Cotrimoxazol, 10 dagen, 2 dd 960 mg (off-label)',
        ],
        contraIndications: [
          'Contra-indicaties: het geven van borstvoeding, ernstige gecombineerde lever- en nierfunctiestoornissen, neuropathie en peesaandoeningen gerelateerd aan het eerdere gebruik van fluorochinolonen. Overweeg een alternatief bij patiënten met een verhoogd risico op een aorta-aneurysma of -dissectie. Let op: Bij een eGFR 10-30 ml/min: geef de normale keerdosis met een interval van 24 uur tussen 2 doses. Neem niet gelijktijdig in met metaalverbindingen, zoals calcium, magnesium- en ijzerpreparaten.',
          'Let op: Bij een eGFR < 30 ml/min: pas de dosering aan naar amoxicilline/clavulaanzuur 875/125 mg 2 dd',
          'Contra-indicaties: gebruik van cumarine of methotrexaat en bij ernstige lever- en nierfunctiestoornissen, ernstige afwijkingen in het bloedbeeld of acute porfyrie. Let op: bij een eGFR 10-30 ml/min: geef 50% van de normale keerdosis OF verdubbel het doseerinterval.',
        ],
      },
      advice:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Instrueer de patiënt contact op te nemen indien < 48 uur geen verbetering optreedt, of eerder bij verergering van het ziektebeeld of zich ontwikkelende verwardheid. Overweeg indien uit de kweek blijkt dat de verwekker gevoelig is voor amoxicilline, amoxicilline/clavulaanzuur of cotrimoxazol het eerder gestarte ciprofloxacine te stoppen. Dit beleid vermindert het risico op bijwerkingen en op resistentie-ontwikkeling. Vooral ciprofloxacine kent een risico op ernstige bijwerkingen (switch naar: 1e keus: amoxicilline 3 dd 500 mg. 2e keus amoxicilline/clavulaanzuur 3 dd 500/125 mg of cotrimoxazol 2 dd 960 mg)',
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Contact indien na 48 uur geen vebetering of verergering optreedt en bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking.',
    },
    pregnant: {
      antibiotics: {
        description: ['Verwijs naar gynaecoloog'],
        contraIndications: [],
      },
      advice:
        'Een pyelonefritis in de zwangerschap gaat gepaard met een verhoogd risico op ernstige morbiditeit of mortaliteit. Het advies om zwangeren met een pyelonefritis voor behandeling te verwijzen naar de 2e lijn sluit aan bij de aanbeveling uit de richtlijn Urineweginfecties in de Zwangerschap van de NVOG',
      docs: 'Verwijs naar gynaecoloog',
    },
    cadWoman: {
      antibiotics: {
        description: [
          'Ciprofloxacine, 7 dagen, 2 dd 500 mg',
          'Amoxicilline/clavulaanzuur, 10 dagen, 3 dd 500/125 mg',
          'Cotrimoxazol, 10 dagen, 2 dd 960 mg (off-label)',
        ],
        contraIndications: [
          'Contra-indicaties: het geven van borstvoeding, ernstige gecombineerde lever- en nierfunctiestoornissen, neuropathie en peesaandoeningen gerelateerd aan het eerdere gebruik van fluorochinolonen. Overweeg een alternatief bij patiënten met een verhoogd risico op een aorta-aneurysma of -dissectie. Let op: Bij een eGFR 10-30 ml/min: geef de normale keerdosis met een interval van 24 uur tussen 2 doses. Neem niet gelijktijdig in met metaalverbindingen, zoals calcium, magnesium- en ijzerpreparaten.',
          'Let op: Bij een eGFR < 30 ml/min: pas de dosering aan naar amoxicilline/clavulaanzuur 875/125 mg 2 dd',
          'Contra-indicaties: gebruik van cumarine of methotrexaat en bij ernstige lever- en nierfunctiestoornissen, ernstige afwijkingen in het bloedbeeld of acute porfyrie. Let op: bij een eGFR 10-30 ml/min: geef 50% van de normale keerdosis OF verdubbel het doseerinterval.',
        ],
      },
      advice:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Instrueer de patiënt contact op te nemen indien < 48 uur geen verbetering optreedt, of eerder bij verergering van het ziektebeeld of zich ontwikkelende verwardheid. Overweeg indien uit de kweek blijkt dat de verwekker gevoelig is voor amoxicilline, amoxicilline/clavulaanzuur of cotrimoxazol het eerder gestarte ciprofloxacine te stoppen. Dit beleid vermindert het risico op bijwerkingen en op resistentie-ontwikkeling. Vooral ciprofloxacine kent een risico op ernstige bijwerkingen (switch naar: 1e keus: amoxicilline 3 dd 500 mg. 2e keus amoxicilline/clavulaanzuur 3 dd 500/125 mg of cotrimoxazol 2 dd 960 mg)',
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Contact indien na 48 uur geen vebetering of verergering optreedt en bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking.',
    },
    men: {
      antibiotics: {
        description: [
          'Ciprofloxacine, 14 dagen, 2 dd 500 mg',
          'Amoxicilline/clavulaanzuur, 14 dagen, 3 dd 500/125 mg',
          'Cotrimoxazol, 14 dagen, 2 dd 960 mg (off-label)',
        ],
        contraIndications: [
          'Contra-indicaties: het geven van borstvoeding, ernstige gecombineerde lever- en nierfunctiestoornissen, neuropathie en peesaandoeningen gerelateerd aan het eerdere gebruik van fluorochinolonen. Overweeg een alternatief bij patiënten met een verhoogd risico op een aorta-aneurysma of -dissectie. Let op: Bij een eGFR 10-30 ml/min: geef de normale keerdosis met een interval van 24 uur tussen 2 doses. Neem niet gelijktijdig in met metaalverbindingen, zoals calcium, magnesium- en ijzerpreparaten.',
          'Let op: Bij een eGFR < 30 ml/min: pas de dosering aan naar amoxicilline/clavulaanzuur 875/125 mg 2 dd',
          'Contra-indicaties: gebruik van cumarine of methotrexaat en bij ernstige lever- en nierfunctiestoornissen, ernstige afwijkingen in het bloedbeeld of acute porfyrie. Let op: bij een eGFR 10-30 ml/min: geef 50% van de normale keerdosis OF verdubbel het doseerinterval.',
        ],
      },
      advice:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Instrueer de patiënt contact op te nemen indien < 48 uur geen verbetering optreedt, of eerder bij verergering van het ziektebeeld of zich ontwikkelende verwardheid. Als uit de kweek blijkt dat de verwekker gevoelig is voor cotrimoxazol, te starten met cotrimoxazol 2 dd 960 mg voor de resterende dagen van de originele kuur. Cotrimoxazol is gecontra-indiceerd bij gebruik van cumarine of methotrexaat en bij ernstige lever- en nierfunctiestoornissen, ernstige afwijkingen in het bloedbeeld of acute porfyrie. Ciprofloxacine kent een risico op ernstige bijwerkingen.',
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Contact indien na 48 uur geen vebetering of verergering optreedt en bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking.',
    },
    cadMen: {
      antibiotics: {
        description: [
          'Ciprofloxacine, 14 dagen, 2 dd 500 mg',
          'Amoxicilline/clavulaanzuur, 14 dagen, 3 dd 500/125 mg',
          'Cotrimoxazol, 14 dagen, 2 dd 960 mg (off-label)',
        ],
        contraIndications: [
          'Contra-indicaties: het geven van borstvoeding, ernstige gecombineerde lever- en nierfunctiestoornissen, neuropathie en peesaandoeningen gerelateerd aan het eerdere gebruik van fluorochinolonen. Overweeg een alternatief bij patiënten met een verhoogd risico op een aorta-aneurysma of -dissectie. Let op: Bij een eGFR 10-30 ml/min: geef de normale keerdosis met een interval van 24 uur tussen 2 doses. Neem niet gelijktijdig in met metaalverbindingen, zoals calcium, magnesium- en ijzerpreparaten.',
          'Let op: Bij een eGFR < 30 ml/min: pas de dosering aan naar amoxicilline/clavulaanzuur 875/125 mg 2 dd',
          'Contra-indicaties: gebruik van cumarine of methotrexaat en bij ernstige lever- en nierfunctiestoornissen, ernstige afwijkingen in het bloedbeeld of acute porfyrie. Let op: bij een eGFR 10-30 ml/min: geef 50% van de normale keerdosis OF verdubbel het doseerinterval.',
        ],
      },
      advice:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Instrueer de patiënt contact op te nemen indien < 48 uur geen verbetering optreedt, of eerder bij verergering van het ziektebeeld of zich ontwikkelende verwardheid. Overweeg indien uit de kweek blijkt dat de verwekker gevoelig is voor amoxicilline, amoxicilline/clavulaanzuur of cotrimoxazol het eerder gestarte ciprofloxacine te stoppen. Dit beleid vermindert het risico op bijwerkingen en op resistentie-ontwikkeling. Vooral ciprofloxacine kent een risico op ernstige bijwerkingen (switch naar: 1e keus: amoxicilline 3 dd 500 mg. 2e keus amoxicilline/clavulaanzuur 3 dd 500/125 mg of cotrimoxazol 2 dd 960 mg)',
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Contact indien na 48 uur geen vebetering of verergering optreedt en bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking.',
    },
    children: {
      antibiotics: {
        description: [
          'Amoxicilline/clavulaanzuur, 10 dagen, < 40 kg: 50/12,5 mg/kg lichaamsgewicht in 3 giften; > 40 kg: 1500/375 mg/dag in 3 doses',
          'Cotrimoxazol, 10 dagen, 30/6 mg/kg/dag in 2 giften, max 1600/320 mg/dag',
        ],
        contraIndications: [
          'Let op: Bij een eGFR < 30 ml/min: pas de dosering aan naar amoxicilline/clavulaanzuur 875/125 mg 2 dd',
          'Contra-indicaties: gebruik van cumarine of methotrexaat en bij ernstige lever- en nierfunctiestoornissen, ernstige afwijkingen in het bloedbeeld of acute porfyrie. Let op: bij een eGFR 10-30 ml/min: geef 50% van de normale keerdosis OF verdubbel het doseerinterval.',
        ],
      },
      advice:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Instrueer de patiënt contact op te nemen indien < 48 uur geen verbetering optreedt, of eerder bij verergering van het ziektebeeld of zich ontwikkelende verwardheid. Leg uit aan ouders met een kind van > 1 maand en < 2 jaar dat het maken van een echo van de urinewegen nodig is om uit te sluiten dat er sprake is van een onderliggende oorzaak van de infectie. Geef ouders van kinderen die zindelijk zijn of > 5 jaar uitleg over de werking van de bekkenbodem en vertel dat ontspanning nodig is voor volledige lediging van blaas en darmen.',
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Contact indien na 48 uur geen vebetering of verergering optreedt en bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking.',
    },
  },
};
