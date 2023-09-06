import { createApp } from "vue";
import App from "./App.vue";
import { Button } from "../../src/index";
// import '../../src/styles/index.scss'

createApp(App).use(Button).mount("#root");
