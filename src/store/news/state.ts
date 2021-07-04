import { Article } from "@/typings/news";

type NewsState = {
    article: Article | null;
};

const state: NewsState = {
    article: null,
};

export { state, NewsState };
