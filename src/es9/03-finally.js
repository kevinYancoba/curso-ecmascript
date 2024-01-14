const anotherFunction = () => {
  return new Promise((resolve, reyect) => {
    if (false) {
      resolve("se cumplio la promesa");
    } else {
      reyect("No se cumplio la promesa");
    }
  });
};

anotherFunction()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(()=> console.log('funally'))