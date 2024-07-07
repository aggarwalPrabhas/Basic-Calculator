const defaultResult = 0;
let currentResult = defaultResult;
const logEnteries = [];

// Helper Functions

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calDescription);
}

function writeToLog(
  operationIdentifier,
  preResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    preResult: preResult,
    number: operationNumber,
    result: newResult,
  };

  logEnteries.push(logEntry);
  console.log(logEntry);
}

function calculationResult(calculationType) {
  if (
    calculationType !== "ADD" &&
    calculationType !== "SUBTRACTION" &&
    calculationType !== "MULTIPLY" &&
    calculationType !== "DIVIDE"
  ) {
    return;
  }

  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACTION") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

// Caller Functions

function add() {
  calculationResult("ADD");
}

function subtract() {
  calculationResult("SUBTRACTION");
}

function multiply() {
  calculationResult("MULTIPLY");
}

function divide() {
  calculationResult("DIVIDE");
}

// Event Listeners

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
