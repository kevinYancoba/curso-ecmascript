const firstPromise =  new Promise((resolve, reject)=> reject('reject'));
const secundPormise =  new Promise((resolve, reject)=> resolve('resolve'));
const theerdPromise = new Promise((resolve, reject) => resolve('resolve'));

// estatus de las promesas
Promise.allSettled([firstPromise, secundPormise, theerdPromise])
.then(response => console.log(response));