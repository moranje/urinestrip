<script lang="ts" setup>
  import { ref, nextTick } from 'vue';
  const props = defineProps({
    text: String,
    name: String,
    editable: {
      type: Boolean,
      default: false,
    },
  });

  const emit = defineEmits(['change', 'blur']);
  const textarea = ref(null);
  const text = ref(props.text);
  const name = ref(props.name);
  const edit = ref(false);

  async function toggle(event: Event) {
    edit.value = !edit.value;

    if (edit.value === true) {
      await nextTick();
      // @ts-ignore
      textarea.value.parentNode.dataset.replicatedValue = text.value;
      // @ts-ignore
      textarea.value.focus();
    } else {
      emit('blur', name.value, text.value);
    }
  }

  function input(event: Event) {
    // @ts-ignore
    const value = event.target.value;

    text.value = value;
    // Fills the replicated value shadow element
    // @ts-ignore
    event.target.parentNode.dataset.replicatedValue = value;

    emit('change', name.value, value);
  }
</script>

<template>
  <section>
    <button
      v-if="props.editable"
      type="button"
      @click="toggle"
      class="button float-right"
    >
      <ion-icon :name="edit ? 'close-outline' : 'pencil-outline'"></ion-icon>
    </button>
    <dev-only>
      <button
        v-if="!props.editable"
        type="button"
        @click="toggle"
        class="button float-right"
      >
        <ion-icon
          :name="edit ? 'close-outline' : 'pencil-outline'"
        ></ion-icon></button
    ></dev-only>
    <div class="grow-wrap" v-if="edit">
      <textarea
        :value="text"
        @input="input"
        @blur="toggle($event)"
        ref="textarea"
      ></textarea>
    </div>
    <span v-else="!edit">{{ text }}</span>
  </section>
</template>

<style lang="scss" scoped>
  .grow-wrap {
    /* easy way to plop the elements on top of each other and have them both sized based on the tallest one's height */
    display: grid;
  }
  .grow-wrap::after {
    /* Note the weird space! Needed to preventy jumpy behavior */
    content: attr(data-replicated-value) ' ';

    /* This is how textarea text behaves */
    white-space: pre-wrap;

    /* Hidden from view, clicks, and screen readers */
    visibility: hidden;
  }
  .grow-wrap > textarea {
    /* You could leave this, but after a user resizes, then it ruins the auto sizing */
    resize: none;

    /* Firefox shows scrollbar on growth, you can hide like this. */
    overflow: hidden;
  }
  .grow-wrap > textarea,
  .grow-wrap::after {
    /* Identical styling required!! */
    border: var(--vff-border-width) solid var(--vff-secondary-form-bg-color);
    border-radius: var(--vff-border-radius);
    margin-right: 0.5rem;
    padding: 0.5rem;

    font: inherit;

    /* Place on top of each other */
    grid-area: 1 / 1 / 2 / 2;
  }

  .grow-wrap > textarea {
    &:focus {
      border-color: var(--vff-main-accent-color);
    }
  }

  .button {
    border: var(--vff-border-width) solid transparent;
    padding: 0.1em 0.6em;
  }

  .button:hover {
    border: var(--vff-border-width) solid var(--vff-secondary-form-bg-color);
    border-radius: var(--vff-border-radius);
  }

  .button:focus {
    color: var(--vff-main-accent-color);
  }
</style>
