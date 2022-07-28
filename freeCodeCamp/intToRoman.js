function convertToRoman(num) {
  const roman = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let res = "",
    quo;
  for (let r in roman) {
    quo = ~~(num / roman[r][0]);
    num = num % roman[r][0];
    for (let i = 0; i < quo; i++) {
      res += roman[r][1];
    }
  }
  return res;
}

console.log(convertToRoman(4000));
