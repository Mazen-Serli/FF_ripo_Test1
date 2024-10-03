import { createApp } from 'vue'
import './style.css'
import PrimeVue from "primevue/config";
import ToastService from 'primevue/toastservice';
import Toast from "primevue/toast";
import Aura from '@primevue/themes/aura';
import App from './App.vue'

const app = createApp(App);
app.use(ToastService);
app.component('Toast', Toast);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.mount('#app')
