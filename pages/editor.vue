<script lang="ts" setup>
  import { useStore } from '@/store/store';
  import Text from '@/components/Text.vue';
  import Items from '@/components/Items.vue';

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
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <h2>Checklist</h2>

            <div class="flex flex-wrap p-0">
              <h3 class="pb-4 min-w-12 flex-1/4w">Onderzoek</h3>
              <div class="pb-4 min-w-32 flex-3/4w text-lg">
                <Text
                  :text="store.getTreatmentOption.additionalTest"
                  @blur="store.setTreatmentOption"
                  @change="store.setTreatmentOption"
                  name="additionalTest"
                />
              </div>
            </div>

            <div class="flex flex-wrap p-0">
              <h3 class="pb-4 min-w-12 flex-1/4w">Behandel</h3>
              <div class="pb-4 min-w-32 flex-3/4w font-bold text-lg">
                <Text
                  :text="store.getTreatmentOption.description"
                  @blur="store.setTreatmentOption"
                  @change="store.setTreatmentOption"
                  name="description"
                />
              </div>
            </div>

            <div class="flex flex-wrap p-0">
              <h3 class="pb-4 min-w-12 flex-1/4w">Contra-indicaties</h3>
              <div class="pb-4 min-w-32 flex-3/4w">
                <ul class="!mb-0">
                  <Items
                    :items="store.getTreatmentOption.contraIndications ?? []"
                    @blur="store.setTreatmentOption"
                    @change="store.setTreatmentOption"
                    name="contraIndications"
                  />
                </ul>
              </div>
            </div>

            <div class="flex flex-wrap p-0">
              <h3 class="pb-4 min-w-12 flex-1/4w">Waarschuwingen</h3>
              <div class="pb-4 min-w-32 flex-3/4w text-orange-500 text-lg">
                <Text
                  :text="store.getTreatmentOption.info"
                  @blur="store.setTreatmentOption"
                  @change="store.setTreatmentOption"
                  name="info"
                />
              </div>
            </div>

            <div class="flex flex-wrap p-0">
              <h3 class="pb-4 min-w-12 flex-1/4w">Vervolg onderzoek</h3>
              <div class="pb-4 min-w-32 flex-3/4w text-lg">
                <Text
                  :text="store.getTreatmentOption.testAfterTreatment"
                  @blur="store.setTreatmentOption"
                  @change="store.setTreatmentOption"
                  name="testAfterTreatment"
                />
              </div>
            </div>

            <div class="flex flex-wrap p-0">
              <h3 class="pb-4 min-w-12 flex-1/4w">Leg uit</h3>
              <div class="pb-4 min-w-32 flex-3/4w text-lg">
                <Text
                  :text="store.getTreatment.explainer"
                  @blur="store.setTreatment"
                  @change="store.setTreatment"
                  name="explainer"
                  editable
                />
              </div>
            </div>

            <div class="flex flex-wrap p-0">
              <h3 class="pb-4 min-w-12 flex-1/4w">Documenteer</h3>
              <div class="pb-4 min-w-32 flex-3/4w text-lg">
                <Text
                  :text="store.getTreatmentOption.documentation"
                  @blur="store.setTreatmentOption"
                  @change="store.setTreatmentOption"
                  name="documentation"
                  editable
                />
              </div>
            </div>

            <div class="flex flex-wrap p-0">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
