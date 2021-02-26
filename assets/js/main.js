// INPUT
// nome
var nome = prompt("inserisci il tuo nome")
// cognome
var cognome = prompt("inserisci il tuo cognome")
// colore
var colore = prompt("inserisci il tuo colore preferito")

//HTML
// nome
document.getElementById("nome").innerHTML = nome
// cognome
document.getElementById("cognome").innerHTML = cognome
// colore
document.getElementById("colore").innerHTML = colore

// password
document.getElementById("stamp").innerHTML = nome + cognome + colore + "2021"
