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

export { NewsList, Article };
