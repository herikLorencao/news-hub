type Source = {
    id: string | null;
    name: string;
};

type Article = {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: Source;
    title: string;
    url: string;
    urlToImage: string;
};

type NewsList = {
    articles: Article[];
    totalResults: number;
    status: string;
};

const emptyArticle = {
    author: "",
    content: "",
    description: "",
    publishedAt: "",
    source: {
        id: null,
        name: "",
    },
    title: "",
    url: "",
    urlToImage: "",
};

const LOADING_STATUS = "loading";
const OK_STATUS = "ok";

export { NewsList, Article, emptyArticle, LOADING_STATUS, OK_STATUS };
