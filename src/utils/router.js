import { createWebHashHistory, createRouter } from "vue-router";
import Posts from "../views/Posts.vue";
import Singlepost from "../views/Singlepost.vue";

const routes = [
    {
        path: "/",
        name: "posts",
        component: Posts
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