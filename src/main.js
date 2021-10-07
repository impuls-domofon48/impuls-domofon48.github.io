import { createApp } from "vue";
import store from "./store";
import App from "./App.vue";

import "@/assets/style.css";
import "./utils/validations/validationRules";
createApp(App)
  .use(store)
  .mount("#app");
