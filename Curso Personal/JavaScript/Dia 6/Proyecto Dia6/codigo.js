let array = [3, 4, 8, 9, 6,10];
let contador=0;
function mostrarNotas() {
    let lista = document.getElementById("listaNotas");
 
    if (contador % 2 == 0) {
        for (let numero of array) {
            let item = document.createElement("li");
            item.innerText = numero;
            lista.appendChild(item);
        }
        lista.classList.add("visible");
        lista.style.marginBottom="3%";        
    } else {
        lista.classList.remove("visible");
        lista.style.marginBottom="0px";
        setTimeout(() => {
            lista.innerHTML = '';          
        }, 500);
    }
 
    contador++;
}
function calcularPromedio(){
    let prom=0;
    let resul=0
    for(let x=0;x<array.length;x++){
        prom=prom+array[x]
    }
    resul=Math.round(prom/array.length)
    document.getElementById("promedio").textContent=resul
}
function notaMasAlta(){
    let prom=0;
    let resul=0
    for(let x=0;x<array.length;x++){
        if(prom<array[x]){
            prom=array[x]
        }

    }
    document.getElementById("nota").textContent=prom
}
function hayAplazo(){
    let prom=0;
    for(let nota of array){
        if(nota<5){
            prom++
        }
        
    }
    document.getElementById("aplazo").textContent=prom
}
function desplegar() {
    let enElement = document.getElementById("en");
    let caElement = document.getElementById("ca");

    enElement.style.opacity = 0;
    enElement.style.transition = "opacity 1s";
    enElement.style.zIndex = 0;
    enElement.style.pointerEvents="none"
    setTimeout(() =>{
        caElement.style.marginTop = "-10%";
        caElement.style.transition = "margin-top 1s ease-in-out";
        caElement.style.zIndex = 5;
    },50)
    caElement.style.display = "block";
    setTimeout(() => {
        caElement.style.maxHeight = "1000px"; 
        caElement.style.opacity = 1;
        caElement.style.transition = "max-height 1s ease-in-out, opacity 1s ease-in-out";
    }, 280);
  
    

}

function desplegar2() {
    let enElement = document.getElementById("en");
    let caElement = document.getElementById("ca");


    caElement.style.opacity = 0;
    caElement.style.maxHeight = "0";
    caElement.style.zIndex = 0;
    caElement.style.transition = "max-height 1s ease-in-out, opacity 1s ease-in-out";

    setTimeout(() => {
        enElement.style.opacity = 1;
        enElement.style.transition = "opacity 1s";
        enElement.style.pointerEvents="all"
    }, 800);
    
}