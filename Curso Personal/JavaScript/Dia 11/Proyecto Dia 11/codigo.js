function basejson(){
    let banco,sucursal,titular,nro_cuenta,saldo,cbu,abierto

    fetch('resumen.json')
    .then(res=>res.json())
    .then(function(salida){
        document.getElementById("banco").textContent=salida.banco;
        document.getElementById("sucursal").textContent=salida.sucursal;

        document.getElementById("titular").textContent=salida.titular;
        document.getElementById("cuenta").textContent=salida.nro_cuenta;

        document.getElementById("usd").textContent=salida.saldo[0].monto + " " + salida.saldo[0].moneda;
        document.getElementById("eur").textContent=salida.saldo[1].monto + " " + salida.saldo[1].moneda;

        document.getElementById("cbu").textContent=salida.cbu;
        document.getElementById("abierto").textContent=salida.abierto;
    })
}