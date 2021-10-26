function addTogether() {
  const [a, b] = arguments;
  return typeof (a) !== "number" ? undefined : b === undefined ? (b) =>
    addTogether(a, b) : typeof (b) !== "number" ? undefined : a + b;
}

console.log(addTogether(2));