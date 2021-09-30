function sumAll(arr) {
    let ans = [].concat(arr).sort((a, b) => a === b ? 0 : a > b ? 1 : -1);
    let sum = 0;
    for (let i = ans[0]; i <= ans[1]; i++) {
        sum += i;
    }
    return sum
}
var a = [4, 1]
console.log(sumAll(a), a);