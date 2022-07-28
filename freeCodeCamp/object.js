const Person = function (firstAndLast) {
  // 只修改這一行下面的代碼
  // 完成下面的方法，其餘的執行類似
  this.getFullName = function () {
    return firstAndLast;
  };
  this.getFirstName = function () {
    return firstAndLast.split(" ")[0];
  };
  this.getLastName = function () {
    return firstAndLast.split(" ")[1];
  };
  this.setFirstName = function (first) {
    firstAndLast = first + " " + firstAndLast.split(" ")[1];
  };
  this.setLastName = function (last) {
    firstAndLast = firstAndLast.split(" ")[1] + " " + last;
  };
  this.setFullName = function (fullName) {
    firstAndLast = fullName;
  };
};

const bob = new Person("Bob Ross");
console.log(bob.getFullName());
