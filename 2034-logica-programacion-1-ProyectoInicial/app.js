    let secretNumber = Math.floor(Math.random()*100) + 1;
    let userNumber = 0;
    let intentos = 1;
    //let tries = "vez";
    let maxTries = 50;
    while(secretNumber != userNumber){
    let userNumber =  parseInt(prompt("Adivina el número secreto entre 1 y 100"));
    console.log(userNumber);
    if(secretNumber == userNumber){
        alert(`¡Felicidades! Has adivinado el número secreto ${secretNumber} lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    } else {
    if(secretNumber < userNumber){
            alert(`El número secreto es menor que ${userNumber}`);
        } else {
            alert(`El número secreto es mayor que ${userNumber}`);
        }
        intentos++;
        if(intentos > maxTries){
            alert(`Lo siento, has agotado ${maxTries} intentos. El número secreto era ${secretNumber}`);
            break;
        }
    }

    }
