import { NewsList } from "@/typings/news";
import axios, { AxiosInstance, AxiosResponse } from "axios";

export default class NewsService {
    private client: AxiosInstance;

    constructor() {
        this.client = axios.create({
            baseURL: process.env.VUE_APP_BASE_URL,
            headers: {
                "X-Api-Key": process.env.VUE_APP_API_KEY,
            },
        });
    }

    async getHeadlineNews(): Promise<NewsList> {
        const resp = await this.client.get("top-headlines", {
            params: {
                country: "br",
            },
        });
        return resp.data;
    }
}
