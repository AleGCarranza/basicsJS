let numeroSecreto;
let intentos;
let listaNumeros = [];
let numeroGeneradoMaximo = 10;  

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;;
}

function intentoDeUsuario() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroUsuario === numeroSecreto) {
        asignarTexto("p", `¡Felicidades! Adivinaste el número secreto en ${intentos} ${(intentos === 1 ? "vez" : "veces")}`)
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else if (numeroUsuario > numeroSecreto) {
        asignarTexto("p", "El número secreto es menor. Inténtalo de nuevo.");
    } else {
        asignarTexto("p", "El número secreto es mayor. Inténtalo de nuevo.");
    }

    intentos++;
    limpiarInput();

    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) +1 ;

    console.log(numeroGenerado);
    console.log(listaNumeros);

    if ( listaNumeros.lentgh == numeroMaximo){
        asignarTexto("p", "Todos los números posibles han sido generados. Reinicia el juego.");
        document.getElementById("reiniciar").removeAttribute("disabled");
        return;
    }else{
 if (listaNumeros.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumeros.push(numeroGenerado);
        return numeroGenerado;  
    }
    }
   
}

function limpiarInput() {
    document.querySelector("#valorUsuario").value = "";

}

function condicionesIniciales() {
    asignarTexto("h1", "¡Bienvenido al juego de adivinanza!");
    asignarTexto("p", `Adivina el número secreto entre 1 y ${numeroMaximo}. Tienes 3 intentos.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}
function reiniciarJuego() {
    limpiarInput();
    condicionesIniciales();
}

condicionesIniciales();

