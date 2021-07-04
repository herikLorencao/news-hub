<template>
  <navbar />
  <router-view />
  <footer-page />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/navbar/Navbar.vue";
import FooterPage from "@/components/footer/Footer.vue";

export default defineComponent({
  components: {
    Navbar,
    FooterPage,
  },
});
</script>

<style lang="scss">
:root {
  font-size: 10px;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  min-width: 360px;
}
</style>