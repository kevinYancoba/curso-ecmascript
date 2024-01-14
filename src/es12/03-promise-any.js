const firstPromise =  new Promise((resolve, reject)=> reject('reject'));
const secundPormise =  new Promise((resolve, reject)=> resolve('resolve'));
const theerdPromise = new Promise((resolve, reject) => resolve('resolve'));

Promise.any([firstPromise, secundPormise, theerdPromise])
.then(resolve => console.log(resolve));