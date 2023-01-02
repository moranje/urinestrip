<script lang="ts" setup>
  import { useStore } from '@/store/store';

  const store = useStore();

  // const item
</script>

<template>
  <button
    type="button"
    @click="navigateTo('/editor')"
    class="absolute top-0 right-0 o-btn-action"
  >
    <ion-icon name="create-outline"></ion-icon>
  </button>
  <h2>Checklist</h2>
  <div
    v-if="store.getTreatmentOption.additionalTest"
    class="flex flex-wrap p-0"
  >
    <h3 class="pb-4 min-w-12 flex-1/4w">Onderzoek</h3>
    <div class="pb-4 min-w-32 flex-3/4w text-lg">
      {{ store.getTreatmentOption.additionalTest }}
    </div>
  </div>

  <div class="flex flex-wrap p-0">
    <h3 class="pb-4 min-w-12 flex-1/4w">Behandel</h3>
    <div class="pb-4 min-w-32 flex-3/4w font-bold text-lg">
      {{ store.getTreatmentOption.description }}
    </div>
  </div>

  <div
    v-if="store.getTreatmentOption.contraIndications != null"
    class="flex flex-wrap p-0"
  >
    <h3 class="pb-4 min-w-12 flex-1/4w">Contra-indicaties</h3>
    <div class="pb-4 min-w-32 flex-3/4w">
      <ul class="!mb-0">
        <li
          class="text-red-500 !text-lg"
          v-for="item in store.getTreatmentOption.contraIndications"
        >
          {{ item.charAt(0).toUpperCase() + item.slice(1) }}
        </li>
      </ul>
    </div>
  </div>

  <div v-if="store.getTreatmentOption.info" class="flex flex-wrap p-0">
    <h3 class="pb-4 min-w-12 flex-1/4w">Waarschuwingen</h3>
    <div class="pb-4 min-w-32 flex-3/4w text-orange-500 text-lg">
      {{ store.getTreatmentOption.info }}
    </div>
  </div>

  <div
    v-if="store.getTreatmentOption.testAfterTreatment"
    class="flex flex-wrap p-0"
  >
    <h3 class="pb-4 min-w-12 flex-1/4w">Vervolg onderzoek</h3>
    <div class="pb-4 min-w-32 flex-3/4w text-lg">
      {{ store.getTreatmentOption.testAfterTreatment }}
    </div>
  </div>

  <div class="flex flex-wrap p-0">
    <h3 class="pb-4 min-w-12 flex-1/4w">Leg uit</h3>
    <div class="pb-4 min-w-32 flex-3/4w text-lg">
      {{ store.getTreatment.explainer }}
    </div>
  </div>

  <div class="flex flex-wrap p-0">
    <h3 class="pb-4 min-w-12 flex-1/4w">Documenteer</h3>
    <div class="pb-4 min-w-32 flex-3/4w text-lg">
      {{ store.getTreatmentOption.documentation }}
    </div>
  </div>
  <div v-if="store.getTreatment.sources != null" class="flex flex-wrap p-0">
    <h3 class="pb-4 min-w-12 flex-1/4w">Bronnen</h3>
    <div class="pb-4 min-w-32 flex-3/4w">
      <ol>
        <li v-for="link in store.getTreatment.sources">
          <a
            class="!text-green-500 hover:!text-green-600 text-lg"
            :href="link.url"
            >{{ link.name }}</a
          >
        </li>
      </ol>
    </div>
  </div>
  <!-- </div> -->
</template>
