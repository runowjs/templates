import components from '@/components';
import router from '@/router';
import pinia from '@/stores';
import antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

const app = createApp(App);

// router
app.use(router);

// state
app.use(pinia);

// uikit
app.use(antd);

// global components
app.use(components);

app.mount('#app');
