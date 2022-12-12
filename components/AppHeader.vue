<script lang="ts" setup></script>

<template>
  <header class="navbar vff-header">
    <div class="f-container flex justify-between">
      <logo v-if="$route.name === 'index'" @click="$router.go(0)" />
      <logo v-else @click="$router.push('/')" />
      <dev-only>
        <button
          type="button"
          @click="navigateTo('/editor')"
          class="block px-4 py-2 border-2 border-green-500 text-green-500 font-medium text-s leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
        >
          Editor
        </button>
      </dev-only>
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
