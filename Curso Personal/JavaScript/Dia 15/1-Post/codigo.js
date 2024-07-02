async function crearPost(titulo, contenido){
    try {
        let respuesta= await fetch('https://jsonplaceholder.typicode.com/posts',{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                title: titulo,
                body: contenido,
                userId:1,
            })
        })

        if(!respuesta.ok){
            throw new Error("Error en la solicutud"+respuesta.statusText);
        }

        let data= await respuesta.json();
        
    } catch (error) {
        console.error("Algo salio mal",error)
    }
}

crearPost("paco","las pijas son las mas guarras")