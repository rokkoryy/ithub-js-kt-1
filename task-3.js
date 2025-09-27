// Задача №3

// (состоит из двух пунктов)

// 1) В программе объявлены три переменные — a, b и sign.

// В переменных a и b хранятся числовые значения. В переменную sign записано строковое значение одного из математических операторов +, -, /, *. Напишите простой калькулятор, который в зависимости от значения переменной sign будет совершать соответствующие математические операции с переменными a и b.

// Результат необходимо выводить в консоль. Гарантируется, что переменная b не равна нулю.

// Примеры значений переменных:

// let a = 2

// let b = 6

// let sign = "*"

// Пример результата:

// 12

// 2) Необходимо доработать решение из задания 3.1 В дополнение к заданию 3.1 необходимо правильно обработать случай деления на 0. При попытке поделить на 0 программа должна выводить в консоль сообщение: "Делить на 0 нельзя!".

// Пример значений переменных:

// let a = 2

// let b = 0

// let sign = "/"

// Пример результата:

// Делить на 0 нельзя!

function getUserImput() {
  const a = +prompt("Число A");
  const b = +prompt("Число B");
  const sign = prompt("Операция (*/+-)");
}

function validateImput(number1, number2, operationSing) {
  if (!Number.isFinite(number1)) {
    throw new Error("Число А указано неправильно");
  }

  if (!Number.isFinite(number2)) {
    throw new Error("Число B указано неправильно");
  }

  if (
    operationSing !== "*" &&
    operationSing !== "/" &&
    operationSing !== "+" &&
    operationSingß !== "-"
  ) {
    throw new Error("Математическая операция указана неправильно");
  }

  if (operationSing === "/" && number2 === 0) {
    throw new Error("Деление на ноль");
  }
}

function calculateResult() {
  let result;

  switch (sign) {
    case "*":
      result = a * b;
      break;
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "/":
      result = a / b;
      break;
  }

  console.log(result);
}
