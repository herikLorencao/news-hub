<template>
  <section>
    <h1>Principais Notícias</h1>
    <navigation :total="news.totalResults" v-model:page="page" />
    <article-card
      v-show="!loading"
      v-for="article in news.articles"
      :key="article.url"
      :article="article"
    />
    <div v-show="loading" class="loading-container">
      <it-loading class="loading" color="blue"></it-loading>
    </div>
    <div v-show="news.articles.length === 0" class="not-found-articles">
      <it-icon class="icon" color="#333" name="cancel" />
      <span>Nenhum artigo foi encontrado.</span>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import ArticleCard from "@/components/article-card/ArticleCard.vue";
import Navigation from "@/components/navigation/Navigation.vue";
import NewsService from "@/services/news-service";
import { LOADING_STATUS, NewsList } from "@/typings/news";
import { LocationQueryValue, useRoute } from "vue-router";

export default defineComponent({
  components: {
    ArticleCard,
    Navigation,
  },
  setup() {
    const newsService = new NewsService();
    const news = ref<NewsList>({
      articles: [],
      totalResults: 0,
      status: "ok",
    });

    const page = ref(1);
    const route = useRoute();

    const loading = computed(() => news.value.status === LOADING_STATUS);

    const getHeadlineNews = async () =>
      await newsService.getHeadlineNews(page.value);

    const getSearchNews = async (
      query: LocationQueryValue | LocationQueryValue[]
    ) => {
      news.value.status = LOADING_STATUS;

      if (!query) {
        news.value = await getHeadlineNews();
        return;
      }

      const queryValue = query ? query.toString() : "";
      news.value = await newsService.searchNews(queryValue, page.value);
    };

    const loadNews = async () => {
      if (route.query?.q) {
        await getSearchNews(route.query?.q);
        return;
      }

      news.value = await getHeadlineNews();
    };

    onMounted(async () => {
      news.value.status = LOADING_STATUS;
      await loadNews();
    });

    watch(page, async () => {
      news.value.status = LOADING_STATUS;
      await loadNews();
    });

    watch(() => route.query.q, getSearchNews);

    return { news, page, loading };
  },
});
</script>

<style lang="scss" scoped>
@import "home";
</style>