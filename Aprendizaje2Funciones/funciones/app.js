function saludo (){
    console.log("Hola,mundo");
}

function crearSaludo(nombre){
    let nombreUsuario = document.getElementById("nombre").value;
    console.log("Hola, " +nombreUsuario + "!");
    return;
}

function crearDoble (numero) {
    let numeroUsuario = parseInt(document.getElementById("numeroUsuario").value);
    let resultado = numeroUsuario * 2;
    console.log("El doble de " + numeroUsuario + " es " + resultado);
    return resultado;
}

function promedio (value1,value2, value3){
    let valor1 = parseInt(document.getElementById("valor1").value);
    let valor2 = parseInt(document.getElementById("valor2").value); 
    let valor3 = parseInt(document.getElementById("valor3").value);
    let sum = valor1 + valor2 + valor3;
    let promedio = Math.floor(sum / 3);
    console.log("El promedio es " + promedio);
    return promedio;
}

function numeroMayor (num1, num2){
    let numero1 = parseInt(document.getElementById("numero1").value);
    let numero2 = parseInt(document.getElementById("numero2").value);
    if (numero1 > numero2){
        console.log("El número mayor es " + numero1);
        return numero1;
    } else if (numero2 > numero1){
        console.log("El número mayor es " + numero2);
        return numero2;
    } else {
        console.log("Los números son iguales");
        return null;
    }
}

function multiplicar (a){
    let numero = parseInt(document.getElementById("numero").value);
    let resultado =  numero * numero;
    console.log("EL resultado de multiplicar por si mismo es "+ resultado);
    return resultado;
}