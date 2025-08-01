import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "./plugins/element";
import "element-plus/dist/index.css";
// 导入全局样式
import "./assets/css/global.css";

const app = createApp(App);

// 使用插件
app.use(router);
app.use(ElementPlus);

// 全局属性
app.config.globalProperties.$message = ElementPlus.message;

// 挂载应用
app.mount("#app");
