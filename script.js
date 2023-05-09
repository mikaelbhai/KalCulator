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
  }
}
