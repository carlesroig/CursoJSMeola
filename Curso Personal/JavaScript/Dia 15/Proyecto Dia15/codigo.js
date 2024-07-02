async function mostrar(){
    try{
        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/db',{
            method:'GET',
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(respuesta =>respuesta.json())
        .then(data=>{
            let body=document.getElementById("contenido");
            let sal="";
            for(let elemento of data.dispositivos){
                sal += `
                    <tr>
                        <td>${elemento.id}</td>
                        <td>${elemento.marca}</td>
                        <td>${elemento.modelo}</td>
                        <td>${elemento.color}</td>
                        <td>${elemento.almacenamiento} GB</td>
                        <td>${elemento.procesador}</td>
                    </tr>
                `;
            }
            body.innerHTML = sal;
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    }catch(error){
        console.error(error)
    }
}

async function buscar(){
    try{
        let id=document.getElementById("txtConsulta").value;
        if (id === '') {
            alert('No ha ingresado ningún ID');
            return;
        }
        axios.get('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/' + id)
        .then(respuesta=>{
            let dispositivo=respuesta.data;
            document.getElementById('consultaNombre').value=dispositivo.marca;
            document.getElementById('consultaModelo').value = dispositivo.modelo;
            document.getElementById('consultaColor').value = dispositivo.color;
            document.getElementById('consultaAlmacenamiento').value = dispositivo.almacenamiento + ' GB';
            document.getElementById('consultaProcesador').value = dispositivo.procesador;
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    }catch(error){
        console.error(error)
    }
}

async function buscar1(){
    try{
        let id=document.getElementById("txtConsulta").value;
        if (id === '') {
            alert('No ha ingresado ningún ID');
            return;
        }
        fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/' + id,{
            method:'GET',
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then(data =>data.json())
        .then(respuesta=>{
            document.getElementById('consultaNombre').value=respuesta.marca;
            document.getElementById('consultaModelo').value = respuesta.modelo;
            document.getElementById('consultaColor').value = respuesta.color;
            document.getElementById('consultaAlmacenamiento').value = respuesta.almacenamiento + ' GB';
            document.getElementById('consultaProcesador').value = respuesta.procesador;
        })
        .catch(error => { throw new Error("Error en la solicitud: " + error) })
    }catch(error){
        console.error(error)
    }
}

async function modificar(){
    let id = document.getElementById('txtConsulta').value;
    let nombre = document.getElementById('consultaNombre').value;
    let modelo = document.getElementById('consultaModelo').value;
    let color = document.getElementById('consultaColor').value;
    let almacenamiento = document.getElementById('consultaAlmacenamiento').value;
    let procesador = document.getElementById('consultaProcesador').value;

    fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/' + id,{
        method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nombre: nombre,
                data: {
                    modelo: modelo,
                    color: color,
                    almacenamiento: almacenamiento,
                    procesador: procesador
                }
            })
    })
    .catch(error => { throw new Error("Error en la solicitud: " + error) })
}

async function eliminar(){
    let id = document.getElementById('txtConsulta').value;
    let nombre = document.getElementById('consultaNombre').value;
    let modelo = document.getElementById('consultaModelo').value;
    let color = document.getElementById('consultaColor').value;
    let almacenamiento = document.getElementById('consultaAlmacenamiento').value;
    let procesador = document.getElementById('consultaProcesador').value;

    fetch('https://my-json-server.typicode.com/fedegaray/telefonos/db',{
        method: 'delete',
    })
    then(respuesta => {
        alert(`Se ha eliminado el archivo ${id}.`);
        document.getElementById('consultaNombre').value = "";
        document.getElementById('consultaModelo').value = "";
        document.getElementById('consultaColor').value = "";
        document.getElementById('consultaAlmacenamiento').value = "";
        document.getElementById('consultaProcesador').value = "";
    })
    .catch(error => { throw new Error("Error en la solicitud: " + error) })
}

async function crear(){
    let id = document.getElementById('txtConsulta').value;
    let nombre = document.getElementById('consultaNombre').value;
    let modelo = document.getElementById('consultaModelo').value;
    let color = document.getElementById('consultaColor').value;
    let almacenamiento = document.getElementById('consultaAlmacenamiento').value;
    let procesador = document.getElementById('consultaProcesador').value;

    fetch('https://my-json-server.typicode.com/fedegaray/telefonos/dispositivos/' + id,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre,
            data: {
                modelo: modelo,
                color: color,
                almacenamiento: almacenamiento,
                procesador: procesador
            }
        })
    })
    .then(respuesta => respuesta.json())
    
    .catch(error => { throw new Error("Error en la solicitud: " + error) })
}