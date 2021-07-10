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

export { NewsList, Article, emptyArticle };
