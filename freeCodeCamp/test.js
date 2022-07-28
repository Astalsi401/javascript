function checkCashRegister(price, cash, cid) {
  let change = cash - price,
    total = 0,
    table = [
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100],
    ];
  for (let i in cid) {
    total += cid[i][1];
  }
  if (total < cash) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (total == cash) {
    return { status: "CLOSED", change: [] };
  } else {
    return { status: "OPEN", change: [] };
  }
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
