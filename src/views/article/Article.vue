<template>
  <main>
    <h1>{{ article.title }}</h1>
    <span v-show="article.publishedAt.length > 0">
      Publicado em: {{ dateFormat(article.publishedAt) }}
    </span>
    <h2>{{ article.description }}</h2>
    <img :src="article.urlToImage" />
    <it-button @click="openArticle" type="primary" class="open-article-btn"
      >Veja notícia completa</it-button
    >
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/runtime-core";
import router from "@/router";
import { useStore } from "vuex";
import { emptyArticle } from "@/typings/news";
import dateFormat from "@/utils/date-formatter";

export default defineComponent({
  setup() {
    const store = useStore();
    const article = ref(emptyArticle);

    onMounted(() => {
      const articleContent = store.getters["news/getArticle"];
      if (!articleContent) router.back();
      article.value = articleContent;
    });
    return { article, dateFormat };
  },
  methods: {
    openArticle() {
      window.open(this.article.url);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "article";
</style>