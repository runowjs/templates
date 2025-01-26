import AntIcon from '@/components/ant-icon/index.vue';
import PageContainer from '@/components/page-container/index.vue';
import type { App } from 'vue';

// register global components
export default {
  install(Vue: App) {
    Vue.component('a-icon', AntIcon);
    Vue.component('page-container', PageContainer);
  },
};
