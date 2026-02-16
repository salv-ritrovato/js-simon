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

// Inserisco il contenuto dell'array all'interno di nList attraverso innerHTML
// Utilizzo il metodo .join per aggiungere uno spazio fra ogni numeri per una questione di miglior visibilità
nList.innerHTML = `<li>${numbersArray.join(' ')}</li>`;
                  
