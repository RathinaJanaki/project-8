function calculate(operation) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter valid numbers.";
  } else {
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
        break;
    }
  }

  document.getElementById('result').textContent = `Result: ${result}`;
}

function square() {
  const num = parseFloat(document.getElementById('num1').value);
  if (isNaN(num)) {
    document.getElementById('result').textContent = "Enter a number to square.";
  } else {
    document.getElementById('result').textContent = `Square: ${num ** 2}`;
  }
}

function cube() {
  const num = parseFloat(document.getElementById('num1').value);
  if (isNaN(num)) {
    document.getElementById('result').textContent = "Enter a number to cube.";
  } else {
    document.getElementById('result').textContent = `Cube: ${num ** 3}`;
  }
}
