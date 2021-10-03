/*篩選出含有source元素的資料 */

function whatIsInAName(collection, source) {
    // undefined
    var src = Object.keys(source);
    return collection.filter(a => src.every(b => a.hasOwnProperty(b) && a[b] === source[b]))
    // undefined
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));