
function userName(nombre, apellido, edad, id){
    return{
        nombre,
        apellido,
        edad,
        id
    }
}

console.log(userName('kevin','yancoba', 22, 1));

// Prototipo de una Clase

function Dog(name, age) {
    // propiedades
    this.name = name;
    this.age = age;

    // Metodos
    this.barking = function() { return `${this.name} says WOOF`}
}

const Kira = new Dog("Kira", 3)
Kira.barking();
