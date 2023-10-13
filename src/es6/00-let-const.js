//var 
var fruit = 'apple';
fruit = 'banana'; //admite reasignacion
console.log(fruit);

//let
let fruit2 = 'kiwi';
fruit2 = 'piña'; //admite reasignacion
console.log(fruit2);

//const
const fruit3 = 'melon';
fruit3 = 'sandilla'; //No permite reasignacion
consol.log(fruit3);


const fruits = () => {
    if(true){
        var fruit1 = "aguacate"; //global scope
        let fruit2 = 'banana'; //block scope
        const fruit3 = 'sandilla'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();




