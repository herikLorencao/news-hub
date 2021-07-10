import { NewsList } from "@/typings/news";
import axios, { AxiosInstance } from "axios";

export default class NewsService {
    private client: AxiosInstance;
    static PAGE_SIZE = 10;

    constructor() {
        this.client = axios.create({
            baseURL: process.env.VUE_APP_BASE_URL,
            headers: {
                "X-Api-Key": process.env.VUE_APP_API_KEY,
            },
        });
    }

    async getHeadlineNews(page = 1): Promise<NewsList> {
        const resp = await this.client.get("top-headlines", {
            params: {
                country: "br",
                pageSize: NewsService.PAGE_SIZE,
                page,
            },
        });
        return resp.data;
    }

    async searchNews(queryParam: string, page = 1): Promise<NewsList> {
        const resp = await this.client.get("everything", {
            params: {
                q: queryParam,
                page,
            },
        });
        return resp.data;
    }
}
