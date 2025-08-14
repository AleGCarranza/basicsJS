//Cre una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC (peso, altura){
    //Validación de parámetros
    let kg = document.getElementById("peso").value;
    let m = document.getElementById("altura").value;
    //peso / estatura elevado al cuadrado
    let imc = kg / (m * m);
    if(imc>=30){
        document.getElementById("estadoSalud").innerHTML = "Tienes sobrepeso";
    } else if(imc < 18.5) {
        document.getElementById("estadoSalud").innerHTML = "Tienes bajo peso";
    } else {
        document.getElementById("estadoSalud").innerHTML = "Tienes un peso saludable";
    }
    //Mostrar el resultado en el elemento con id "imc"
    document.getElementById("imc").innerHTML = "Tu IMC es: " + imc.toFixed(2) + " kg/m²";
    return imc;
}
//Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial(num) {
    let numero = document.getElementById("numeroFactor").value;
    //validación de umeros positivos
    if (numero < 0) {
        return "El factorial no está definido para números negativos.";
    }
    let factorial = 1;
    for (let i=1; i <= numero; i++) {
        factorial *= i; // factorial = factorial * i
    }
    document.getElementById("factorial").innerHTML = "El factorial de " + numero + " es: " + factorial;
    return factorial;
}
//Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.
function convertirDolares(dolares) {
   let dolar= document.getElementById("valorDolar").value;
   let cambio = 4.80;
    let reales = dolar * cambio;
    document.getElementById("resultadoCambio").innerHTML = "El valor en reales es: R$" + reales.toFixed(2);
    return reales;
}
//Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
//Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
//Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.