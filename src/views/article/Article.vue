<template>
  <main>
    <h1>{{ article.title }}</h1>
    <h2>{{ article.description }}</h2>
    <img :src="article.urlToImage" />
    <it-button @click="openArticle" type="primary" class="open-article-btn"
      >Veja notícia completa</it-button
    >
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import { emptyArticle } from "@/typings/news";
import router from "@/router";

export default defineComponent({
  setup() {
    const store = useStore();
    const article = ref(emptyArticle);

    onMounted(() => {
      const articleContent = store.getters["news/getArticle"];
      if (!articleContent) router.back();
      article.value = articleContent;
    });
    return { article };
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