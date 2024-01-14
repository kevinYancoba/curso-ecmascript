const regex = /\b(Apple)+\b/g;
const phrase = ' este es un string que contine todo  los Apple, y muchos kiwis y muchas Apples';

for (const match of phrase.matchAll(regex)) {
  console.log(match);
}

console.log(phrase.length);
console.log();