<template>
  <div>
    <header class="vff-header logo">
      <div class="f-container">
        <section class="flex">
          <logo @click="reloadPage" />
          <img
            @click.prevent="navigateAbout"
            width="36"
            src="https://media-exp1.licdn.com/dms/image/C4D03AQHNxuv05XthiA/profile-displayphoto-shrink_100_100/0/1517608294451?e=1664409600&amp;v=beta&amp;t=qEpF33cFUj_x1ezER7kzOsnjFfnFBkNqNo1KW4eWjoA"
            height="36"
            alt="Martien Oranje"
            class="about-image"
          />
        </section>
      </div>
    </header>

    <about-page v-if="about" />
    <form-main v-else />
  </div>
</template>

<script lang="ts">
  import Logo from './components/Logo.vue';
  import FormMain from './components/FormMain.vue';
  import AboutPage from './components/AboutPage.vue';

  export default {
    name: 'UrineStrip',

    components: {
      Logo,
      FormMain,
      AboutPage,
    },

    data: () => ({
      about: false,
    }),

    methods: {
      reloadPage() {
        if (this.about) {
          this.about = false;
        } else {
          window.location.reload();
        }
      },

      navigateAbout() {
        this.about = !this.about;
      },
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

  section.flex {
    display: inline-flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    width: 100%;
  }

  section.flex .about-image {
    align-self: center;
    border-radius: 50%;
  }

  section.flex .about-image:hover {
    filter: drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.5));
  }
</style>
