
class user{

    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad
    }

    // metodos
    saludo(){
        console.log(`Hola ${this.nombre}`);
    }

    set(u){
        this.edad = u;
    }
    get(){
        return this.edad;
    }
}

const kevin = new user('keivn', 22);

kevin.saludo();
console.log(kevin.edad);
console.log(kevin.edad = 23);

