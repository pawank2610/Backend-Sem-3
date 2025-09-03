

const logger = require("./modules/logger");


const [, , operation, arg1, arg2] = process.argv;

function calculate(op, a, b) {
  const num1 = Number(a);
  const num2 = Number(b);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    throw new Error("Both arguments must be valid numbers");
  }

  switch (op) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      if (num2 === 0) {
        throw new Error("Division by zero is not allowed");
      }
      return num1 / num2;
    default:
      throw new Error(`Invalid operation "${op}". Use add, subtract, multiply, or divide.`);
  }
}


if (!operation || arg1 === undefined || arg2 === undefined) {
  logger.error("Missing arguments.");
  console.log("Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>");
  console.log("Example: node calculator.js add 10 5");
  process.exit(1);
}

try {
  logger.info(`Performing "${operation}" on ${arg1} and ${arg2}...`);
  const result = calculate(operation, arg1, arg2);
  console.log(`Result: ${result}`);
  logger.success("Calculation completed successfully.");
} catch (err) {
  logger.error(err.message);
  process.exit(1);
}
