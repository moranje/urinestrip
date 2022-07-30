<template>
  <flow-form
    ref="flowform"
    :language="language"
    v-on:answer="onAnswer"
    v-on:complete="onComplete"
  >
    <template v-slot:complete>
      <advice-page :advice="advice" :docs="docs" />
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

<script lang="ts">
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
          'Leg uit dat een cystitis veel voorkomt, niet besmettelijk is, maar kan terugkomen. Het betreft een hinderlijke, in principe onschuldige aandoening, die spontaan binnen 1 week kan genezen.\nMet antibiotische behandeling zijn de klachten doorgaans eerder verdwenen. Klachten kunnen tot enkele dagen na afloop van de behandeling blijven bestaan. Antibioticagebruik kan echter leiden tot bijwerkingen en antibioticaresistentie.\nLaat de patiënt bij verergering van de klachten (koorts, algemeen ziek-zijn) direct contact opnemen met de (dienstdoende) huisarts.',
        docs: 'Uitleg gegeven over behandelopties.',

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
            jump: {
              nitrite: 'tissueInvasion',
              urineCulture: 'tissueInvasion',
              leukocytes: 'leukocytes',
              blood: 'blood',
              other: 'other',
            },
            options: [
              {
                label: 'Nitriet positief',
                value: 'nitrite',
              },
              {
                label: 'Dipslide, sediment of kweek positief',
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
              urineCulture: 'tissueInvasion',
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
            jump: {
              _other: '_submit',
            },
            options: [],
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

      onAnswer(question: any) {
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
          ].antibiotics.map((antibiotic: string) => {
            let name = antibiotic.split(',')[0];

            return new ChoiceOption({
              label: name,
              value: antibiotic,
            });
          });
        }

        if (question.id === 'antibiotics') {
          this.advice = uti[tissueInvasion.model][riskAssessment.model].advice;
          this.docs = uti[tissueInvasion.model][
            riskAssessment.model
          ].docs.replace('<treatment>', antibiotics.model);
        }
      },

      onComplete(completed, questionList) {
        // This method is called whenever the "completed" status is changed.
        this.completed = completed;
        console.log('oncomplete');
      },

      emitEnter() {
        console.log('Emit enter');
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
