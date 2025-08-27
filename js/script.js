//Chiedere età e km da percorrere
const age = parseInt(prompt("Quanti anni hai?"));
const distance = parseInt(prompt("Quanti chilometri vuoi percorrere?"));

//prezzo normale del biglietto
let price = (distance * 0.21);

//Prezzi scontati
 if (age < 18) {
     price = price * 0.80
 } if (age > 65) {
     price = price * 0.60
 }

console.log(price.toFixed(2))
 
 