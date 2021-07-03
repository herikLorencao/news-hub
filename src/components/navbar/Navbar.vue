<template>
  <header>
    <router-link to="/" class="logo">
      <img src="../../assets/logo.png" alt="Logo" />
    </router-link>
    <search-bar class="search-bar" />
    <router-link class="link" to="/sobre">
      <it-icon class="icon" name="help_center" />
      Sobre
    </router-link>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchBar from "./components/SearchBar.vue";

export default defineComponent({
  components: {
    SearchBar,
  },
});
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #ddd;

  .logo {
    display: flex;
    align-items: center;
    height: 100%;
    width: 20%;

    img {
      height: 70%;
    }
  }

  .search-bar {
    width: 60%;
  }

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #333;
    text-decoration: none;
    font-size: 1.5rem;
    width: 20%;

    .icon {
      font-size: 2.3rem;
      margin-right: 10px;
    }
  }

  .link:hover {
    color: blue;
  }
}
</style>