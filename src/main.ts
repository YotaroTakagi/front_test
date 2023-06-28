// Vue
import { createApp } from 'vue';
import App from './App.vue';

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';

// DatePicker
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

// router 
import route from './router.ts';

const vuetify = createVuetify();

createApp(App).use(vuetify).use(route).component('VueDatePicker', VueDatePicker).mount('#app')