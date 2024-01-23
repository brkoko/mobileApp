import PrimeVue from 'primevue/config';
import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'primevue/resources/themes/bootstrap4-light-purple/theme.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.mount('#app')
