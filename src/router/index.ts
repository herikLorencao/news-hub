import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/Home.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/sobre",
        name: "Sobre",
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/about/About.vue"),
    },
    {
        path: "/noticia",
        name: "Notícia",
        component: () =>
            import(
                /* webpackChunkName: "article" */ "../views/article/Article.vue"
            ),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
