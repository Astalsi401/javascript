const tr = $("#QCPopUpMessageModal tr.warning");
const dates = tr
  .map(function () {
    return new Date($("td", this).eq(2).text());
  })
  .get();
const max = Math.max.apply(null, dates);
const res = tr
  .filter(function () {
    return new Date($("td", this).eq(2).text()).valueOf() == max;
  })
  .map(function () {
    return $("td", this).eq(0).text();
  })[0];

console.log(res);

console.log($("tr.warning").last().find("td").eq(0).text());
