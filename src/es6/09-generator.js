function* nombres(array){
    for (let iterator of array) {
         yield iterator
    }
}

const iterate = nombres(['kevin', 'sonia', 'candy', 'bertha']);
console.log(iterate.next().value);
console.log(iterate.next().value);
console.log(iterate.next().value);


function* getId(){
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const idLength = 4;

  while(true){ // => ciclo infinito
    let id = '';
    for(let i = 0; i < idLength; i++){
      const random = Math.floor(Math.random() * characters.length);
      id += characters[random];
    }
    yield id.toUpperCase();
  }
}
  

const generate = getId();
console.log(generate.next().value);
console.log(generate.next().value);
console.log(generate.next().value);
