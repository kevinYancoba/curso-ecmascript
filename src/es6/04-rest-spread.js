
// desestructuracion de arrays

let fruits = ['apple', 'orange', 'kiwi'];
let [apple,orrange, kiwi] = fruits;

console.log(apple,orrange, kiwi);

// desestructuracion de objects
let user = {name: 'keivn', edad: 22};
let {name, edad} = user;


console.log(name, edad);
console.log(user.edad, user.name);

// spread operator

let person = {nombre:'kevin', ege: 18,};
let pais = 'guatemala';
console.log({...person, pais});


//rest

function suma(num, ...values){
    console.log(num + values[0]);
    console.log(values);
}

suma(5,20,3,6,10,9);

// reto
function resolucion(
    json1 = {name: "Mr. Michi",food: "Pescado"},
    json2 = {age: 12,color: "Blanco"}){
        let join = {...json1, ...json2};
        return join;
}
console.log(resolucion())




    

