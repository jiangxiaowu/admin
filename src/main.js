import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import { Button, Table, Select } from "element-ui";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./router";
import VueLazyload from "vue-lazyload";

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(ElementUI);
Vue.use(VueLazyload);

Vue.component(Button);
Vue.component(Table);
Vue.component(Select);

Vue.config.productionTip = false;

const AV = require("leancloud-storage");
// const { Query, User } = AV;

AV.init({
    appId: "PHsoUQJPuNqNIg66e28A9TuJ-gzGzoHsz",
    appKey: "o6Hf08FJtxvYOmFFgNMFnMow",
    serverURL: "https://phsouqjp.lc-cn-n1-shared.com",
});
AV.debug.enable(); // 启用
// AV.debug.disable(); // 停用

Vue.prototype.$AV = AV;
// Vue.prototype.$KEY_SESSION_TOKEN = "sessionToken";

// GOOD
router.beforeEach((to, from, next) => {
    if (to.name !== "Login" && !isAuthenticated()) next({ name: "Login" });
    else next();
});

function isAuthenticated() {
    const currentUser = AV.User.current();
    if (currentUser === null || currentUser.isAnonymous()) {
        return false;
    }
    return true;
}

console.log(isAuthenticated());

window.vm = new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");