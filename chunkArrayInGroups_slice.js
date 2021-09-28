/*分割數組 */

function chunkArrayInGroups(arr, size) {
    let ans = [];
    for (let i = 0; i < arr.length; i += size) {
        ans.push(arr.slice(i, i + size));
    }
    return ans;
}


console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));