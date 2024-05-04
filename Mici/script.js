// Function to append value to display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to calculate result
function calculate() {
    try {
        var expression = document.getElementById('display').value;
        var result = eval(expression); // Using eval for simplicity, but it's not recommended for production use
        if (isNaN(result) || !isFinite(result)) {
            throw "Invalid expression";
        }
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = "Error";
    }
}

// Function to handle decimal point
function handleDecimal() {
    var displayValue = document.getElementById('display').value;
    // Check if the display already contains a decimal point
    if (displayValue.indexOf('.') === -1) {
        document.getElementById('display').value += '.';
    }
}

// Function to highlight selected operation
function selectOperation(operation) {
    var display = document.getElementById('display');
    // Highlight the selected operation
    display.value += ' ' + operation + ' ';
}

// Function to remove last character from display
function removeLastCharacter() {
    var displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.slice(0, -1);
}
