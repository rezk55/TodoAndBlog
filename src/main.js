import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios)

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faThumbsUp, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { dom } from "@fortawesome/fontawesome-svg-core";

dom.watch(); // This will kick of the initial replacement of i to svg tags and configure a MutationObserver

Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(faEye, faThumbsUp, faEdit);

import "./scss/main.scss";
import "normalize.css";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");