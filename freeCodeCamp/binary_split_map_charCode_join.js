function binaryAgent(str) {
  return str
    .split(' ') /* 以空格切分為數組*/
    .map(a => {  /*轉換為十進制 */
      let sum = 0;
      let j = 0;
      for (let i = a.length; i > 0; i--) {
        sum += parseInt(a[j]) * Math.pow(2, i)
        j++
      }
      sum = sum / 2
      return String.fromCharCode(sum) /*十進制轉為utf8文字 */
    })
    .join('') /*數組轉為單一字串 */
}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));