/*選出數組中所有不重複的元素，依出現先後排序 */

function uniteUnique(...arr) {
    let ans = [];
    arr.forEach(a => {
        for (let i = 0; i < a.length; i++) {
            if (ans.some(b => b === a[i]) === false) ans.push(a[i])
        }
    })
    return ans;
}

/* 另一種方法 */
function uniteUnique(...arr) {
    return [...new Set(arr.flat())]
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));