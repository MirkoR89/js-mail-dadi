// Chiedere all'utente la sua email
var btnEmail = document.getElementById("email_button");

btnEmail.addEventListener("click", function () {
  var emailInput = document.getElementById("email");
  var email = emailInput.value;
  console.log(emailInput);
})
