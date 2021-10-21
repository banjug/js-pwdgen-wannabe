// chiede all'utente il nome

let userName = prompt("Inserisci il tuo nome");

// chiede all'utente il cognome

let userSurname = prompt("Inserisci il tuo cognome");

// chiede all'utente il colore preferito

let userColor = prompt("Inserisci il tuo colore preferito");

// unisce le variabili

let userPassword = userName + userSurname + userColor + "21";

// debug calcolo
console.log(userPassword);

// mostra il risultato all'utente

document.getElementById('my_container').innerHTML = `La tua password &egrave; ${userPassword}`;


// alternativa a creare la variabile userPassword

document.getElementById('my_container').innerHTML = `La tua password &egrave; ${userName}${userSurname}${userColor}21`;