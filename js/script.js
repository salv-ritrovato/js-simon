// Creo una lista (array) vuota nella quale contenere i 5 numeri casuali
const numbersArray = [];
console.log(numbersArray);

// For cycle per generare 5 numeri casuali da pushare nell'array vuoto
for (let i = 0; i < 5; i++) {
    const randomNumbers = Math.floor(Math.random() * 10) + 1;
    numbersArray.push(randomNumbers)

}

// Prelevo i seguenti nodi dal DOM
const cDown = document.getElementById('countdown')
const nList = document.getElementById('numbers-list')
const aForm = document.getElementById('answers-form')
// Creo una variabile let che sarà il nostro countdown per i secondi
let counter = 30;

// Inserisco il contenuto dell'array all'interno di nList attraverso innerHTML
// Utilizzo il metodo .join per aggiungere uno spazio fra ogni numeri per una questione di miglior visibilità
nList.innerHTML = `<li>${numbersArray.join(' ')}</li>`;

// Creo una funzione setInterval per far scendere il countdown da 30 ad 1 ogni 1 sec e far apparire i form/sparire i numeri
const timerStop = setInterval(function () {
    if (counter === 0) {
        clearInterval(timerStop)
        nList.classList.add('d-none');
        aForm.classList.remove('d-none');
    } else {
        counter--;
        cDown.innerHTML = counter;
    }
}, 1000)

// Aggancio aForm ad un eventListener per intercettare i dati inseriti dall'utente
// Prevengo il ricaricamento dalla pagina che significherebbe perdere i dati inseriti dall'utente
aForm.addEventListener('submit', function (e) {
    e.preventDefault();
})

// Prelevo gli input inseriti dall'utente
// Creo una variabile const con array vuoto dove inserire i numeri dell'utente
const userInputs = document.querySelectorAll('.form-control')
const userNumbers = [];

// For cycle per inserire gli input dell'utente all'interno dell'array vuoto in modo tale da poterli confrontare
for (let i = 0; i < userInputs.length; i++) {
    const inputValue = Number(userInputs[i].value);
    userNumbers.push(inputValue);
}
