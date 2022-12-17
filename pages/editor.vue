<script lang="ts" setup>
  import { useStore } from '@/store/store';

  useHead({
    titleTemplate: 'urinest.rip',
  });

  const store = useStore();
</script>

<template>
  <div class="vff vff-not-standalone">
    <div class="f-container">
      <div class="f-form-wrap">
        <div
          class="vff-animate q-form q-is-active f-fade-in-up field-multiplechoice"
        >
          <div class="q-inner">
            <button
              type="button"
              @click="navigateTo('/')"
              class="absolute top-0 right-0 o-btn-action"
            >
              <ion-icon name="save-outline"></ion-icon>
            </button>
            <h2>Advies</h2>
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
            <div
              v-if="store.getTreatmentOption.info"
              class="flex flex-wrap p-0"
            >
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
              v-if="store.getTreatment.sources != null"
              class="flex flex-wrap p-0"
            >
              <h3 class="pb-4 min-w-12 flex-1/4w">Bronnen</h3>
              <div class="pb-4 min-w-32 flex-3/4w">
                <ol>
                  <li v-for="link in store.getTreatment.sources">
                    <a class="text-success text-lg" :href="link.url">{{
                      link.name
                    }}</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
