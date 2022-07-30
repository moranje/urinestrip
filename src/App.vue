<template>
  <div>
    <header class="vff-header logo">
      <div class="f-container">
        <logo />
      </div>
    </header>

    <form-main />
  </div>
</template>

<script lang="ts">
  import Logo from './components/Logo.vue';
  import FormMain from './components/FormMain.vue';

  export default {
    name: 'UrineStrip',

    components: {
      Logo,
      FormMain,
    },
  };
</script>

<style>
  /* Import Vue Flow Form base CSS */
  @import './../node_modules/@ditdot-dev/vue-flow-form/dist/vue-flow-form.css';
  /* Import one of the Vue Flow Form CSS themes (optional) */
  /* @import './../node_modules/@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css'; */
  /* @import './../node_modules/@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-green.css'; */
  @import './../node_modules/@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-purple.css';

  header.vff-header.logo {
    padding: 0.2em 0;
  }

  @media screen and (min-width: 1024px) {
    header.vff-header.logo {
      padding: 0.2em 5.5%;
    }
  }

  @media screen and (min-width: 1366px) {
    header.vff-header.logo {
      padding: 0.2em 10%;
    }
  }
</style>
