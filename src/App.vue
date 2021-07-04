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
@import "styles/root";
</style>