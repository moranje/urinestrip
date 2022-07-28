<template>
  <div class="f-section-wrap">
    <p>
      <span class="fh2">Advies</span>
      <span class="f-section-text">
        {{ advice }}
      </span>
      <div
        >Bron: <a
          class="text-success"
          href="https://richtlijnen.nhg.org/standaarden/urineweginfecties#volledige-tekst-richtlijnen-beleid-bij-cystitis"
          >NHG-Standaard Urineweginfecties</a
        ></div
      >
    </p>

    <p>
      <span class="fh3">Documentatie</span>
    </p>
    <p class="f-description">{{ docs }}</p>
  </div>
</template>

<script lang="ts">
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
    },
  };
</script>
