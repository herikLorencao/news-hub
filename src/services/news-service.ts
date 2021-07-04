import axios, { AxiosInstance } from "axios";
import dotenv from "dotenv";
dotenv.config();

export default class NewsService {
    private client: AxiosInstance;

    constructor() {
        console.log(process.env);

        this.client = axios.create({
            baseURL: "",
            headers: {
                "X-Api-Key": "",
            },
        });
    }
}
