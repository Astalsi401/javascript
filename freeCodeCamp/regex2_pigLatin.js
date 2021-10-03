function translatePigLatin(str) {
    let ans = str.slice(0, str.length)
    if (/^[aeiou]+/.test(str)) {
        ans += 'way'
    } else {
        ans = str.replace(/^[^aeiou]+/, '')
        ans += str.match(/^[^aeiou]+/) + 'ay'
    }
    return ans
}

const words = ['consonant', 'paragraphs', 'glove', 'algorithm', 'eight', 'schwartz', 'rhythm']
console.log(translatePigLatin(words[0]));