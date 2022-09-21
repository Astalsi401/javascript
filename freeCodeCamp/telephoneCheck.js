function telephoneCheck(str) {
  let re = /^(1[\-\s]?)?((\(|（)\d{3}(\)|）)|\d{3})[\-\s]?\d{3}[\-\s]?\d{4}$/g;
  return re.test(str);
}

console.log(telephoneCheck("2757622"));
console.log(telephoneCheck("1 (555) 555 5555"));
console.log(telephoneCheck("1 (555)-555-5555"));
