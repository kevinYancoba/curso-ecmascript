class user{

  // construnctor de clase
  constructor (nombre, edad){
      this.nombre = nombre;
      this.edad = edad
  }

  // metodos

  // usamos '#' para hacer metodos privados
  #saludo(){
      console.log(`Hola ${this.nombre}`);
  }
  // setter and getters
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