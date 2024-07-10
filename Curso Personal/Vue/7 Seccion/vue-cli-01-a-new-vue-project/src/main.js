import { createApp } from 'vue';
import App from './App.vue'
import ContactosAmigos from './components/ContactosAmigos.vue';
import NuevoAmigo from './components/NuevoAmigo.vue';
const app=createApp(App);

app.component('contactos-amigos',ContactosAmigos);
app.component('nuevo-amigos',NuevoAmigo);

app.mount('#app');
