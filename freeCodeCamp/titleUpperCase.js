/*標題單字首字母大寫 */

function titleCase(str) {
    let arr = str.split(/\s/)
    let ans = '';
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j == 0) {
                ans += arr[i][j].toUpperCase();
            } else {
                ans += arr[i][j].toLowerCase();
            }
        }
        if (i < arr.length - 1) {
            ans += ' ';
        }
    }
    return ans;
}

titleCase("I'm a little tea pot");

