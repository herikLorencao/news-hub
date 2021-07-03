<template>
  <navbar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "@/components/navbar/Navbar.vue";

export default defineComponent({
  components: {
    Navbar,
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
}
</style>