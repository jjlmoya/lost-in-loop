import '@/assets/css/reset.css'
import '@/assets/css/variables.css'
import '@/assets/css/styles.css'
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { createI18n } from 'vue-i18n'
import * as literals from './literals'

const i18n = createI18n({
    locale: 'es', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages: {
        ...literals
    },
})


createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app')
