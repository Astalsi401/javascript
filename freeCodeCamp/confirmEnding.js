/*
單詞str是否以target結尾
*/

let strTail = '';
let targetC = '';
function confirmEnding(str, target) {
    for (let i = str.length - target.length; i < str.length; i++) {
        strTail += str[i];
    }
    for (let j = 0; j < target.length; j++) {
        targetC += target[j];
    }
    if (strTail === targetC) {
        return true;
    } else {
        return false;
    }
}

console.log(confirmEnding("Bastian", "ian"));