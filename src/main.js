import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import App from "./App.vue";
import { Button, Table, Select } from "element-ui";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(ElementUI);

Vue.component(Button);
Vue.component(Table);
Vue.component(Select);

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");