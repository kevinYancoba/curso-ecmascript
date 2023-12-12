
import hello from "./module.js";
hello();


import  {getData}  from "./module.js";
function solution() {
  return getData().then(movies => console.log(movies));
}

solution();