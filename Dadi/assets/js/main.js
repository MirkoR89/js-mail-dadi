// Chiedere all'utente un numero da 1 a 6
var btnNumber = document.getElementById("user_number");

btnNumber.addEventListener("click", function() {
  var numberInput = document.getElementById("input_number");
  var number = Number(numberInput.value);
  console.log(number);

  // Generare un numero random da 1 a 6
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  console.log(randomNumber);

  //Stabilire chi vince in base al numero più alto
  if (randomNumber > number) {
    document.getElementById("win_lose").innerHTML = "YOU LOSE";
  } else if (randomNumber == number) {
    document.getElementById("win_lose").innerHTML = "TIE";
  } else {
    document.getElementById("win_lose").innerHTML = "YOU WIN!";
  }
})
