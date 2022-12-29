let arr1 = [3, 5, 9];
let arr2 = [1, 2, "no"];

function stackAllElements(a, b) {
  let newArr = [];
  for (let j = 0; j < a.length; j++) {
    if (typeof arr1[j] !== "number") {
      return null;
    } else {
      newArr.push(a[j]);
    }
  }

  for (let m = 0; m < b.length; m++) {
    if (typeof arr2[m] !== "number") {
      return null;
    } else {
      newArr.push(b[m]);
    }
  }

  return newArr;
}

console.log(stackAllElements(arr1, arr2));
