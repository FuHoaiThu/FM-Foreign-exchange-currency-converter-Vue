import { createApp } from "vue";
import "./styles.scss";
import App from "./App.vue";
import { createPinia } from "pinia";

createApp(App).use(createPinia()).mount("#app");
