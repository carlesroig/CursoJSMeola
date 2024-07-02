// GET -- Recoger información
// POST -- Añadir datos
// PUT -- Reemplazar o ajustar un recurso ya existente
// DELETE -- Eliminar un recurso ya existente
// PATCH -- Actualizar parcialmente un recurso

let datos = {
    title: 'Nuevo post',
    body: 'Mi contenido'
}
async function crearPost(titulo, contenido){
    try {
        let respuesta= await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(datos)
        })

        if(!respuesta.ok){
            throw new Error("Error en la solicutud"+respuesta.statusText);
        }

        let data= await respuesta.json();
        console.log("Registro creado: ", data)
        
    } catch (error) {
        console.error("Algo salio mal",error)
    }
}

crearPost("ferran","las pijas son las mas guarras")

// async function remplazar(id,titulo,contenido){
//     let respuesta= await fetch('https://jsonplaceholder.typicode.com/posts/'+id,{
//         method: "PUT",
//         headers: {
//             "Content-Type":"application/json"
//         },
//         body: JSON.stringify({
//             title: titulo,
//             body: contenido
//         })
        
//     })
//     .then(respuesta => respuesta.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));
// }
// remplazar(5,"paco","las pijas")

// async function deletes(id){
//     let respuesta= await fetch('https://jsonplaceholder.typicode.com/posts/'+id,{
//         method:"DELETE"
//     })
//     .then(respuesta => respuesta.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));
// }

// async function remplazar2(id,titulo){
//     let respuesta= await fetch('https://jsonplaceholder.typicode.com/posts/'+id,{
//         method: "PATCH",
//         headers: {
//             "Content-Type":"application/json"
//         },
//         body: JSON.stringify({
//             title: titulo
//         })
        
//     })
//     .then(respuesta => respuesta.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));
// }
// remplazar(5,"paco","las pijas")
