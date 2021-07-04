<template>
  <section>
    <h1>Principais Notícias</h1>
    <article-card
      v-for="news in headlinesNews.articles"
      :key="news.url"
      :news="news"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import ArticleCard from "@/components/article-card/ArticleCard.vue";
import NewsService from "@/services/news-service";
import { NewsList } from "@/typings/news";

export default defineComponent({
  components: {
    ArticleCard,
  },
  setup() {
    const newsService = new NewsService();
    const headlinesNews = ref<NewsList | []>([]);

    onMounted(async () => {
      headlinesNews.value = await newsService.getHeadlineNews();
    });

    return { headlinesNews };
  },
});
</script>

<style lang="scss">
@import "home";
</style>