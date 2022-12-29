function createArr(n) {
  if (typeof n !== "number") {
    return null;
  } else {
    let arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
  }
}

console.log(createArr('10'));
