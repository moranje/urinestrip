<template>
  <div class="f-section-wrap">
    <p>
      <span class="fh2">Advies</span>
      <span class="f-section-text">
        {{ advice }}
      </span>
      <div v-if="type === 'uti'"
        >Bron: <a
          class="text-success"
          href="https://richtlijnen.nhg.org/standaarden/urineweginfecties#volledige-tekst-richtlijnen-beleid-bij-cystitis"
          >NHG-Standaard Urineweginfecties</a
        ></div
      >
      <div v-if="type === 'hematuria'"
        >Bronnen:  <a class="text-success"
                      href="https://www.nvkc.nl/kwaliteit/richtlijnen/normen-en-richtlijnen"
                      >NVKC richtlijn Eenduidige en accurate
                      laboratoriumdiagnostiek bij hematurie</a
                    >, een artikel in de H&W
                    <a class="text-success"
                      href="https://www.henw.org/artikelen/microscopisch-erytrocytenverlies-de-urine"
                      >Microscopisch erytrocytenverlies in de urine</a
                    >
                    en de
                    <a class="text-success"
                      href="https://www.nvu.nl/kwaliteitsbeleid/richtlijnen/actuele-richtlijnen/"
                      >NVU richtlijn Hematurie</a></div
      >
    </p>

    <p v-if="contraIndications !== ''">
      <span class="text-alert">{{ contraIndications }}</span>
    </p>

    <p>
      <span class="fh3">Documentatie</span>
    </p>
    <p class="f-description">{{ docs }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      advice: {
        type: String,
        default: '',
      },

      docs: {
        type: String,
        default: '',
      },

      contraIndications: {
        type: String,
        default: '',
      },

      type: {
        type: String,
        default: 'uti',
      }
    },
  };
</script>
