
let num1
let num2
function sumar(){
    cogernum()
    result= +num1 + +num2;
    mostrarInfo(result);
}
function restar(){
    cogernum()
    result=num1 - num2;
    mostrarInfo(result);
}
function multiplicar(){
    cogernum()
    result=num1 * num2;
    mostrarInfo(result);
}
function divir(){
    cogernum()
     result=num1 / num2;
    mostrarInfo(result);
}
function potencia(){
    cogernum()
    result=Math.pow(num1,num2);
    mostrarInfo(result);
}
function raiz(){
    cogernum()
     result=Math.sqrt(num1);
    mostrarInfo(result);
}
function absoluto(){
    cogernum()
    result=Math.abs(num1);
    mostrarInfo(result);
}
function random(){
    cogernum()
    result=Math.random()*(num1-num2)+num1;
    mostrarInfo(result);
}
function mostrarInfo(result){
    cogernum()
    document.getElementById("resultado").textContent=result
    mostrarInfo(result);
}

function cogernum(){
    num1=document.getElementById("num1").value
    num2=document.getElementById("num2").value
}

function round(){
    re=Math.round(result);
    mostrarInfo(re);
}

function floor(){
    re=Math.floor(result);
    mostrarInfo(re);
}

function ceil(){
    re=Math.ceil(result);
    mostrarInfo(re);
}




