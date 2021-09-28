// undefined
var s = [23, 65, 98, 5];

Array.prototype.myMap = function (callback) {
    var newArray = [];
    // undefined
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i]));
    }
    // undefined
    return newArray;
};

var new_s = s.myMap(function (item) {
    return item * 2;
});

console.log(new_s)