const csvFilePath = 'D:/Documents/work/email/nameAllDel.csv'
const csv = require('csvtojson')
csv().fromFile(csvFilePath).then((jsonObj) => {
    return jsonObj[0]
})