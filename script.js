lelet output = document.getElementById("output");

function addChar(char) {
  output.textContent += char;
}

function cutInput() {
  let currentInput = output.textContent;
  let newInput = currentInput.slice(0, -1);
  output.textContent = newInput;
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
