import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import App from '@/App.vue';
import 'element-plus/dist/index.css';
import router from '@/routes/index';

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.mount('#app');
