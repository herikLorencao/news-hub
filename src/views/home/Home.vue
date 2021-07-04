<template>
  <section>
    <h1>Principais Notícias</h1>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NewsService from "@/services/news-service";

export default defineComponent({
  setup() {
    const newsService = new NewsService();
    return { newsService };
  },
});
</script>

<style lang="scss">
@import "home";
</style>