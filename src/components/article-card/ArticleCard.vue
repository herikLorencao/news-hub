<template>
  <div @click="readArticle" class="card">
    <section>
      <h1>{{ article.title }}</h1>
      <span>{{ article.description }}</span>
      <it-button class="read-button" type="primary" outlined
        >Continue lendo</it-button
      >
    </section>
    <div class="article-secondary-info">
      <figure>
        <img :src="article.urlToImage" :onerror="notFoundImageSrc" />
      </figure>
      <span>Publicação: {{ dateFormat(article.publishedAt) }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import dateFormat from "@/utils/date-formatter";

export default defineComponent({
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const router = useRouter();
    const notFoundImageSrc =
      "this.src='https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg'";

    const readArticle = () => {
      store.commit("news/defineArticle", props.article);
      router.push("/noticia");
    };

    return { readArticle, notFoundImageSrc, dateFormat };
  },
});
</script>

<style lang="scss" scoped>
@import "article-card";
</style>