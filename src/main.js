import {
    createApp
} from 'vue'
import './style.css'
import App from './App.vue'
import '../src/assets/css/index.css'
import router from '../routes'
import { createI18n } from 'vue-i18n'

import en from './locales/en'
import fr from './locales/fr'
import ar from './locales/ar'



// createApp(App).use(router).mount('#app')
const i18n = createI18n({
    // something vue-i18n options here ...
    locale: 'ar', // Set the default language
    messages: {
        ar,
        en,
        fr,
    },
  })

const app = createApp(App)


  app.use(router)
  app.use(i18n)
app.mount('#app')