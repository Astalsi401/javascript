function checkCashRegister(price, cash, cid) {
  let change = cash - price,
    unit = {
      "ONE HUNDRED": 100,
      TWENTY: 20,
      TEN: 10,
      FIVE: 5,
      ONE: 1,
      QUARTER: 0.25,
      DIME: 0.1,
      NICKEL: 0.05,
      PENNY: 0.01,
    },
    cid_n = JSON.parse(JSON.stringify(cid)).reverse(),
    res = { status: "OPEN", change: [] };
  cid_n.forEach((c) => {
    if (change != 0) {
      let cashName = c[0],
        cashVal = c[1];
      let left = parseInt(change / unit[cashName]);
      let changePart = left * unit[cashName];
      if (changePart > cashVal) changePart = cashVal;
      if (left != 0) res.change.push([cashName, changePart]);
      c[1] -= changePart;
      change = (change - changePart).toFixed(2);
    }
  });
  if (change != 0) {
    res.status = "INSUFFICIENT_FUNDS";
    res.change = [];
  } else if (cid_n.every((c) => c[1] == 0)) {
    res.status = "CLOSED";
    res.change = cid;
  }
  return res;
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
