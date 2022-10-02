import { sheet } from './_base';

export const tissueInvasion = sheet({
  id: 'tissueInvasion',
  title: 'Weefselinvasie',

  options: [
    {
      label: 'Geen',
      value: 'local',
    },
    {
      label:
        'Koorts en/of algehele malaise en/of (koude) rillingen en/of flank- of perineumpijn (pyelonefritis/prostatitis) en/of een delier',
      value: 'tissueInvasion',
    },
  ],

  jump: {
    pos: 'tissueInvasion',
    urineCultures: 'tissueInvasion',
    neg: 'leukocytes',
  },
});
