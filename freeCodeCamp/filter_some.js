/*刪除arr與rm重複的元素 */
function destroyer(arr, ...rm) {
    return arr.filter(a => rm.some(b => a === b) === false)
}
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3))
