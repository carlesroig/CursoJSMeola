import { createApp } from 'vue';
import App from './App.vue'
import ContactosAmigos from './components/ContactosAmigos.vue';
const app=createApp(App);

app.component('contactos-amigos',ContactosAmigos);

app.mount('#app');
