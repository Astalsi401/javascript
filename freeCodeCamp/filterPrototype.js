// undefined
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function (callback) {
    // undefined
    var newArray = [];
    this.forEach(a => {
        if (callback(a)) {
            newArray.push(a);
        }
    })
    // undefined
    return newArray;
};

var new_s = s.myFilter(function (item) {
    return item % 2 === 1;
});

console.log(new_s)