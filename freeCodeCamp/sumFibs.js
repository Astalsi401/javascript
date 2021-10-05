/*斐波那契數列中的基數和*/
function sumFibs(num) {
    let fibs = [1, 1];
    for (let i = fibs.length - 1; fibs[i] < num; i++) {
        fibs.push(fibs[i] + fibs[i - 1]);
    }
    if (fibs[fibs.length - 1] > num) fibs.pop();
    return fibs
        .filter(a => a % 2 === 1)
        .reduce((x, y) => x + y)
}

console.log(sumFibs(75025));