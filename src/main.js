import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import styles from './assets/styles/styles.scss';

createApp(App).use(router).mount('#app');
