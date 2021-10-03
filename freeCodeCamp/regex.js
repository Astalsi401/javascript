function spinalCase(str) {
    return str.split(/\s|(?=[A-Z])|\_/).join('-').toLowerCase();
}

console.log(spinalCase('The_Andy_Griffith_Show'));