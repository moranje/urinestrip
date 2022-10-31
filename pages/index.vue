<script lang="ts" setup>
  import { onMounted, onBeforeUnmount } from 'vue';
  import { FlowForm, LanguageModel, Question } from '@ditdot-dev/vue-flow-form';
  import { ref, Ref } from '@vue/reactivity';
  import { useStore } from '@/store/store';
  import AdvicePage from '@/components/FormAdvice.vue';
  const store = useStore();

  useHead({
    titleTemplate: 'urinest.rip',
  });

  const language = new LanguageModel({
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
    longTextHelpText: ':shiftKey + :enterKey om een nieuwe regel in te voeren.',
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
  });
  let copied: Ref<boolean> = ref(false);
  let completed: Ref<boolean> = ref(false);
  store.loadQuestions();
  let questions = store.getQuestions;

  function onComplete(complete: boolean) {
    completed.value = complete;
  }

  function copy() {
    navigator.clipboard.writeText(store.getTreatmentOption.documentation).then(
      () => (copied.value = true),
      () => console.error('Copy failed')
    );
  }

  function onKeyListener($event: KeyboardEvent) {
    if ($event.key === 'Enter' && completed.value && !copied.value) {
      copy();
    }
  }

  onMounted(() => {
    document.addEventListener('keydown', onKeyListener);
  });

  onBeforeUnmount(() => {
    document.removeEventListener('keydown', onKeyListener);
  });
</script>

<template>
  <flow-form ref="flowform" :language="language" v-on:complete="onComplete">
    <template v-slot:complete>
      <advice-page />
    </template>

    <template v-slot:completeButton>
      <div class="f-submit" v-if="!copied">
        <button
          class="o-btn-action"
          ref="button"
          type="submit"
          href="#"
          v-on:click.prevent="copy"
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
