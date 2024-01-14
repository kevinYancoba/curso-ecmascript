
const fnAsync = ()=>{
  return new Promise((resolve, reject) => {
    (true)
    ?setTimeout(()=>{
      resolve('aca se ejecuto Async');
    }, 2000)
    : reject(new Error('error'));
  })
}

const miFnAsync = async ()=>{
  const fnAsyncImp = await fnAsync();
  console.log(fnAsyncImp);
}

console.log('aca inicia el bucle');

miFnAsync();

console.log('aca termina el ciclo')