<template>
  <question
    id="nitrite"
    title="Nitriet"
    type="multiplechoice"
    nextStepOnAnswer
    :options="options"
    required
    v-model="conclusiveTests"
  />
</template>

<script lang="ts">
  import { Question, ChoiceOption } from '@ditdot-dev/vue-flow-form';

  export default {
    components: {
      Question,
    },

    data: () => ({
      conclusiveTests: {},

      options: [
        new ChoiceOption({
          label: 'Positief',
          value: 'pos',
        }),
        new ChoiceOption({
          label: 'Dipslide, sediment of kweek positief',
          value: 'urineCulture',
        }),
        new ChoiceOption({
          label: 'Negatief',
          value: 'neg',
        }),
      ],
    }),
  };
</script>
