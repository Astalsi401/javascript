function diffArray(arr1, arr2) {
    var newArr = [];
    arr1.forEach(function (a) {
        if (arr2.some(b => b === a) === false) newArr.push(a)
    })
    arr2.forEach(function (a) {
        if (arr1.some(b => b === a) === false) newArr.push(a)
    })
    return newArr
}

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));