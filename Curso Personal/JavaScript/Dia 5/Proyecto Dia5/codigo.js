function evaluarGenero(genero){
    let resul= document.getElementById("decision");
    let elementoEdad=document.getElementById("EdadTexto");
    let edad=elementoEdad.value;

    switch(genero){
        case "comedia":
            if(edad<=13){
                resul.textContent="c1";
            }else if(edad<=16){
                resul.textContent="c2";
            }else{
                resul.textContent="c3";
            }
        break;
        case "drama":
            if(edad<=13){
                resul.textContent="d1";
            }else if(edad<=16){
                resul.textContent="d2";
            }else if(edad>=16){
                resul.textContent="d3";
            }
        break;
        case "musical":
            if(edad<=13){
                resul.textContent="m1";
            }else if(edad<=16){
                resul.textContent="m2";
            }else if(edad>=16){
                resul.textContent="ms3";
            }
        break;
        case "crimen":
            if(edad<=13){
                resul.textContent="cc1";
            }else if(edad<=16){
                resul.textContent="cc2";
            }else if(edad>=16){
                resul.textContent="cc3";
            }
        break;
    }
}