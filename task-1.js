// Задача №1

// В программе объявлены две переменные — price и range. Переменная range может принимать одно из трех строковых значений — month/day/week. Переменная price хранит в себе числовое значение. Необходимо написать программу, которая формирует строку с использованием данных переменных по следующему шаблону:

// <значение price> Р в <эквивалент значения range на русском языке>

// Пример значений переменных:

// let price = 10000

// let range = "day"

// Пример результата:

// 10000 Р в день

let price = +prompt("Введите доход");
if (Number.isFinite(price)) {
  throw new Error("Неправильно указан доход");
}

let range = prompt("За какое время (day/week/month)");
if (range !== "day" && range !== "week" && range !== "month") {
  throw new Error("Время указано неправильно");
}

price = price.toLocaleString("ru", {
  style: "currency",
  currency: "rub",
});

if (range === "day") range = "День";
else if (range === "week") range = "Неделю";
else range = "месяц";

console.log(`${price} в ${range}`);
