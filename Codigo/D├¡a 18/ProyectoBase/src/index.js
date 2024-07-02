import { cargarCancion } from "./modulos/cancion.js";
import getHoras from "./modulos/hora.js";
import getNoticia from "./modulos/noticia.js";
import getTiempo from "./modulos/tiempo.js";

async function iniciarApp() {
    try {
        await cargarCancion("../assets/Moby - We Are All Made Of Stars.mp3");
        getTiempo();
        getNoticia();
        setInterval(getHoras, 1000); // Actualiza la hora cada segundo
    } catch (error) {
        console.error('Error al iniciar la aplicación:', error);
    }
}

iniciarApp();