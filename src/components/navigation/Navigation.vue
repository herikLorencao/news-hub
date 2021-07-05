<template>
  <div class="navigation">
    <it-button
      icon="arrow_back"
      :disabled="!enablePreviousButton"
      @click="previousPage"
    />
    <it-button class="indicator" @click.prevent>{{ currentPage }}</it-button>
    <it-button
      icon="arrow_forward"
      :disabled="!enableNextButton"
      @click="nextPage"
    />
  </div>
</template>

<script lang="ts">
import NewsService from "@/services/news-service";
import { computed, defineComponent, ref } from "@vue/runtime-core";

export default defineComponent({
  props: {
    page: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  emits: ["update:page"],
  setup(props) {
    const currentPage = ref(props.page);

    const enableNextButton = computed(() => {
      const nextPage = props.page + 1;
      return nextPage * NewsService.PAGE_SIZE <= props.total;
    });

    const enablePreviousButton = computed(() => props.page > 1);

    return { currentPage, enableNextButton, enablePreviousButton };
  },
  methods: {
    nextPage() {
      this.$emit("update:page", ++this.currentPage);
    },
    previousPage() {
      this.$emit("update:page", --this.currentPage);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "navigation";
</style>