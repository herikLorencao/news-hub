<template>
  <div @click="readArticle" class="card">
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

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    readArticle() {
      this.$store.commit("news/defineArticle", this.article);
      this.$router.push("/noticia");
    },
  },
});
</script>

<style lang="scss" scoped>
@import "article-card";
</style>