function steamrollArray(arr) {
  let ans = []
  let arr2 = arr
    .toString()
    .split(',')
  arr2.forEach(a => {
    if (a !== '') {
      ans.push(a)
    }
  })
  return ans.map(a => {
    return a === '[object Object]' ? {} : isNaN(a) ? a : parseInt(a)
  })
}

console.log(steamrollArray([[["a"]], [["b"]]]));