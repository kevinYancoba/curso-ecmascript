async function* fnAsync(){
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const myFnAsync = fnAsync();

myFnAsync.next().then(response => console.log(response.value));
myFnAsync.next().then(response => console.log(response.value));
myFnAsync.next().then(response => console.log(response.value));
console.log('aca termina los generators')

function* fnGenerator(){
  yield 1;  
  yield 2;  
  yield 3;  
}

console.log(fnGenerator().next().value);
console.log(fnGenerator().next().value);
console.log(fnGenerator().next().value);
