//Chiedere età e km da percorrere
const age = parseInt(prompt("Quanti anni hai?"));
const distance = parseInt(prompt("Quanti chilometri vuoi percorrere?"));

//prezzo normale del biglietto
let price = (distance * 0.21);

//Prezzi scontati
 if (age < 18) {
     finalPrice = price * 0.80
 } if (age > 65) {
     finalPrice = price * 0.60
 } else {
    finalPrice = price
 }

console.log(finalPrice.toFixed(2))
 
 