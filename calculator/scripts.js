// Get the result input field
const resultInput = document.getElementById("result");

// Function to append values to the display
function appendValue(value) {
  resultInput.value += value;
}

// Function to clear the display
function clearResult() {
  resultInput.value = "";
}

// Function to calculate the result
function calculate() {
  try {
    resultInput.value = eval(resultInput.value); // Evaluate the expression
  } catch (error) {
    alert("Invalid Calculation!");
    clearResult();
  }
}
