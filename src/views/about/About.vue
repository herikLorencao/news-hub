<template>
  <main>
    <h1>Sobre</h1>
    <p>
      Aplicação para listagens de notícias utilizando a News API, Vue 3, Sass e
      o framework de UI Equal.
    </p>
    <p>Desenvolvido por Herik dos Santos Lorenção em julho de 2021.</p>
    <a href="https://github.com/herikLorencao/news-hub" target="_blank"
      >Link do Código Fonte</a
    >
    <p>OBS: Todas as notícias mostradas são de fonte da News API.</p>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({});
</script>

<style lang="scss" scoped>
@import "about";
</style>