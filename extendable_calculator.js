// Initial Solution
// function Calculator() {
//   this.operators = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b,
//   }; // Create an container to store the operator and its implementation

//   this.calculate = function (str) {
//     let items = str.split(" ");

//     // Get the operands and operator
//     let firstOperand = +items[0];
//     let operator = items[1];
//     let secondOperand = +items[2];

//     // Access the lambda function and also call it
//     return this.operators[operator](firstOperand, secondOperand);
//   };

//   this.addMethod = function (name, func) {
//     this.operators[name] = func;
//   };
// }

// Improve Solution
function Calculator() {
  this.operators = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };

  this.calculate = function (str) {
    let items = str.split();

    if (items.length !== 3) {
      throw new Error("Input must be in the format: number operator number");
    }

    let [firstOperand, operator, secondOperand] = items;
    const a = Number(firstOperand);
    const b = Number(secondOperand);

    if (!this.operators.hasOwnProperty(operator)) {
      throw new Error(`Unknown operator: ${operator}`);
    }

    if (isNaN(a) || isNaN(b)) {
      throw new Error("Operands must be valid numbers");
    }

    return this.operators[operator](firstOperand, secondOperand);
  };

  this.addMethod = function (name, func) {
    if (typeof func !== "function") {
      throw new Error("Second argument must be a function");
    }

    this.operators[name] = func;
  };
}

// Test Case
let calc = new Calculator();
let x = calc.calculate("3 + 7"); // 10
x;
calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

let result = calc.calculate("2 ** 3");
result; // 8
