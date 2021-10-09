/*找出最小公倍數 */
function smallestCommons(arr) {
  let ans = []
  arr.sort((a, b) => a - b)
  for (let i = arr[0]; i <= arr[1]; i++) {
    ans.push(i)
  }
  for (let j = ans[0]; j < ans.reduce((c, d) => c * d); j++) {
    if (ans.every(c => j % c === 0)) return j
  }
}

console.log(smallestCommons([1, 5]));