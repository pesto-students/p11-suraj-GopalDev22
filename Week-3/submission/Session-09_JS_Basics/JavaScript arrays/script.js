const divideArray = (arr) => {
  const sortArr = arr.sort((a, b) => a - b);
  let oddNum = [];
  let evenNum = [];
  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] % 2) {
      oddNum.push(sortArr[i]);
    } else {
      evenNum.push(sortArr[i]);
    }
  }
  console.log("Even Number:");
  if (evenNum.length === 0) console.log("none");
  for (let i = 0; i < evenNum.length; i++) {
    if (evenNum.length !== 0) {
      console.log(evenNum[i]);
    } else {
      console.log("no even number");
    }
  }
  console.log("Odd Number:");
  if (oddNum.length === 0) console.log("none");
  for (let i = 0; i < oddNum.length; i++) {
    if (oddNum.length !== 0) {
      console.log(oddNum[i]);
    }
  }
};
divideArray([1, 4, 5, 3, 2, 8]);
