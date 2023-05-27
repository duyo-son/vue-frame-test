
import { createApp } from 'vue'
import App from './App.vue'


// bad
let element = (document.getElementById('frm') as any)?.contentWindow.document.getElementById('app');
createApp(App).mount(element)


// good but I don't want to use this
createApp(App).mount('#app')
