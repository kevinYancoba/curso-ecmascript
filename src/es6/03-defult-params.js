function newAdmin(_nombre, _apellido, _edad){
    var nombre = _nombre || 'kevin';
    var apellido = _apellido || 'yancoba';
    var edad = _edad || 22;
    console.log(nombre, apellido, edad);
}

newAdmin('candy', 'quiej', 13);
newAdmin();

// Parametros por defectos
function newUser(name = 'kevin', apellio = 'perez', edad=18 ){
    console.log(name, apellio, edad);
}
newUser('juan', 'ramirez', 19);
newUser();