export const uti: {
  [key: string]: {
    [key: string]: {
      treatment?: {
        description: string;
        contraIndications: string[] | null;
        info?: string;
        additionalTest?: string;
        testAfterTreatment?: string;
        documentation: string;
      }[];
      antibiotics: {
        description: string[];
        contraIndications: string[];
      };
      advice: string;
      docs: string;
      generalInfo?: string;
      explainer?: string;
      documentation?: string;
      sources?: {
        name: string;
        url: string;
      }[];
    };
  };
} = {
  local: {
    healthy: {
      treatment: [
        {
          description: 'Afwachtend beleid (eventueel met pijnstilling)',
          contraIndications: null,
          testAfterTreatment:
            'Indien na 1 week geen verbetering urineonderzoek herhalen en bij positieve test behandelen met antiobiotica',
          documentation:
            'Afwachtend beleid (eventueel met pijnstilling) afgesproken. Indien na 1 week geen verbetering urineonderzoek herhalen en bij positieve test behandelen met antiobiotica. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-vrouw',
        },
        {
          description:
            'Nitrofurantoïne, 5 dagen, 2 dd 100 mg mga of 4 dd 50 mg',
          contraIndications: ['eGFR < 30 ml/min', 'G6PD-deficiëntie'],
          documentation:
            'Nitrofurantoïne, 5 dagen, 2 dd 100 mg mga of 4 dd 50 mg. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-vrouw',
        },
        {
          description: 'Fosfomycine, eenmalig, 3 g, bij voorkeur voor de nacht',
          contraIndications: [
            'Geef vrouwen die borstvoeding geven bij voorkeur geen fosfomycine',
          ],
          documentation:
            'Fosfomycine, eenmalig, 3 g, bij voorkeur voor de nacht. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-vrouw',
        },
        {
          description: 'Trimethoprim, 3 dagen, 1 dd 300 mg voor de nacht',
          contraIndications: [
            'ernstige leverfunctiestoornissen',
            'ernstige afwijkingen in het bloedbeeld',
            'acute porfyrie',
            'methotrexaatgebruik',
          ],
          documentation:
            'Trimethoprim, 3 dagen, 1 dd 300 mg voor de nacht. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-vrouw',
          info: 'Bij een eGFR 10-30 ml/min: eerste 3 dagen normale dosering. Daarna 50% van de normale dosering. Bij combinatie met spirinolacton kan hyperkaliëmie optreden, de kaliumconcentratie moet worden gecontroleerd na 2-4 dagen gebruik',
        },
      ],
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
        'Leg uit dat een cystitis veel voorkomt, niet besmettelijk is, maar kan terugkomen. Het betreft een hinderlijke, in principe onschuldige aandoening, die spontaan binnen 1 week kan genezen (bij 55% van gezonde vrouwen).\nMet antibiotische behandeling zijn de klachten doorgaans eerder verdwenen. Klachten kunnen tot enkele dagen na afloop van de behandeling blijven bestaan. Antibioticagebruik kan echter leiden tot bijwerkingen en antibioticaresistentie.\nLaat de patiënt bij verergering van de klachten (koorts, algemeen ziek-zijn) direct contact opnemen met de (dienstdoende) huisarts. Controle van de urine is niet nodig indien de klachten, al dan niet met antibiotische behandeling, verdwijnen. Verricht, wanneer de klachten bij behandeling met alleen pijnstilling langer dan een week aanhouden, opnieuw urineonderzoek en start bij een persisterende infectie antibiotische behandeling. Verricht, wanneer de klachten 24 tot 48 uur na afloop van een antibioticumkuur niet duidelijk zijn afgenomen, opnieuw urineonderzoek en verstrek, indien aangewezen, een ander antibioticum dan het eerst gegeven middel. Ook bij afdoende behandeling kunnen klachten tot enkele dagen na behandeling blijven bestaan.',
      docs: '<treatment>. Contact bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking',
      explainer:
        'Leg uit dat een cystitis veel voorkomt, niet besmettelijk is, maar kan terugkomen. Het betreft een hinderlijke, in principe onschuldige aandoening, die spontaan binnen 1 week kan genezen (bij 55% van gezonde vrouwen).\nMet antibiotische behandeling zijn de klachten doorgaans eerder verdwenen. Klachten kunnen tot enkele dagen na afloop van de behandeling blijven bestaan. Antibioticagebruik kan echter leiden tot bijwerkingen en antibioticaresistentie.',
      sources: [
        {
          name: 'NHG-Standaard Urineweginfecties',
          url: 'https://richtlijnen.nhg.org/standaarden/urineweginfecties#volledige-tekst-richtlijnen-beleid-bij-cystitis',
        },
        {
          name: 'Thuisarts',
          url: 'https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-vrouw',
        },
      ],
    },
    vulnerable: {
      treatment: [
        {
          description:
            'Nitrofurantoïne, 7 dagen, 2 dd 100 mg mga of 4 dd 50 mg',
          contraIndications: ['eGFR < 30 ml/min', 'G6PD-deficiëntie'],
          documentation:
            'Nitrofurantoïne, 7 dagen, 2 dd 100 mg mga of 4 dd 50 mg. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking',
        },
        {
          description: 'Fosfomycine, eenmalig, 3 g, bij voorkeur voor de nacht',
          contraIndications: [
            'Geef vrouwen die borstvoeding geven bij voorkeur geen fosfomycine',
          ],
          documentation:
            'Fosfomycine, eenmalig, 3 g, bij voorkeur voor de nacht. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking',
        },
        {
          description: 'Trimethoprim, 7 dagen, 1 dd 300 mg voor de nacht',
          contraIndications: [
            'ernstige leverfunctiestoornissen',
            'ernstige afwijkingen in het bloedbeeld',
            'acute porfyrie',
            'methotrexaatgebruik',
          ],
          documentation:
            'Trimethoprim, 7 dagen, 1 dd 300 mg voor de nacht. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking',
          info: 'Bij een eGFR 10-30 ml/min: eerste 3 dagen normale dosering. Daarna 50% van de normale dosering. Bij combinatie met spirinolacton kan hyperkaliëmie optreden, de kaliumconcentratie moet worden gecontroleerd na 2-4 dagen gebruik',
        },
      ],
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
      explainer:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Laat de patiënt bij verergering van de klachten (koorts, algemeen ziek-zijn) direct contact opnemen met de (dienstdoende) huisarts',
      sources: [
        {
          name: 'NHG-Standaard Urineweginfecties',
          url: 'https://richtlijnen.nhg.org/standaarden/urineweginfecties#volledige-tekst-richtlijnen-beleid-bij-cystitis',
        },
        {
          name: 'Thuisarts',
          url: 'https://www.thuisarts.nl/blaasontsteking',
        },
      ],
    },
    pregnant: {
      treatment: [
        {
          description:
            'Nitrofurantoïne, 7 dagen, 2 dd 100 mg mga of 4 dd 50 mg',
          contraIndications: ['eGFR < 30 ml/min', 'G6PD-deficiëntie'],
          additionalTest: 'Urinekweek',
          documentation:
            'Nitrofurantoïne, 7 dagen, 2 dd 100 mg mga of 4 dd 50 mg. Urine op kweek (ook om groep-B-streptokokken (GBS) uit te sluiten), graag contact over uitslag. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/ik-ben-zwanger-en-heb-blaasontsteking',
        },
        {
          description: 'Amoxicilline/clavulaanzuur, 5 dagen, 3 dd 500/125 mg',
          contraIndications: ['eGFR < 30 ml/min', 'G6PD-deficiëntie'],
          info: 'Bij een eGFR < 30 ml/min: pas de dosering aan naar amoxicilline/clavulaanzuur 875/125 mg 2 dd',
          additionalTest: 'Urinekweek',
          documentation:
            'Amoxicilline/clavulaanzuur, 5 dagen, 3 dd 500/125 mg. Urine op kweek (ook om groep-B-streptokokken (GBS) uit te sluiten), graag contact over uitslag. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/ik-ben-zwanger-en-heb-blaasontsteking',
        },
      ],
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
      docs: '<treatment>. Urine op kweek (ook om groep-B-streptokokken (GBS) uit te sluiten), graag contact over uitslag. Contact bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking',
      explainer:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Laat de patiënt bij verergering van de klachten (koorts, algemeen ziek-zijn) direct contact opnemen met de (dienstdoende) huisarts. Vraag zwangeren contact op te nemen over de uitslag van de kweek vanwege de mogelijke consequenties van de uitslag voor de bevalling.',
      sources: [
        {
          name: 'NHG-Standaard Urineweginfecties',
          url: 'https://richtlijnen.nhg.org/standaarden/urineweginfecties#volledige-tekst-richtlijnen-beleid-bij-cystitis',
        },
        {
          name: 'Thuisarts',
          url: 'https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-vrouw',
        },
      ],
    },
    cadWoman: {
      treatment: [
        {
          description: 'Behandeling is niet nodig.',
          contraIndications: [''],
          documentation:
            'Behandeling is niet nodig in afwezigheid van tekenen van weefselinvasie (koorts, algehele malaise, (koude) rillingen, flank- of perineumpijn, een delier)',
        },
      ],
      antibiotics: {
        description: [],
        contraIndications: [],
      },
      advice:
        'Behandeling van asymptomatische bacteriurie wordt in alle patiëntgroepen, met uitzondering van zwangeren, afgeraden',
      docs: 'Behandeling is niet nodig in afwezigheid van tekenen van weefselinvasie (koorts, algehele malaise, (koude) rillingen, flank- of perineumpijn, een delier)',
      explainer:
        'Behandeling van asymptomatische bacteriurie wordt in alle patiëntgroepen, met uitzondering van zwangeren, afgeraden',
      sources: [
        {
          name: 'NHG-Standaard Urineweginfecties',
          url: 'https://richtlijnen.nhg.org/standaarden/urineweginfecties#volledige-tekst-richtlijnen-beleid-bij-cystitis',
        },
      ],
    },
    men: {
      treatment: [
        {
          description:
            'Nitrofurantoïne, 7 dagen, 2 dd 100 mg mga of 4 dd 50 mg (off-label)',
          contraIndications: ['eGFR < 30 ml/min', 'G6PD-deficiëntie'],
          documentation:
            'Nitrofurantoïne, 7 dagen, 2 dd 100 mg mga of 4 dd 50 mg. Contact bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-man',
        },
        {
          description:
            'Trimethoprim, 7 dagen, 1 dd 300 mg voor de nacht (off-label)',
          contraIndications: [
            'ernstige leverfunctiestoornissen',
            'ernstige afwijkingen in het bloedbeeld',
            'acute porfyrie',
            'methotrexaatgebruik',
          ],
          documentation:
            'Trimethoprim, 7 dagen, 1 dd 300 mg voor de nacht. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-man',
          info: 'Bij een eGFR 10-30 ml/min: eerste 3 dagen normale dosering. Daarna 50% van de normale dosering. Bij combinatie met spirinolacton kan hyperkaliëmie optreden, de kaliumconcentratie moet worden gecontroleerd na 2-4 dagen gebruik',
        },
      ],
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
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Contact bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking',
      explainer:
        'Mannen lopen een groter risico op complicaties. Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Laat de patiënt bij verergering van de klachten (koorts, algemeen ziek-zijn) direct contact opnemen met de (dienstdoende) huisarts.',
      sources: [
        {
          name: 'NHG-Standaard Urineweginfecties',
          url: 'https://richtlijnen.nhg.org/standaarden/urineweginfecties#volledige-tekst-richtlijnen-beleid-bij-cystitis',
        },
        {
          name: 'Thuisarts',
          url: 'https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-man',
        },
      ],
    },
    cadMen: {
      treatment: [
        {
          description: 'Behandeling is niet nodig.',
          contraIndications: [''],
          documentation:
            'Behandeling is niet nodig in afwezigheid van tekenen van weefselinvasie (koorts, algehele malaise, (koude) rillingen, flank- of perineumpijn, een delier)',
        },
      ],
      antibiotics: {
        description: [],
        contraIndications: [],
      },
      advice:
        'Behandeling van asymptomatische bacteriurie wordt in alle patiëntgroepen, met uitzondering van zwangeren, afgeraden',
      docs: 'Behandeling is niet nodig in afwezigheid van tekenen van weefselinvasie (koorts, algehele malaise, (koude) rillingen, flank- of perineumpijn, een delier)',
      explainer:
        'Behandeling van asymptomatische bacteriurie wordt in alle patiëntgroepen, met uitzondering van zwangeren, afgeraden',
      sources: [
        {
          name: 'NHG-Standaard Urineweginfecties',
          url: 'https://richtlijnen.nhg.org/standaarden/urineweginfecties#volledige-tekst-richtlijnen-beleid-bij-cystitis',
        },
      ],
    },
    children: {
      treatment: [
        {
          description:
            'Nitrofurantoïne, 5 dagen, 5 tot 6 mg/kg lichaamsgewicht in 4 giften, maximaal 200 mg/dag',
          contraIndications: ['eGFR < 30 ml/min', 'G6PD-deficiëntie'],
          additionalTest: 'Urinekweek indien < 12 jaar',
          documentation:
            'Nitrofurantoïne, 5 dagen, 5 tot 6 mg/kg lichaamsgewicht in 4 giften, maximaal 200 mg/dag. Indien urine op kweek, graag contact over uitslag. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/mijn-kind-heeft-blaasontsteking. Indien binnen 48 uur geen verbetering overweeg verwijzing naar kinderarts.',
        },
        {
          description:
            'Amoxicilline/clavulaanzuur, 3 dagen, 50/12,5 mg/kg lichaamsgewicht in 3 giften, maximaal 1500/375 mg/dag in 3 doses',
          contraIndications: ['eGFR < 30 ml/min', 'G6PD-deficiëntie'],
          additionalTest: 'Urinekweek indien < 12 jaar',
          documentation:
            'Amoxicilline/clavulaanzuur, 3 dagen, 50/12,5 mg/kg lichaamsgewicht in 3 giften, maximaal 1500/375 mg/dag in 3 doses. Indien urine op kweek, graag contact over uitslag. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/mijn-kind-heeft-blaasontsteking. Indien binnen 48 uur geen verbetering overweeg verwijzing naar kinderarts.',
        },
      ],
      antibiotics: {
        description: [
          'Nitrofurantoïne, 5 dagen, 5 tot 6 mg/kg lichaamsgewicht in 4 giften, maximaal 200 mg/dag',
          'Amoxicilline/clavulaanzuur, 3 dagen, 50/12,5 mg/kg lichaamsgewicht in 3 giften, maximaal 1500/375 mg/dag in 3 doses',
        ],
        contraIndications: [
          'Contra-indicaties: eGFR < 30 ml/min en een G6PD-deficiëntie',
          'Let op: Bij een eGFR < 30 ml/min: pas de dosering aan naar amoxicilline/clavulaanzuur 875/125 mg 2 dd',
        ],
      },
      advice:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Laat de patiënt bij verergering van de klachten (koorts, algemeen ziek-zijn) direct contact opnemen met de (dienstdoende) huisarts. Geef ouders van kinderen met een urineweginfectie die zindelijk zijn of > 5 jaar uitleg over de werking van de bekkenbodem en vertel dat ontspanning nodig is voor volledige lediging van blaas en darmen.',
      docs: '<treatment>. Urine op kweek bij kinderen < 12 jaar, graag contact over uitslag. Contact bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking/mijn-kind-heeft-blaasontsteking. Indien binnen 48 uur geen verbetering overweeg verwijzing naar kinderarts.',
      explainer:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Laat de patiënt bij verergering van de klachten (koorts, algemeen ziek-zijn) direct contact opnemen met de (dienstdoende) huisarts. Geef ouders van kinderen met een urineweginfectie die zindelijk zijn of > 5 jaar uitleg over de werking van de bekkenbodem en vertel dat ontspanning nodig is voor volledige lediging van blaas en darmen.',
      sources: [
        {
          name: 'NHG-Standaard Urineweginfecties',
          url: 'https://richtlijnen.nhg.org/standaarden/urineweginfecties#volledige-tekst-richtlijnen-beleid-bij-cystitis',
        },
        {
          name: 'Thuisarts',
          url: 'https://www.thuisarts.nl/blaasontsteking/mijn-kind-heeft-blaasontsteking',
        },
      ],
    },
  },
  tissueInvasion: {
    healthy: {
      treatment: [
        {
          description: 'Ciprofloxacine, 7 dagen, 2 dd 500 mg',
          contraIndications: [
            'het geven van borstvoeding',
            'gecombineerde lever- en nierfunctiestoornissen',
            'neuropathie',
            'peesaandoeningen gerelateerd aan het eerdere gebruik van fluorochinolonen (de groep van antibiotica waartoe ciprofloxacine behoort)',
          ],
          info: 'Overweeg een alternatief bij patiënten met een verhoogd risico op een aorta-aneurysma of -dissectie. Bij een eGFR 10-30 ml/min: geef de normale keerdosis met een interval van 24 uur tussen 2 doses. Neem niet gelijktijdig in met metaalverbindingen, zoals calcium, magnesium- en ijzerpreparaten.',
          additionalTest: 'Urinekweek',
          documentation:
            'Ciprofloxacine, 7 dagen, 2 dd 500 mg. Urine op kweek, graag contact over uitslag. Als uit de kweek blijkt dat de verwekker gevoelig is voor een ander antibioticum (en de kuur nog niet voltooid is), maak dan de kuur af met een ander antibioticum (op volgorde amoxicilline, amoxicilline/clavulaanzuur of cotrimoxazol). Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-vrouw',
        },
        {
          description: 'Amoxicilline/clavulaanzuur, 10 dagen, 3 dd 500/125 mg',
          contraIndications: ['eGFR < 30 ml/min', 'G6PD-deficiëntie'],
          info: 'Bij een eGFR < 30 ml/min: pas de dosering aan naar amoxicilline/clavulaanzuur 875/125 mg 2 dd',
          additionalTest: 'Urinekweek',
          documentation:
            'Amoxicilline/clavulaanzuur, 10 dagen, 3 dd 500/125 mg. Urine op kweek, graag contact over uitslag. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-vrouw',
        },
        {
          description: 'Cotrimoxazol, 10 dagen, 2 dd 960 mg (off-label)',
          contraIndications: [
            'gebruik van cumarine of methotrexaat',
            'ernstige lever- en nierfunctiestoornissen',
            'ernstige afwijkingen in het bloedbeeld',
            'acute porfyrie',
          ],
          info: 'Bij een eGFR 10-30 ml/min: geef 50% van de normale keerdosis OF verdubbel het doseerinterval',
          additionalTest: 'Urinekweek',
          documentation:
            'Cotrimoxazol, 10 dagen, 2 dd 960 mg. Urine op kweek, graag contact over uitslag. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-vrouw',
        },
      ],
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
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Instrueer de patiënt contact op te nemen indien < 48 uur geen verbetering optreedt, of eerder bij verergering van het ziektebeeld of zich ontwikkelende verwardheid. Stop, als uit de kweek blijkt dat de verwekker gevoelig is voor amoxicilline, amoxicilline/clavulaanzuur of cotrimoxazol het eerder gestarte ciprofloxacine en vul de kuur aan met het alternatief. Vooral ciprofloxacine kent een risico op ernstige bijwerkingen.',
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Contact indien na 48 uur geen vebetering of verergering optreedt en bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-vrouw',
      explainer:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Instrueer de patiënt contact op te nemen indien < 48 uur geen verbetering optreedt, of eerder bij verergering van het ziektebeeld of zich ontwikkelende verwardheid.',
      sources: [
        {
          name: 'NHG-Standaard Urineweginfecties',
          url: 'https://richtlijnen.nhg.org/standaarden/urineweginfecties#volledige-tekst-richtlijnen-beleid-bij-cystitis',
        },
        {
          name: 'Thuisarts',
          url: 'https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-vrouw',
        },
      ],
    },
    vulnerable: {
      treatment: [
        {
          description: 'Ciprofloxacine, 7 dagen, 2 dd 500 mg',
          contraIndications: [
            'het geven van borstvoeding',
            'gecombineerde lever- en nierfunctiestoornissen',
            'neuropathie',
            'peesaandoeningen gerelateerd aan het eerdere gebruik van fluorochinolonen (de groep van antibiotica waartoe ciprofloxacine behoort)',
          ],
          info: 'Overweeg een alternatief bij patiënten met een verhoogd risico op een aorta-aneurysma of -dissectie. Bij een eGFR 10-30 ml/min: geef de normale keerdosis met een interval van 24 uur tussen 2 doses. Neem niet gelijktijdig in met metaalverbindingen, zoals calcium, magnesium- en ijzerpreparaten.',
          additionalTest: 'Urinekweek',
          documentation:
            'Ciprofloxacine, 7 dagen, 2 dd 500 mg. Urine op kweek, graag contact over uitslag. Als uit de kweek blijkt dat de verwekker gevoelig is voor een ander antibioticum (en de kuur nog niet voltooid is), maak dan de kuur af met een ander antibioticum (op volgorde amoxicilline, amoxicilline/clavulaanzuur of cotrimoxazol). Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking',
        },
        {
          description: 'Amoxicilline/clavulaanzuur, 10 dagen, 3 dd 500/125 mg',
          contraIndications: ['eGFR < 30 ml/min', 'G6PD-deficiëntie'],
          info: 'Bij een eGFR < 30 ml/min: pas de dosering aan naar amoxicilline/clavulaanzuur 875/125 mg 2 dd',
          additionalTest: 'Urinekweek',
          documentation:
            'Amoxicilline/clavulaanzuur, 10 dagen, 3 dd 500/125 mg. Urine op kweek, graag contact over uitslag. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking',
        },
        {
          description: 'Cotrimoxazol, 10 dagen, 2 dd 960 mg (off-label)',
          contraIndications: [
            'gebruik van cumarine of methotrexaat',
            'ernstige lever- en nierfunctiestoornissen',
            'ernstige afwijkingen in het bloedbeeld',
            'acute porfyrie',
          ],
          info: 'Bij een eGFR 10-30 ml/min: geef 50% van de normale keerdosis OF verdubbel het doseerinterval',
          additionalTest: 'Urinekweek',
          documentation:
            'Cotrimoxazol, 10 dagen, 2 dd 960 mg. Urine op kweek, graag contact over uitslag. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking',
        },
      ],
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
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Contact indien na 48 uur geen vebetering of verergering optreedt en bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking',
      explainer:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Instrueer de patiënt contact op te nemen indien < 48 uur geen verbetering optreedt, of eerder bij verergering van het ziektebeeld of zich ontwikkelende verwardheid. Overweeg indien uit de kweek blijkt dat de verwekker gevoelig is voor amoxicilline, amoxicilline/clavulaanzuur of cotrimoxazol het eerder gestarte ciprofloxacine te stoppen. LET OP: bij mannen geniet dan cotrimoxazol de voorkeur, bij vrouwen liever amoxiciline.',
      sources: [
        {
          name: 'NHG-Standaard Urineweginfecties',
          url: 'https://richtlijnen.nhg.org/standaarden/urineweginfecties#volledige-tekst-richtlijnen-beleid-bij-cystitis',
        },
        {
          name: 'Thuisarts',
          url: 'https://www.thuisarts.nl/blaasontsteking',
        },
      ],
    },
    pregnant: {
      treatment: [
        {
          description: 'Verwijs naar gynaecoloog',
          contraIndications: [''],
          documentation: 'Verwezen naar gynaecoloog',
        },
      ],
      antibiotics: {
        description: ['Verwijs naar gynaecoloog'],
        contraIndications: [],
      },
      advice:
        'Een pyelonefritis in de zwangerschap gaat gepaard met een verhoogd risico op ernstige morbiditeit of mortaliteit. Het advies om zwangeren met een pyelonefritis voor behandeling te verwijzen naar de 2e lijn sluit aan bij de aanbeveling uit de richtlijn Urineweginfecties in de Zwangerschap van de NVOG',
      docs: 'Verwijs naar gynaecoloog',
      explainer:
        'Een pyelonefritis in de zwangerschap gaat gepaard met een verhoogd risico op ernstige morbiditeit of mortaliteit. Het advies om zwangeren met een pyelonefritis voor behandeling te verwijzen naar de 2e lijn sluit aan bij de aanbeveling uit de richtlijn Urineweginfecties in de Zwangerschap van de NVOG.',
      sources: [
        {
          name: 'NHG-Standaard Urineweginfecties',
          url: 'https://richtlijnen.nhg.org/standaarden/urineweginfecties#volledige-tekst-richtlijnen-beleid-bij-cystitis',
        },
        {
          name: 'Thuisarts',
          url: 'https://www.thuisarts.nl/blaasontsteking/ik-ben-zwanger-en-heb-blaasontsteking',
        },
      ],
    },
    cadWoman: {
      treatment: [
        {
          description: 'Ciprofloxacine, 7 dagen, 2 dd 500 mg',
          contraIndications: [
            'het geven van borstvoeding',
            'gecombineerde lever- en nierfunctiestoornissen',
            'neuropathie',
            'peesaandoeningen gerelateerd aan het eerdere gebruik van fluorochinolonen (de groep van antibiotica waartoe ciprofloxacine behoort)',
          ],
          info: 'Overweeg een alternatief bij patiënten met een verhoogd risico op een aorta-aneurysma of -dissectie. Bij een eGFR 10-30 ml/min: geef de normale keerdosis met een interval van 24 uur tussen 2 doses. Neem niet gelijktijdig in met metaalverbindingen, zoals calcium, magnesium- en ijzerpreparaten.',
          additionalTest: 'Urinekweek',
          documentation:
            'Ciprofloxacine, 7 dagen, 2 dd 500 mg. Urine op kweek, graag contact over uitslag. Als uit de kweek blijkt dat de verwekker gevoelig is voor een ander antibioticum (en de kuur nog niet voltooid is), maak dan de kuur af met een ander antibioticum (op volgorde amoxicilline, amoxicilline/clavulaanzuur of cotrimoxazol). Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-vrouw',
        },
        {
          description: 'Amoxicilline/clavulaanzuur, 10 dagen, 3 dd 500/125 mg',
          contraIndications: ['eGFR < 30 ml/min', 'G6PD-deficiëntie'],
          info: 'Bij een eGFR < 30 ml/min: pas de dosering aan naar amoxicilline/clavulaanzuur 875/125 mg 2 dd',
          additionalTest: 'Urinekweek',
          documentation:
            'Amoxicilline/clavulaanzuur, 10 dagen, 3 dd 500/125 mg. Urine op kweek, graag contact over uitslag. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-vrouw',
        },
        {
          description: 'Cotrimoxazol, 10 dagen, 2 dd 960 mg (off-label)',
          contraIndications: [
            'gebruik van cumarine of methotrexaat',
            'ernstige lever- en nierfunctiestoornissen',
            'ernstige afwijkingen in het bloedbeeld',
            'acute porfyrie',
          ],
          info: 'Bij een eGFR 10-30 ml/min: geef 50% van de normale keerdosis OF verdubbel het doseerinterval',
          additionalTest: 'Urinekweek',
          documentation:
            'Cotrimoxazol, 10 dagen, 2 dd 960 mg. Urine op kweek, graag contact over uitslag. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-vrouw',
        },
      ],
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
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Contact indien na 48 uur geen vebetering of verergering optreedt en bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-vrouw',
      explainer:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Instrueer de patiënt contact op te nemen indien < 48 uur geen verbetering optreedt, of eerder bij verergering van het ziektebeeld of zich ontwikkelende verwardheid.',
      sources: [
        {
          name: 'NHG-Standaard Urineweginfecties',
          url: 'https://richtlijnen.nhg.org/standaarden/urineweginfecties#volledige-tekst-richtlijnen-beleid-bij-cystitis',
        },
        {
          name: 'Thuisarts',
          url: 'https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-vrouw',
        },
      ],
    },
    men: {
      treatment: [
        {
          description: 'Ciprofloxacine, 14 dagen, 2 dd 500 mg',
          contraIndications: [
            'het geven van borstvoeding',
            'gecombineerde lever- en nierfunctiestoornissen',
            'neuropathie',
            'peesaandoeningen gerelateerd aan het eerdere gebruik van fluorochinolonen (de groep van antibiotica waartoe ciprofloxacine behoort)',
          ],
          info: 'Overweeg een alternatief bij patiënten met een verhoogd risico op een aorta-aneurysma of -dissectie. Bij een eGFR 10-30 ml/min: geef de normale keerdosis met een interval van 24 uur tussen 2 doses. Neem niet gelijktijdig in met metaalverbindingen, zoals calcium, magnesium- en ijzerpreparaten.',
          additionalTest: 'Urinekweek',
          documentation:
            'Ciprofloxacine, 14 dagen, 2 dd 500 mg. Urine op kweek, graag contact over uitslag. Als uit de kweek blijkt dat de verwekker gevoelig is voor een ander antibioticum (en de kuur nog niet voltooid is), maak dan de kuur af met een ander antibioticum (voorkeur cotrimoxazol). Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-man',
        },
        {
          description: 'Amoxicilline/clavulaanzuur, 14 dagen, 3 dd 500/125 mg',
          contraIndications: ['eGFR < 30 ml/min', 'G6PD-deficiëntie'],
          info: 'Bij een eGFR < 30 ml/min: pas de dosering aan naar amoxicilline/clavulaanzuur 875/125 mg 2 dd',
          additionalTest: 'Urinekweek',
          documentation:
            'Amoxicilline/clavulaanzuur, 14 dagen, 3 dd 500/125 mg. Urine op kweek, graag contact over uitslag. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-man',
        },
        {
          description: 'Cotrimoxazol, 14 dagen, 2 dd 960 mg (off-label)',
          contraIndications: [
            'gebruik van cumarine of methotrexaat',
            'ernstige lever- en nierfunctiestoornissen',
            'ernstige afwijkingen in het bloedbeeld',
            'acute porfyrie',
          ],
          info: 'Bij een eGFR 10-30 ml/min: geef 50% van de normale keerdosis OF verdubbel het doseerinterval',
          additionalTest: 'Urinekweek',
          documentation:
            'Cotrimoxazol, 14 dagen, 2 dd 960 mg. Urine op kweek, graag contact over uitslag. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-man',
        },
      ],
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
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Contact indien na 48 uur geen vebetering of verergering optreedt en bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-man',
      explainer:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Instrueer de patiënt contact op te nemen indien < 48 uur geen verbetering optreedt, of eerder bij verergering van het ziektebeeld of zich ontwikkelende verwardheid. Als uit de kweek blijkt dat de verwekker gevoelig is voor cotrimoxazol, te starten met cotrimoxazol 2 dd 960 mg voor de resterende dagen van de originele kuur. Cotrimoxazol is gecontra-indiceerd bij gebruik van cumarine of methotrexaat en bij ernstige lever- en nierfunctiestoornissen, ernstige afwijkingen in het bloedbeeld of acute porfyrie.',
      sources: [
        {
          name: 'NHG-Standaard Urineweginfecties',
          url: 'https://richtlijnen.nhg.org/standaarden/urineweginfecties#volledige-tekst-richtlijnen-beleid-bij-cystitis',
        },
        {
          name: 'Thuisarts',
          url: 'https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-man',
        },
      ],
    },
    cadMen: {
      treatment: [
        {
          description: 'Ciprofloxacine, 14 dagen, 2 dd 500 mg',
          contraIndications: [
            'het geven van borstvoeding',
            'gecombineerde lever- en nierfunctiestoornissen',
            'neuropathie',
            'peesaandoeningen gerelateerd aan het eerdere gebruik van fluorochinolonen (de groep van antibiotica waartoe ciprofloxacine behoort)',
          ],
          info: 'Overweeg een alternatief bij patiënten met een verhoogd risico op een aorta-aneurysma of -dissectie. Bij een eGFR 10-30 ml/min: geef de normale keerdosis met een interval van 24 uur tussen 2 doses. Neem niet gelijktijdig in met metaalverbindingen, zoals calcium, magnesium- en ijzerpreparaten.',
          additionalTest: 'Urinekweek',
          documentation:
            'Ciprofloxacine, 14 dagen, 2 dd 500 mg. Urine op kweek, graag contact over uitslag. Als uit de kweek blijkt dat de verwekker gevoelig is voor een ander antibioticum (en de kuur nog niet voltooid is), maak dan de kuur af met een ander antibioticum (voorkeur cotrimoxazol). Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-man',
        },
        {
          description: 'Amoxicilline/clavulaanzuur, 14 dagen, 3 dd 500/125 mg',
          contraIndications: ['eGFR < 30 ml/min', 'G6PD-deficiëntie'],
          info: 'Bij een eGFR < 30 ml/min: pas de dosering aan naar amoxicilline/clavulaanzuur 875/125 mg 2 dd',
          additionalTest: 'Urinekweek',
          documentation:
            'Amoxicilline/clavulaanzuur, 14 dagen, 3 dd 500/125 mg. Urine op kweek, graag contact over uitslag. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-man',
        },
        {
          description: 'Cotrimoxazol, 14 dagen, 2 dd 960 mg (off-label)',
          contraIndications: [
            'gebruik van cumarine of methotrexaat',
            'ernstige lever- en nierfunctiestoornissen',
            'ernstige afwijkingen in het bloedbeeld',
            'acute porfyrie',
          ],
          info: 'Bij een eGFR 10-30 ml/min: geef 50% van de normale keerdosis OF verdubbel het doseerinterval',
          additionalTest: 'Urinekweek',
          documentation:
            'Cotrimoxazol, 14 dagen, 2 dd 960 mg. Urine op kweek, graag contact over uitslag. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-man',
        },
      ],
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
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Contact indien na 48 uur geen vebetering of verergering optreedt en bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-vrouw',
      explainer:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Instrueer de patiënt contact op te nemen indien < 48 uur geen verbetering optreedt, of eerder bij verergering van het ziektebeeld of zich ontwikkelende verwardheid. Als uit de kweek blijkt dat de verwekker gevoelig is voor cotrimoxazol, te starten met cotrimoxazol 2 dd 960 mg voor de resterende dagen van de originele kuur. Cotrimoxazol is gecontra-indiceerd bij gebruik van cumarine of methotrexaat en bij ernstige lever- en nierfunctiestoornissen, ernstige afwijkingen in het bloedbeeld of acute porfyrie.',
      sources: [
        {
          name: 'NHG-Standaard Urineweginfecties',
          url: 'https://richtlijnen.nhg.org/standaarden/urineweginfecties#volledige-tekst-richtlijnen-beleid-bij-cystitis',
        },
        {
          name: 'Thuisarts',
          url: 'https://www.thuisarts.nl/blaasontsteking/ik-heb-blaasontsteking-vrouw',
        },
      ],
    },
    children: {
      treatment: [
        {
          description:
            'Amoxicilline/clavulaanzuur, 10 dagen, < 40 kg: 50/12,5 mg/kg lichaamsgewicht in 3 giften; > 40 kg: 1500/375 mg/dag in 3 doses',
          contraIndications: ['eGFR < 30 ml/min', 'G6PD-deficiëntie'],
          additionalTest: 'Urinekweek',
          documentation:
            'Amoxicilline/clavulaanzuur, 10 dagen, < 40 kg: 50/12,5 mg/kg lichaamsgewicht in 3 giften; > 40 kg: 1500/375 mg/dag in 3 doses. Urine op kweek, graag contact over uitslag. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/mijn-kind-heeft-blaasontsteking. Indien binnen 48 uur geen verbetering overweeg verwijzing naar kinderarts.',
        },
        {
          description:
            'Cotrimoxazol, 10 dagen, 30/6 mg/kg/dag in 2 giften, max 1600/320 mg/dag (off-label)',
          contraIndications: [
            'gebruik van cumarine of methotrexaat',
            'ernstige lever- en nierfunctiestoornissen',
            'ernstige afwijkingen in het bloedbeeld',
            'acute porfyrie',
          ],
          info: 'Bij een eGFR 10-30 ml/min: geef 50% van de normale keerdosis OF verdubbel het doseerinterval',
          additionalTest: 'Urinekweek',
          documentation:
            'Cotrimoxazol, 10 dagen, 30/6 mg/kg/dag in 2 giften, max 1600/320 mg/dag. Urine op kweek, graag contact over uitslag. Contact bij klachten zoals beschreven in https://www.thuisarts.nl/blaasontsteking/mijn-kind-heeft-blaasontsteking. Indien binnen 48 uur geen verbetering overweeg verwijzing naar kinderarts.',
        },
      ],
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
      docs: '<treatment>. Urine op kweek, graag contact over uitslag. Contact indien na 48 uur geen vebetering of verergering optreedt en bij klachten zoals beschreven op https://www.thuisarts.nl/blaasontsteking/mijn-kind-heeft-blaasontsteking',
      explainer:
        'Leg uit dat een urineweginfectie ernstig kan verlopen en een antibioticum noodzakelijk is. Adviseer ruime vochtinname. Instrueer de patiënt contact op te nemen indien < 48 uur geen verbetering optreedt, of eerder bij verergering van het ziektebeeld of zich ontwikkelende verwardheid. Leg uit aan ouders met een kind van > 1 maand en < 2 jaar dat het maken van een echo van de urinewegen nodig is om uit te sluiten dat er sprake is van een onderliggende oorzaak van de infectie. Geef ouders van kinderen die zindelijk zijn of > 5 jaar uitleg over de werking van de bekkenbodem en vertel dat ontspanning nodig is voor volledige lediging van blaas en darmen.',
      sources: [
        {
          name: 'NHG-Standaard Urineweginfecties',
          url: 'https://richtlijnen.nhg.org/standaarden/urineweginfecties#volledige-tekst-richtlijnen-beleid-bij-cystitis',
        },
        {
          name: 'Thuisarts',
          url: 'https://www.thuisarts.nl/blaasontsteking/mijn-kind-heeft-blaasontsteking',
        },
      ],
    },
  },
};
