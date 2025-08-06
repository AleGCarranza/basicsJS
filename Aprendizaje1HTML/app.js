let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafío';

function abrirConsola(){
    alert('Abriendo consola...');
};

function  preguntarCiudad(){
    let ciudad=prompt('Nombra alguna ciudad de tu país');
    alert('Estuve en  ' + ciudad + ' y me acorde de ti');
};

function amarJS(){
    alert('¡JavaScript es increíble!');
};

function sumar(){
    let a = parseInt(prompt('Ingresa el primer número:'));
    let b = parseInt(prompt('Ingresa el segundo número:'));
    let resultado = a + b;
    alert('La suma es: ' + resultado);
};
