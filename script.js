let output = document.getElementById("output");

function addChar(char) {
  output.textContent += char;
}

function clearOutput() {
  output.textContent = "";
}

function equals() {
  try {
    output.textContent = eval(output.textContent);
  } catch (error) {
    output.textContent = "Error";
    setTimeout(clearOutput, 1000); // Clear output after 2 seconds
  }
}
