<script lang="ts" setup>
  import { useStore } from '@/store/store';

  const store = useStore();
</script>

<template>
  <div class="f-section-wrap">
    <p>
      <span class="fh2">Advies</span>
      <span class="f-section-text">
        {{ store.getAdvice }}
      </span>
    </p>

    <div v-if="store.formPath === 'uti'">
      Bron:
      <a
        class="text-success"
        href="https://richtlijnen.nhg.org/standaarden/urineweginfecties#volledige-tekst-richtlijnen-beleid-bij-cystitis"
      >
        NHG-Standaard Urineweginfecties
      </a>
    </div>
    <div v-if="store.formPath === 'hematuria'">
      Bronnen:
      <a
        class="text-success"
        href="https://www.nvkc.nl/kwaliteit/richtlijnen/normen-en-richtlijnen"
        >NVKC richtlijn Eenduidige en accurate laboratoriumdiagnostiek bij
        hematurie
      </a>
      , een artikel in de H&W
      <a
        class="text-success"
        href="https://www.henw.org/artikelen/microscopisch-erytrocytenverlies-de-urine"
      >
        Microscopisch erytrocytenverlies in de urine
      </a>
      en de
      <a
        class="text-success"
        href="https://www.nvu.nl/kwaliteitsbeleid/richtlijnen/actuele-richtlijnen/"
      >
        NVU richtlijn Hematurie
      </a>
    </div>

    <p v-if="store.getContraIndications !== ''">
      <span class="text-alert">{{ store.getContraIndications }}</span>
    </p>

    <p>
      <span class="fh3">Documentatie</span>
    </p>
    <p class="f-description">{{ store.getDocumentation }}</p>
  </div>
</template>

<style scoped></style>
