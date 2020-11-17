// Chiedere all'utente la sua email
var btnEmail = document.getElementById("email_button");

btnEmail.addEventListener("click", function () {
  var emailInput = document.getElementById("email");
  var email = emailInput.value;
  console.log(email);
})

// Lista email
var emailList = [
  "andrea.romani@gmail.com","veronica.rossi@gmail.com","luca.affreschi@yahoo.com","mirko.rinelli@gmail.com","greta.ronchi@live.it","ettore.bertucci@libero.it","filippofalchi@gmail.com"
]
console.log(emailList);

// Conferma email
for (var i=0; i < emailList.length; i++) {
  document.getElementById("email_cnfrm").innerHTML = "La tua email è stata confermata";

}
