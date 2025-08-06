let numeroSecreto = generarNumeroSecreto();
console.log("Número secreto:", numeroSecreto);

function asignarTexto(elemento, texto){
let  elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;;
}

function intentoDeUsuario(){
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log("Número del usuario:", numeroUsuario);
    console.log("Número secreto:", numeroSecreto);
    console.log ( numeroSecreto === numeroUsuario);
    return;
}

function generarNumeroSecreto (){
    return Math.floor(Math.random()* 10) + 1;
}

asignarTexto("h1", "¡Bienvenido al juego de adivinanza!");
asignarTexto("p", "Adivina el número secreto entre 1 y 10. Tienes 3 intentos.");