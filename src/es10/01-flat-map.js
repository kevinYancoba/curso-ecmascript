let array = [1,2,3,4,[1,2,3,[1,2,3,4]]];

console.log(array.flat(6));

// array con flat map 
let array2 = [1,2,3,4,5,6];

console.log(array2.flatMap(v => v*2)); // me dievuelve un array multiplicando cada valor por 2.