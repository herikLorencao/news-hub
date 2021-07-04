import { Article } from "@/typings/news";
import { NewsState } from "./state";

const defineArticle = (state: NewsState, article: Article): void => {
    state.article = article;
};

export default { defineArticle };
