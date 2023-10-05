const NUMERIC_REGEXP = /[-]{0,1}[\d]*[.]{0,1}[\d]+/g;

let result = document.getElementById("result");
let currentInput = "";

function appendToResult(value) {
  currentInput += value;
  result.textContent = currentInput;
}

function clearResult() {
  currentInput = "";
  result.textContent = "0";
}

function calculateResult() {
  try {
    currentInput = currentInput.replace("^", "**");

    if (currentInput.includes("+") && currentInput.split("+")[1][0] === "0") {
      throw new Error("Não é possível realizar adições por 0");
    }
    if (currentInput.includes("/") && currentInput.split("/")[1][0] === "0") {
      throw new Error("Não é possível realizar divisões por 0");
    }

    currentInput = eval(currentInput);
    result.textContent = currentInput;
  } catch (error) {
    result.textContent = error.message ?? "Erro";
  }
}

function calculateFactorial() {
  try {
    const num = parseInt(currentInput);
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    currentInput = factorial;
    result.textContent = currentInput;
  } catch (error) {
    result.textContent = "Erro";
  }
}

function calculateSquareRoot() {
  try {
    currentInput = Math.sqrt(eval(currentInput));
    result.textContent = currentInput;
  } catch (error) {
    result.textContent = "Erro";
  }
}

function calculateOcta() {
  let bin = [];
  let num = String(eval(currentInput));

  bin = num.split("").map((char) => char.charCodeAt(0));
  bin = bin.map((uniCode) => {
    let val = Math.trunc(uniCode / 8);
    let res = uniCode % 8;

    return String(val).concat(res).padStart(4, "0");
  });

  result.textContent = bin.join(" ");
}

function calculateBinary() {
  let num = String(eval(currentInput));
  if (num <= 0) {
    result.textContent = "0";
    return;
  }

  var bin = [];
  while (num > 0) {
    bin.unshift(num % 2);
    num >>= 1;
  }

  result.textContent = bin.join("");
}

function calculateHex() {
  let num = Number(eval(currentInput));

  const digits = "0123456789abcdef";

  let val = "";

  while (num > 0) {
    val = digits[num % 16] + val;
    num = num >> 4;
  }

  result.textContent = val;
}
