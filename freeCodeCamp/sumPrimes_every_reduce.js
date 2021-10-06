/*求質數和 */
function sumPrimes(num) {
    let ans = [];
    for (let j = 2; j < num; j++) {
        if (ans.every(a => j % a !== 0)) ans.push(j)
    }
    return ans.reduce((sum, b) => sum + b)
}

console.log(sumPrimes(10));