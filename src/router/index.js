import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Todo from "../views/Todo.vue";
import About from "../views/About.vue";
import Blog from "../views/Blog.vue";
import Help from "../views/Help.vue";
import PostsJSon from "../views/posts_json.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/todo",
        name: "Todo",
        component: Todo
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/blog",
        name: "Blog",
        component: Blog
    },
    {
        path: "/help",
        name: "Help",
        component: Help
    },
    {
        path: "/posts_json",
        name: "Posts",
        component: PostsJSon
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;