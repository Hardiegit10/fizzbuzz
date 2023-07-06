function playFizzBuzz() {
    var numberInput = document.getElementById("number");
    var outputDiv = document.getElementById("output");
    var number = parseInt(numberInput.value);
    var output = "";
  
    for (var i = 1; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        output += "FizzBuzz ";
      } else if (i % 3 === 0) {
        output += "Fizz ";
      } else if (i % 5 === 0) {
        output += "Buzz ";
      } else {
        output += i + " ";
      }
    }
  
    outputDiv.textContent = output.trim();
}  