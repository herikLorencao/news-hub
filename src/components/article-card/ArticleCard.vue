<template>
  <div class="card">
    <section>
      <h1>{{ news.title }}</h1>
      <span>{{ news.description }}</span>
      <it-button class="read-button" type="primary" outlined
        >Continue lendo</it-button
      >
    </section>
    <figure>
      <img :src="news.urlToImage" />
    </figure>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Article } from "@/typings/news";

export default defineComponent({
  props: {
    news: {
      type: Article,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "article-card";
</style>