<script lang="ts" setup></script>

<template>
  <header class="navbar flex justify-between">
    <logo @click="navigateTo('/')" class="navbar-item" />
    <img
      @click="navigateTo('/about')"
      src="../assets/user-image.jpeg"
      alt="Martien Oranje"
      class="navbar-item w-12 h-12 rounded-full"
    />
  </header>
</template>

<style scoped>
  :root {
    --vff-bg-color: #f9f6fb;
    --vff-main-text-color: #181818;
    --vff-secondary-text-color: #7f8c8d;
    --vff-tertiary-text-color: #f1f1f1;
    --vff-main-accent-color: #27ae60;
    --vff-secondary-accent-color: #2ecc71;
    --vff-tertiary-accent-color: #8e44ad;
    --vff-header-color: var(--vff-tertiary-accent-color);
    --vff-header-border-color: transparent;
    --vff-button-color: var(--vff-main-accent-color);
    --vff-button-hover-color: var(--vff-secondary-accent-color);
    --vff-button-text-color: #fff;
    --vff-main-form-bg-color: #f9f6fb;
    --vff-secondary-form-bg-color: #475a6d;
    --vff-form-input-color: var(--vff-main-text-color);
    --vff-field-key-color: var(--vff-main-accent-color);
    --vff-arrow-color: var(--vff-main-text-color);
    --vff-arrow-hover-color: rgba(0, 0, 0, 0.07);
    --vff-footer-color: rgba(249, 246, 251, 0.75);
    --vff-progress-bar-color: var(--vff-main-text-color);
  }

  header.navbar {
    background-color: #34495e;
    border-bottom: 2px solid #8e44ad;
    padding: 6px 8%;
  }

  header.navbar svg {
    fill: var(--vff-main-text-color);
  }

  header.navbar .navbar-item:hover {
    filter: invert(0) sepia(1) saturate(1) hue-rotate(0deg) brightness(1)
      drop-shadow(2px 2px 3px rgba(0, 0, 0, 0.5));
  }

  @media screen and (min-width: 1024px) {
    header.navbar {
      padding: 6px 13.5%;
    }
  }

  @media screen and (min-width: 1366px) {
    header.navbar {
      padding: 6px 18%;
    }
  }
</style>
