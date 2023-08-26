import devtools from '@vue/devtools'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
//import './samples/node-api'



const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
    .$nextTick(() => {
        postMessage({ payload: 'removeLoading' }, '*')
    })


if (process.env.NODE_ENV === 'development') {
    devtools.connect(/*'http://localhost', '8098'*/)
}