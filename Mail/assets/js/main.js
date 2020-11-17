// Chiedere all'utente la sua email
var btnEmail = document.getElementById("email_button");

btnEmail.addEventListener("click", function () {
  var emailInput = document.getElementById("email");
  var email = emailInput.value;
  console.log(email);
  // Lista email
  var emailList = [
    "andrea.romani@gmail.com","veronica.rossi@gmail.com","luca.affreschi@yahoo.com","mirko.rinelli@gmail.com","greta.ronchi@live.it","ettore.bertucci@libero.it","filippofalchi@gmail.com"
  ]

  // Ricerca email
  var find = false;
  for (var i=0; i < emailList.length; i++) {
    //console.log(emailList[i]);
    if (emailList[i] == email) {
      find = true;
    }
  }

  // Conferma email
  if (find) {
    document.getElementById("email_cnfrm").innerHTML = "La tua email è stata confermata";
  } else {
    document.getElementById("email_cnfrm").innerHTML = "La tua mail non è valida";
  }
})
