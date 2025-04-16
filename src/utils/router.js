import { createWebHashHistory, createRouter } from "vue-router";
import Posts from "../views/Posts.vue";
import Singlepost from "../views/Singlepost.vue";
import Search from "../views/Search.vue";

const routes = [
    {
        path: "/",
        name: "posts",
        component: Posts
    },
    {
        path: "/search",
        name: "search",
        component: Search
    },
    {
        path: "/singlepost/:documentId",
        name: "singlepost",
        component: Singlepost,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;