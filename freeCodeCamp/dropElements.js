function dropElements(arr, func) {
  let a = arr.length
  for (let i = 0; i < a; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr
}

console.log(dropElements([1, 2, 3, 4], function (n) { return n > 5; }));