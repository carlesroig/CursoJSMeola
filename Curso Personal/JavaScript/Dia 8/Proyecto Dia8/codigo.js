let empleados=[];
function Empleado(legazo,nombre,apellido,fecha,cargo){
    this.legazo=legazo,
    this.nombre=nombre,
    this.apellido=apellido,
    this.fecha=fecha,
    this.cargo=cargo
}

function agregarEmpleado(){
    let legazo=document.getElementById("txtLegajo");
    let nombre=document.getElementById("txtNombre");
    let apellido=document.getElementById("txtApellido");
    let fecha=document.getElementById("txtNacimiento");
    let cargo=document.getElementById("txtCargo");
    let alerta=document.getElementById("alert");
    if(legazo.value=="" ||nombre.value=="" ||apellido.value=="" ||fecha.value=="" ||cargo.value=="" ){
        alerta.textContent="TIENES QUE RELLENAR TODOS LOS CAMPOS"
        alerta.style.color="red "
    }else{
        alerta.textContent=""
        let empleado=new Empleado(legazo.value,nombre.value,apellido.value,fecha.value,cargo.value);
        empleados.push(empleado);
        anyadirOpciones(empleado)
    }

}
function mostrarInfo(){
 
    let selectElement = document.getElementById("opciones");
    let selectedOption = selectElement.options[selectElement.selectedIndex];
 
    let texto = selectedOption.text;
 
    for(let empleado of empleados){
        let clave=empleado.nombre+" "+empleado.apellido;
        if(clave==texto){
            let legazo = document.getElementById("leg");
            let nom = document.getElementById("nom");
            let apell = document.getElementById("apell");
            let fech = document.getElementById("fech");
            let carg = document.getElementById("carg");
            leg.innerText="Legazo: "+empleado.legazo;
            nom.innerText="Nombre: "+empleado.nombre;
            apell.innerText="Apellidos: "+empleado.apellido;
            fech.innerText="Fecha: "+empleado.fecha;
            carg.innerText="Cargo: "+empleado.cargo;
 
        }
 
    }
 
}

function anyadirOpciones(empleado){
 
    let contenedor = document.getElementById("opciones");
    let opcion = document.createElement("option");
    opcion.setAttribute("value",empleado.nombre);
    opcion.innerText=empleado.nombre+" "+empleado.apellido;
 
    let op=contenedor.appendChild(opcion);
 
}

function anyadirVacio(){
    let legazo="";
    let nombre = "---";
    let apellido = "";  
    let fecha = "";
    let cargo = "";
 
    let empleado = new Empleado(legazo,nombre, apellido, fecha, cargo);
    empleados.push(empleado);
    anyadirOpciones(empleado);
 
}

