var Person = function (firstAndLast) {
  // undefined
  // undefined
  const fullName = firstAndLast
  this.getFullName = function () {
    return fullName;
  };
  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };
  this.getLastName = function () {
    return fullName.split(" ")[1];
  };
  this.setFullName = function (name) {
    fullName = name;
  }
  this.setFirstName = function (first) {
    fullName = first + " " + fullName.split(" ")[1];
  }
  this.setLastName = function (last) {
    fullName = fullName.split(" ")[1] + " " + last;
  }
  return fullName;
};

var bob = new Person('Bob Ross');
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
