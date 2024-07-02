function evaluarCompra(){
    let elementoRespuesta = document.getElementById("decision");

    let elementoPrecio = document.getElementById("PrecioTexto");
    let precio = elementoPrecio.value;

    if(precio<5){
        elementoRespuesta.textContent="Comprar 2 cartones de leche"
    }else{
        if(precio<8){
            elementoRespuesta.textContent="Comprar 1 cartones de leche"
        }else{
            elementoRespuesta.textContent="No Comprar cartones de leche"
        }
         
    }

}
