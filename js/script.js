//nome
let userName = prompt('Come ti chiami?');
console.log(userName);
//cognome
let userSurname = prompt('Qual è il tuo cognome?');
console.log(userSurname);
//colore
let color = prompt('Qual è il tuo colore preferito?');
console.log(color)
//msg
let msg = `La tua password è: ${userName}${userSurname}${color}23`
console.log(msg)
//stampo msg in html
document.getElementById('password').innerHTML = msg