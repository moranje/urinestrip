<template>
  <flow-form
    ref="flowform"
    :language="language"
    v-on:answer="onAnswer"
    v-on:complete="onComplete"
  >
    <template v-slot:complete>
      <advice-page
        :advice="advice"
        :docs="docs"
        :contra-indications="contraIndications"
        :type="adviceType"
      />
    </template>

    <template v-slot:completeButton>
      <div class="f-submit" v-if="!copied">
        <button
          class="o-btn-action"
          ref="button"
          type="submit"
          href="#"
          v-on:click.prevent="copy()"
          aria-label="Kopieer documentatie"
        >
          <span>Kopieer</span>
        </button>
        <a
          class="f-enter-desc"
          href="#"
          v-on:click.prevent="copy()"
          v-html="language.formatString(language.pressEnter)"
        >
        </a>
      </div>

      <p class="text-success" v-if="copied">Documentatie gekopieerd.</p>
    </template>

    <question
      v-for="(question, index) in questions"
      v-bind="question"
      v-bind:key="'m' + index"
      v-model="question.model"
    >
    </question>
  </flow-form>
</template>

<script>
  import {
    FlowForm,
    LanguageModel,
    Question,
    ChoiceOption,
  } from '@ditdot-dev/vue-flow-form';
  import AdvicePage from './AdvicePage.vue';
  import { uti } from './data.js';

  export default {
    name: 'FormMain',

    components: {
      FlowForm,
      AdvicePage,
      Question,
    },

    data() {
      return {
        language: new LanguageModel({
          enterKey: 'Enter',
          shiftKey: 'Shift',
          ok: 'OK',
          continue: 'Verder',
          skip: 'Overslaan',
          pressEnter: 'Druk :enterKey',
          multipleChoiceHelpText: 'Kies er 1 of meer opties',
          multipleChoiceHelpTextSingle: 'Kies 1 optie',
          otherPrompt: 'Other',
          placeholder: 'Vul hier je antwoord in...',
          submitText: 'Versturen',
          longTextHelpText:
            ':shiftKey + :enterKey om een nieuwe regel in te voeren.',
          prev: 'Vorige',
          next: 'Volgde',
          percentCompleted: ':percent% voltooid',
          invalidPrompt: 'Vul het wel even goed in, hè',
          thankYouText: 'Bedankt hè!',
          successText: 'Je antwoorden zijn opgeslagen.',
          ariaOk: 'Druk om verder te gaan',
          ariaRequired: 'Deze stap is verplicht',
          ariaPrev: 'Vorige stap',
          ariaNext: 'Volgende stap',
          ariaSubmitText: 'Druk om te versturen',
          ariaMultipleChoice: 'Druk :letter om te selecteren',
          ariaTypeAnswer: 'Vul in',
          errorAllowedFileTypes:
            'Ongeldig bestandstype. Toestane bestanden: :fileTypes.',
          errorMaxFileSize: 'Bestand is te groot. Toegestane grootte: :size.',
          errorMinFiles:
            'Te weinig bestanden toegevoegd. Minimaal aantal bestanden: :min.',
          errorMaxFiles:
            'Te veel bestanden toegevoegd. Maximale aantal bestanden: :max.',
        }),

        advice:
          'De combinatie van negatieve uitslag van de nitriettest en de leukotest maakt de kans op een urineweginfectie klein. Indien ook geen bloed in de urine wordt gevonden zijn er geen protocollaire vervolgstappen. Afwijkende waarden kunnen in bepaalde gevallen weldegelijk van betekenis zijn (glucosurie bij een niet-diabeet) maar moeten op individuele basis afgewogen worden.',
        adviceType: 'uti',
        docs: 'Urineweginfectie met voldoende zekerheid uitgesloten.',
        contraIndications: null,

        completed: false,
        copied: false,

        questions: [
          {
            type: 'multiplechoice',
            id: 'test',
            title: 'Test uitslag',
            multiple: false,
            nextStepOnAnswer: true,
            required: true,
            jump: () => {
              const goTo = {
                nitrite: 'tissueInvasion',
                urineCultures: 'tissueInvasion',
                leukocytes: 'leukocytes',
                blood: 'blood',
              };
              const answer = this.questions[0].model;

              if (answer === 'blood') this.adviceType = 'hematuria';

              if (goTo[answer]) return goTo[answer];

              if (answer === 'urineCulture') {
                this.advice =
                  'Verricht een kweek met resistentiebepaling bij een aanhoudend vermoeden van een urineweginfectie, terwijl urinestick en dipslide of sediment negatief blijven.';
                this.docs =
                  'Gezien aanhoudend vermoeden op urineweginfectie toch urinekweek ingezet';
              }

              return '_submit';
            },
            options: [
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
            model: {},
          },
          {
            type: 'multiplechoice',
            id: 'tissueInvasion',
            title: 'Weefselinvasie',
            multiple: false,
            nextStepOnAnswer: true,
            required: true,
            jump: {
              pos: 'tissueInvasion',
              urineCultures: 'tissueInvasion',
              neg: 'leukocytes',
            },
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
            model: {},
          },
          {
            type: 'multiplechoice',
            id: 'riskAssessment',
            title: 'Behoort patiënt tot een risicogroep?',
            multiple: false,
            nextStepOnAnswer: true,
            required: true,
            jump: () => {
              if (this.questions[2].model === 'children') {
                return 'antibiotics';
              }

              if (
                this.questions[1].model === 'tissueInvasion' &&
                this.questions[2].model === 'pregnant'
              ) {
                this.advice =
                  'Een pyelonefritis in de zwangerschap gaat gepaard met een verhoogd risico op ernstige morbiditeit of mortaliteit. Het advies om zwangeren met een pyelonefritis voor behandeling te verwijzen naar de 2e lijn sluit aan bij de aanbeveling uit de richtlijn Urineweginfecties in de Zwangerschap van de NVOG';
                this.docs = 'Verwijzing naar gynaecoloog';

                return '_submit';
              }
            },
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
            model: {},
          },
          {
            type: 'multiplechoice',
            id: 'urinaryCatheter',
            title: 'Heeft patiënt een urine katheter?',
            multiple: false,
            nextStepOnAnswer: true,
            required: true,
            jump: () => {
              if (
                this.questions[1].model === 'local' &&
                this.questions[2].model !== 'pregnant' &&
                this.questions[3].model === 'yes'
              ) {
                this.advice =
                  'Behandeling van asymptomatische bacteriurie wordt in alle patiëntgroepen, met uitzondering van zwangeren, afgeraden';
                this.docs = 'Geen behandeling nodig.';

                return '_submit';
              }
            },
            options: [
              {
                label: 'Ja',
                value: 'yes',
              },
              {
                label: 'Nee',
                value: 'no',
              },
            ],
            model: {},
          },
          {
            type: 'multiplechoice',
            id: 'antibiotics',
            title: 'Welke behandeling kan patiënt krijgen',
            subtitle: 'Op volgorde',
            multiple: false,
            nextStepOnAnswer: true,
            required: true,
            jump: () => {
              return '_submit';
            },
            options: [],
            model: {},
          },
          {
            type: 'multiplechoice',
            id: 'leukocytes',
            title: 'Welke vervolgonderzoek krijgt patiënt?',
            multiple: false,
            nextStepOnAnswer: true,
            required: true,
            jump: () => {
              const answer = this.questions[5].model;

              this.advice =
                'Omdat een deel van urineweginfecties gemist wordt met alleen de nitriet test (iets meer dan 20%) wordt bij positieve leukocyten aanvullende diagnostiek geadviseerd.';
              this.docs = `Vooralsnog geen urineweginfectie aan kunnen tonen, omdat er wel witte bloedcellen werden gevonden wordt aanvullend nog een ${
                answer === 'dipslide'
                  ? 'dipslide'
                  : answer === 'urineSediment'
                  ? 'urinesediment'
                  : 'urinekweek'
              } gedaan. Mocht hierbij een bacterie gevonden worden dan kan behandeling nodig zijn.`;

              return '_submit';
            },
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
            model: {},
          },
          {
            type: 'multiplechoice',
            id: 'blood',
            title: 'Is daarbij sprake van',
            multiple: false,
            nextStepOnAnswer: true,
            required: true,
            jump: () => {
              const answer = this.questions[6].model;

              if (answer === 'visibleHematuria') {
                this.advice =
                  'Plan een afspraak op het spreekuur in. Macroscopische hematurie die niet wordt verklaard door menstruatie, myoglobinurie na extreme inspanning, een urineweginfectie of nierstenen is een alarmsymptoom en verdiend aanvullend onderzoek naar onderliggende oorzaak. Zie https://www.henw.org/artikelen/microscopisch-erytrocytenverlies-de-urine';
                this.docs = 'Afspraak op spreekuur ingepland.';

                return '_submit';
              } else if (answer === 'proteinuria') {
                this.advice =
                  'Urinescreening met urinestrip is veelal positief vanaf een eiwit(albumine)concentratie van ongeveer 100-300 mg/l. Een positieve urinestrip voor eiwit samen met hematurie rechtvaardigt dan ook een nefrologische analyse. Instrueer de patiënt dat een urinemonster zo snel mogelijk na verzamelen bij het laboratorium moet worden ingeleverd (liefst ter plaatse). Gebruik de tweede, midstraal, ochtendurine (een verzameling van twee tot vier uur na lozing van de eerste ochtendurine) voor onderzoek. Omdat dit monster geconcentreerd en zuur is, zijn de erytrocyten beter te behouden. Maar het langdurige overnachtverblijf in de blaas vergroot de kans op afbraak.';
                this.docs =
                  'Bloedonderzoek op kreatinine/eGFR, nuchter glucose\nUrine: sediment (vraagstelling: Erytrocyten? Percentage dysmorfe erytrocyten, (inclusief acanthocyten) en (indien aanwezig) percentage acanthocyten ten opzichte van het totaal aantal erytrocyten? Aanwezigheid en aard van cilinders?) en mate van proteïnurie (albumine, kreatinine en ACR)\nBloeddrukmeting\nNa onderzoeken op korte termijn afspraak op spreekuur';

                return '_submit';
              }

              return 'invisiableHematuria';
            },
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
            model: {},
          },
          {
            type: 'multiplechoice',
            id: 'invisiableHematuria',
            title: 'Bloed op de urinestrip',
            multiple: false,
            nextStepOnAnswer: true,
            required: true,
            jump: () => {
              const answer = this.questions[5].model;
              this.advice =
                'Het vinden van erytrocyten in de urine is niet altijd een teken van een onderliggend lijden (de sensitiviteit van de urinesticktest voor erytrocyten is 91,6%, de specificiteit is 56,9%. De lage specificiteit maakt dat een positieve urinesticktest geen garantie biedt op erytrocyten in de urine). Als de urinesticktest positief is bij een patiënt zonder klachten of met klachten zonder duidelijke oorzaak, luidt het advies om de test na 1 week te herhalen en dan nogmaals als de tweede test negatief is. Als 2 urinesticktests binnen enkele weken een positieve uitslag geven, mag men spreken van ‘persisterend erytrocytenverlies in de urine’. Foutpositieve testuitslagen ontstaan door myoglobinurie, forse bacteriurie, oxiderende schoonmaakmiddelen bij het reinigen van verzamelpotjes en contaminatie met bijvoorbeeld menstruatiebloed of bloed uit rectum of colon. Foutnegatieve resultaten ontstaan door hoge concentraties eiwit (> 5 g/l), vitamine C of nitriet (> 2,5 mmol/l), en conserveermiddelen (formaline).';

              if (answer === 'first' || answer === 'second') {
                this.docs =
                  'Over 1 week controle op bloed via een urineonderzoek. Instructies: enkele dagen vóór het onderzoek niet intensief te sporten, de urine niet te verzamelen tijdens een menstruatie en een schoon verzamelpotje te gebruiken. Bij nieuwe symptomen contact. Indien bij controle geen bloed in de urine geen verdere controle.';

                return '_submit';
              }

              this.docs =
                'Afspraak op het spreekuur ingepland voor verdere inventarisatie hematurie (glomerulair of urinewegen/blaas).';

              return '_submit';
            },
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
            model: {},
          },
        ],
      };
    },

    mounted() {
      document.addEventListener('keydown', this.onKeyListener);
    },
    beforeUnmount() {
      document.removeEventListener('keydown', this.onKeyListener);
    },

    methods: {
      onKeyListener($event) {
        if ($event.key === 'Enter' && this.completed && !this.copied) {
          this.copy();
        }
      },

      onAnswer(question) {
        const [
          _,
          tissueInvasion,
          riskAssessment,
          __,
          antibiotics,
        ] = this.questions;

        if (question.id === 'urinaryCatheter') {
          this.questions[4].options = uti[tissueInvasion.model][
            riskAssessment.model
          ].antibiotics.description.map((antibiotic, index) => {
            let name = antibiotic.split(',')[0];

            return new ChoiceOption({
              label: name,
              value: {
                description: antibiotic,
                contraIndications: (this.questions[4].options =
                  uti[tissueInvasion.model][
                    riskAssessment.model
                  ].antibiotics.contraIndications[index]),
              },
            });
          });
        }

        if (question.id === 'antibiotics') {
          this.advice = uti[tissueInvasion.model][riskAssessment.model].advice;
          this.docs = uti[tissueInvasion.model][
            riskAssessment.model
          ].docs.replace('<treatment>', antibiotics.model.description);
          this.contraIndications = antibiotics.model.contraIndications;
        }
      },

      onComplete(completed, questionList) {
        this.completed = completed;
      },

      copy() {
        navigator.clipboard.writeText(this.docs).then(
          () => {
            /* clipboard successfully set */
            this.copied = true;
          },
          () => {
            /* clipboard write failed */
            console.error('Copy failed');
          }
        );
      },
    },
  };
</script>
