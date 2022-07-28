function rot13(str) {
  str = str.toUpperCase();
  let res = "",
    num;
  for (let i in str) {
    num = str[i].charCodeAt() - 65;
    if ((num < 0) | (num > 26)) {
      res += str[i];
    } else {
      num = num - 13;
      if (num < 0) {
        num = 26 - Math.abs(num);
      } else if (num >= 26) {
        num = num - 26;
      }
      res += String.fromCharCode(num + 65);
    }
  }
  return res;
}

function rot13_n(str) {
  return str.replace(/[A-Z]/g, (L) => String.fromCharCode((L.charCodeAt() % 26) + 65));
}

console.log(rot13_n("SERR PBQR PNZC"));
