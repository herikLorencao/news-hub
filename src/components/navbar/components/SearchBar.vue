<template>
  <div>
    <it-input
      class="search-input"
      v-model="searchQuery"
      placeholder="Pesquise por algum tópico ou assunto"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const searchQuery = ref("");
    return { searchQuery };
  },
});
</script>

<style lang="scss" scoped>
div {
  width: 100%;
}
</style>