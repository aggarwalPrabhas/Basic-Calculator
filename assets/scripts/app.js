const ADD = "ADD";
const SUBTRACT = "SUBTRACT";
const MULTIPLY = "MULTIPLY";
const DIVIDE = "DIVIDE";

const defaultResult = 0;
let currentResult = defaultResult;
const logEnteries = [];

// Helper Functions

// -------User Input----------

function getUserNumberInput() {
  return parseInt(userInput.value);
}

// ----------Calculation description--------

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calDescription);
}

// ---------Write to Log--------

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
    calculationType !== ADD &&
    calculationType !== SUBTRACT &&
    calculationType !== MULTIPLY &&
    calculationType !== DIVIDE
  ) {
    return;
  }

  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === ADD) {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === SUBTRACT) {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === MULTIPLY) {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

// Event Listeners

addBtn.addEventListener("click", calculationResult.bind(this, ADD));
subtractBtn.addEventListener("click", calculationResult.bind(this, SUBTRACT));
multiplyBtn.addEventListener("click", calculationResult.bind(this, MULTIPLY));
divideBtn.addEventListener("click", calculationResult.bind(this, DIVIDE));
