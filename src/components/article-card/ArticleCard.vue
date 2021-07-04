<template>
  <div class="card">
    <section>
      <h1>{{ article.title }}</h1>
      <span>{{ article.description }}</span>
      <it-button class="read-button" type="primary" outlined
        >Continue lendo</it-button
      >
    </section>
    <figure>
      <img :src="article.urlToImage" />
    </figure>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Article } from "@/typings/news";

export default defineComponent({
  props: {
    article: {
      type: Article,
      required: true,
    },
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
@import "article-card";
</style>