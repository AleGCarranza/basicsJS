// Lista donde se guardarán los amigos
let friends = [];

// Referencias a los elementos del DOM
const nombre = document.getElementById("amigo");
const lista = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Función para agregar un amigo
function agregarAmigo() {
    const valor = nombre.value.trim();
    if (valor) {
        // Agregar a la lista
        friends.push(valor);

        // Mostrar en pantalla
        const li = document.createElement("li");
        li.textContent = valor;
        lista.appendChild(li);

        // Limpiar input
        nombre.value = "";

        console.log("Lista actual:", friends);
    } else {
        alert("⚠️ Por favor ingresa un nombre válido");
    }
}

// Función para sortear un amigo
function sortearAmigo() {
    if (friends.length === 0) {
        alert("⚠️ Debes agregar al menos un amigo antes de sortear");
        return;
    }

    // Elegir un índice aleatorio
    const randomIndex = Math.floor(Math.random() * friends.length);
    const amigoSecreto = friends[randomIndex];

    // Limpiar resultados anteriores
    resultado.innerHTML = "";

    // Mostrar resultado en pantalla
    const li = document.createElement("li");
    li.textContent = `🎉 Tu amigo secreto es: ${amigoSecreto}`;
    resultado.appendChild(li);

    console.log("Amigo secreto sorteado:", amigoSecreto);
}
