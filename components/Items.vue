<script lang="ts" setup>
  import { ref, reactive } from 'vue';
  const props = withDefaults(
    defineProps<{
      items?: string[];
      name: string;
      editable?: boolean;
    }>(),
    {
      items: () => [],
      editable: false,
    }
  );

  const emit = defineEmits(['change', 'blur']);
  const items = reactive<string[]>([...props.items]);
  const name = ref(props.name);
  const edit = ref(false);

  async function toggle(event: Event) {
    edit.value = !edit.value;

    if (edit.value === false) {
      emit('blur', name.value, items);
    }
  }

  function addItem(event: Event) {
    // @ts-ignore
    const value = event.target.value;
    // @ts-ignore
    event.target.value = '';

    if (value) items.push(value);

    // @ts-ignore
    event.target.blur();

    emit('change', name.value, items);
  }

  function updateItem(event: Event, index: number) {
    // @ts-ignore
    const value = event.target.value;

    items.splice(index, 1, value);
    // @ts-ignore
    event.target.blur();

    emit('change', name.value, items);
  }

  function removeItem(index: number) {
    items.splice(index, 1);

    emit('change', name.value, items);
  }
</script>

<template>
  <li v-if="edit">
    <button
      type="button"
      @click="toggle"
      class="button float-right"
      tabindex="1"
    >
      <ion-icon name="close-outline"></ion-icon>
    </button>
    <input
      @blur="addItem"
      type="text"
      @keyup.enter.prevent="addItem"
      class="input"
      placeholder="Nieuwe contra-indicatie"
      autofocus
      tabindex="0"
    />
  </li>
  <li v-if="edit" v-for="(item, index) in items">
    <button
      type="button"
      @click="removeItem(index)"
      class="button float-right"
      :tabindex="index + 3"
    >
      <ion-icon name="trash-outline"></ion-icon>
    </button>
    <input
      :value="item"
      @keyup.enter.prevent="updateItem($event, index)"
      @blur.prevent="updateItem($event, index)"
      type="text"
      class="input"
      :tabindex="index + 2"
    />
  </li>

  <li v-else v-for="(item, index) in items" class="text-red-500 !text-lg">
    <button
      v-if="index === 0 && props.editable"
      type="button"
      @click="toggle"
      class="button float-right"
    >
      <ion-icon name="pencil-outline"></ion-icon>
    </button>
    <dev-only>
      <button
        v-if="index === 0 && !props.editable"
        type="button"
        @click="toggle"
        class="button float-right"
      >
        <ion-icon name="pencil-outline"></ion-icon>
      </button>
    </dev-only>
    {{ item.charAt(0).toUpperCase() + item.slice(1) }}
  </li>
</template>

<style lang="scss" scoped>
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

  input.input {
    // border: var(--vff-border-width) solid var(--vff-secondary-form-bg-color);
    border-radius: var(--vff-border-radius);
    background-color: var(--vff-main-form-bg-color);
    border-bottom: 2px solid;
    margin-bottom: 0.5rem;
    line-height: 37px;
    font-weight: 400;
    font-size: 16px;
    width: calc(100% - 50px);
    display: inherit;
  }

  input.input:focus {
    border-bottom-color: var(--vff-main-accent-color);
  }
</style>
