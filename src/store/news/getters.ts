import { Article } from "@/typings/news";
import { NewsState } from "./state";

const getArticle = (state: NewsState): Article | null => {
    return state.article;
};

export default { getArticle };
