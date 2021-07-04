import { Article } from "@/typings/news";

type NewsState = {
    article: Article | null;
};

const article = null;

const state: NewsState = {
    article,
};

export { state, NewsState };
