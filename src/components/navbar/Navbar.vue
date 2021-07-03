<template>
  <header>
    <nav>
      <it-icon
        @click="toggleSearchInput"
        class="icon search-icon"
        name="search"
      />
      <router-link to="/" class="logo">
        <img src="../../assets/logo.png" alt="Logo" />
      </router-link>
      <search-bar class="search-bar" />
      <router-link class="link" to="/sobre">
        <it-icon class="icon" name="help_center" />
        <span>Sobre</span>
      </router-link>
    </nav>
    <search-bar v-show="showSearchInput" class="search-bar-mobile" />
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SearchBar from "./components/SearchBar.vue";

export default defineComponent({
  components: {
    SearchBar,
  },
  setup() {
    const showSearchInput = ref(false);
    return { showSearchInput };
  },
  methods: {
    toggleSearchInput() {
      this.showSearchInput = !this.showSearchInput;
    },
  },
});
</script>

<style lang="scss" scoped>
@import "navbar";
</style>