<template>
  <section>
    <h1>Principais Notícias</h1>
    <article-card
      v-show="headlinesNews.length !== 0"
      v-for="article in headlinesNews.articles"
      :key="article.url"
      :article="article"
    />
    <div v-show="headlinesNews.length === 0" class="loading-container">
      <it-loading class="loading" color="blue"></it-loading>
    </div>
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

<style lang="scss" scoped>
@import "home";
</style>