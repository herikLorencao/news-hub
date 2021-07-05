<template>
  <section>
    <h1>Principais Notícias</h1>
    <navigation :total="headlinesNews.totalResults" v-model:page="page" />
    <article-card
      v-show="!loading"
      v-for="article in headlinesNews.articles"
      :key="article.url"
      :article="article"
    />
    <div v-show="loading" class="loading-container">
      <it-loading class="loading" color="blue"></it-loading>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import ArticleCard from "@/components/article-card/ArticleCard.vue";
import Navigation from "@/components/navigation/Navigation.vue";
import NewsService from "@/services/news-service";
import { NewsList } from "@/typings/news";

export default defineComponent({
  components: {
    ArticleCard,
    Navigation,
  },
  setup() {
    const newsService = new NewsService();
    const headlinesNews = ref<NewsList>({
      articles: [],
      totalResults: 0,
      status: "ok",
    });

    const page = ref(1);

    const loading = computed(() => headlinesNews.value.articles.length === 0);

    onMounted(async () => {
      headlinesNews.value = await newsService.getHeadlineNews();
    });

    watch(page, async (newPage) => {
      headlinesNews.value.articles = [];
      headlinesNews.value = await newsService.getHeadlineNews(newPage);
    });

    return { headlinesNews, page, loading };
  },
});
</script>

<style lang="scss" scoped>
@import "home";
</style>