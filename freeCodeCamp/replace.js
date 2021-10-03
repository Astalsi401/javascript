function convertHTML(str) {
    return str.replace(/(\&|\<|\>|\"|\')/g, ($0, $1) => {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '\"': '&quot;',
            '\'': '&apos;'
        }[$1];
    });
}

console.log(convertHTML("Schindler's List"));