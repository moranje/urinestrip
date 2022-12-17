<script lang="ts" setup></script>

<template>
  <header class="navbar vff-header">
    <div class="f-container flex justify-between">
      <logo v-if="$route.name === 'index'" @click="$router.go(0)" />
      <logo v-else @click="$router.push('/')" />
      <img
        @click="navigateTo('/about')"
        src="../assets/user-image.jpeg"
        alt="Martien Oranje"
        class="navbar-item w-12 h-12 rounded-full"
      />
    </div>
  </header>
</template>

<style lang="scss" scoped>
  header.navbar {
    background-color: var(--vff-bg-color);
    border-bottom: 2px solid var(--vff-main-accent-color);
    position: sticky;
    top: 0;
    z-index: 1;
  }

  header.navbar .navbar-item:hover {
    // border: 2px solid var(--vff-main-accent-color);
    cursor: pointer;
  }

  @media screen and (min-width: 1366px) {
    header.navbar {
      padding: 8px 10% 4px 10%;
    }
  }
</style>
