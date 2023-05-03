//Closure

function counterFun() {
  let counter = 1;
  function innerCoutnerFun() {
    let count = counter++;
    return count;
  }

  return innerCoutnerFun;
}

let firstCounter = counterFun();
function firstValue() {
  array = [];
  for (let i = 0; i < 5; i++) {
    array.push(firstCounter());
  }
  console.log(array);
}
let secondCounter = counterFun();
function secondValue() {
  array = [];
  for (let i = 0; i < 3; i++) {
    array.push(secondCounter());
  }
  console.log(array);
}

console.log("first value array = ") + firstValue();
console.log("second value array = ") + secondValue();
