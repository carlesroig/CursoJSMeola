export async function cargarCancion(ruta) {
    const audio = document.getElementById('cancionDia');
    audio.src = ruta;
}