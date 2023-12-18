import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createPinia } from 'pinia'

import './style.css'

import note from '@/i18n/en'
import router from '@/router/index'

import App from './App.vue'

const pinia = createPinia()

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: note
})

createApp(App).use(i18n).use(pinia).use(router).mount('#app')
