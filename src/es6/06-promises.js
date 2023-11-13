
const anotherFunction = ()=>{
    return new Promise((resolve, reyect) =>{
        if (true){
            resolve('se cumplio la promesa');
        }else{
            reyect('No se cumplio la promesa')
        }
    })
}

anotherFunction()
.then(response => console.log(response))
.catch(error => console.log(error));

const datos = [{
    Nombre: 'kevin',
    edad: 22,
    id: 1
},
{
    Nombre: 'Candy',
    edad: 13,
    id: 2
},
{
    Nombre: 'Bertha',
    edad: 52,
    id: 3
}]

const resultado = ()=> { 
    return new Promise((resolve,reject) =>{

        setTimeout(()=>{
            resolve(datos)
        }, 1500);
    })
}

resultado()
.then(correcto => console.log(correcto));

