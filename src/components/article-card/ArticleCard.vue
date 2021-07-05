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
import { useRouter } from "vue-router";
import { useStore } from "vuex";

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

    const readArticle = () => {
      store.commit("news/defineArticle", props.article);
      router.push("/noticia");
    };

    return { readArticle };
  },
});
</script>

<style lang="scss" scoped>
@import "article-card";
</style>