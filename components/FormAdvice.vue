<script lang="ts" setup>
  import { useStore } from '@/store/store';

  const store = useStore();

  // const item
</script>

<template>
  <h2>Advies</h2>
  <div
    class="overflow-y-auto h-[calc(100vh_-_64px_-_76px_-_18vh_-_60px_-_48.59px)]"
  >
    <div class="flex flex-wrap p-0">
      <h3 class="pb-4 min-w-12 flex-1/4w">Leg uit</h3>
      <div class="pb-4 min-w-32 flex-3/4w text-lg">
        {{ store.getTreatment.explainer }}
      </div>
    </div>
    <div class="flex flex-wrap p-0">
      <h3 class="pb-4 min-w-12 flex-1/4w">Behandeling</h3>
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
            class="text-red-400 !text-lg"
            v-for="item in store.getTreatmentOption.contraIndications"
          >
            {{ item.charAt(0).toUpperCase() + item.slice(1) }}
          </li>
        </ul>
      </div>
    </div>
    <div v-if="store.getTreatmentOption.info" class="flex flex-wrap p-0">
      <h3 class="pb-4 min-w-12 flex-1/4w">Informatie</h3>
      <div class="pb-4 min-w-32 flex-3/4w text-orange-300 text-lg">
        {{ store.getTreatmentOption.info }}
      </div>
    </div>
    <div
      v-if="store.getTreatmentOption.additionalTest"
      class="flex flex-wrap p-0"
    >
      <h3 class="pb-4 min-w-12 flex-1/4w">Controle</h3>
      <div class="pb-4 min-w-32 flex-3/4w text-lg">
        {{ store.getTreatmentOption.additionalTest }}
      </div>
    </div>
    <div class="flex flex-wrap p-0">
      <h3 class="pb-4 min-w-12 flex-1/4w">Documentatie</h3>
      <div class="pb-4 min-w-32 flex-3/4w text-lg">
        {{ store.getTreatmentOption.documentation }}
      </div>
    </div>
    <div
      v-if="store.getTreatmentOption.testAfterTreatment"
      class="flex flex-wrap p-0"
    >
      <h3 class="pb-4 min-w-12 flex-1/4w">Na behandeling</h3>
      <div class="pb-4 min-w-32 flex-3/4w text-lg">
        {{ store.getTreatmentOption.testAfterTreatment }}
      </div>
    </div>
    <div
      v-if="store.getTreatmentOption.contraIndications != null"
      class="flex flex-wrap p-0"
    >
      <h3 class="pb-4 min-w-12 flex-1/4w">Bronnen</h3>
      <div class="pb-4 min-w-32 flex-3/4w">
        <ol>
          <li v-for="link in store.getTreatment.sources">
            <a class="text-success text-lg" :href="link.url">{{ link.name }}</a>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>
