let selector1=document.getElementById("miSelector");
let input=document.getElementById("miInput");
let boton=document.getElementById("miBoton");
let listado=document.getElementById("miListado");
let lis=document.getElementById("listado");
let archivo='peliculas.json'

selector1.addEventListener('change', selector);
input.addEventListener('keydown', verificarTeclado);
input.addEventListener('keydown', buscar);
input.addEventListener('change', buscar);


function selector(){
    archivo = selector1.value;
}

function verificarTeclado(evento){
    if((evento.keyCode < 65 || evento.keyCode > 90) && evento.keyCode != 32 && evento.keyCode != 8) {
        evento.preventDefault();
    }
}

function buscar(){
   lis.innerHTML=" ";
    fetch(archivo)
    .then(res => res.json())
    .then(function(salida){
        for(comp of salida.data){
            if(comp.nombre.startsWith(input.value.toUpperCase())||comp.nombre.includes(input.value.toUpperCase())){
                // let li=document.createElement("li");
                // li.innerText=comp.nombre;
                // listado.appendChild(li)
                // let img=document.createElement("img")
                // img.setAttribute("src",comp.foto)
                // img.style.width='15%';
                // li.appendChild(img)
                


                // let p=document.createElement("p");
                // p.innerText=comp.sinopsis;
                // listado.appendChild(p)
                // p.style.display = "none";

                // li.addEventListener('mouseover',function(){
                //     p.style.display = "block";
                    
                // })

                // li.addEventListener('mouseout',function(){
                //     p.style.display = "none";
                // })


                let div=document.createElement("div");
                lis.appendChild(div);
                let h1=document.createElement("h1");
                h1.innerText=comp.nombre;
                div.appendChild(h1);

                let img=document.createElement("img");
                img.setAttribute("src","img/"+comp.foto);
                img.style.width='55%';
                div.appendChild(img);
                


                let p=document.createElement("p");
                p.innerText=comp.sinopsis;
                div.appendChild(p)
                p.style.display = "none";

                // div.addEventListener('mouseover',function(){
                //     p.style.display = "block";
                    
                // })

                // div.addEventListener('mouseout',function(){
                //     p.style.display = "none";
                //     img.style.width='15%';
                // })
            }
        }
    })
}

