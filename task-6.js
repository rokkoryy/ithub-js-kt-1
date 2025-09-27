// //
// дано слово

// вывести его буквы лесенкой

// Hello ->

// H
// He
// Hel
// Hell
// Hello

const word = "Hello";
let ladder = "";
let wordCopy = "";

for (let ix = 0; ix < word.length; ix++) {
  wordCopy += word[ix];
  ladder += "\n" + wordCopy;
}

console.log(ladder);
