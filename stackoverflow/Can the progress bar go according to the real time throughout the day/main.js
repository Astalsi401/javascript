let pc,
  per = 0;

function checkTime() {
  var today = new Date();
  var t = [today.getHours(), today.getMinutes(), today.getSeconds()];
  pc = Math.round(((t[0] * 60 * 60 + t[1] * 60 + t[2]) / (24 * 60 * 60)) * 1000) / 10;
  document.querySelector(".time").textContent = t.map((d) => (d < 10 ? "0" + d : d)).join(" : ");
}

function progressLoad() {
  document.querySelector(".progress").style.width = `${per >= pc ? pc : per}%`;
  document.querySelector(".progress span").innerHTML = `${per >= pc ? pc : per}%`;
  per++;
}
checkTime();
setInterval(checkTime, 500);
setInterval(progressLoad, 90);
