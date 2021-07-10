<template>
  <div>
    <it-input
      class="search-input"
      v-model="searchQuery"
      placeholder="Pesquise por algum tópico ou assunto (Tecle Enter para confirmar)"
      suffix-icon="search"
      @keypress.enter="search"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  emits: ["search"],
  setup() {
    const searchQuery = ref("");
    return { searchQuery };
  },
  methods: {
    search() {
      this.$router.push(`/?q=${this.searchQuery}`);
    },
  },
});
</script>

<style lang="scss" scoped>
div {
  width: 100%;
}
</style>