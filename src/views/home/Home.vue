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
    const getHeadlineNews = async () => await newsService.getHeadlineNews();
    const getSearchNews = async (
      query: LocationQueryValue | LocationQueryValue[]
    ) => {
      news.value.status = LOADING_STATUS;
      const queryValue = query ? query.toString() : "";
      news.value = await newsService.searchNews(queryValue);
    };

    onMounted(async () => {
      news.value.status = LOADING_STATUS;
      news.value = await getHeadlineNews();
    });

    watch(page, async (newPage) => {
      news.value.status = LOADING_STATUS;

      if (route.query?.q) {
        await getSearchNews(route.query?.q);
      }

      news.value = await newsService.getHeadlineNews(newPage);
    });

    watch(() => route.query.q, getSearchNews);

    return { news, page, loading };
  },
});
</script>

<style lang="scss" scoped>
@import "home";
</style>