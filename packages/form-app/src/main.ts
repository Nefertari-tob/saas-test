import { createApp } from "vue";
import App from "@/App.vue";
import router from "./router";
// import { createPinia } from "pinia";
// import { Input, FormItem } from "@formily/element-plus";
import "element-plus/theme-chalk/src/base.scss";
import "element-plus/dist/index.css";

createApp(App).use(router).mount("#app");
