const fs = require('fs')
const createrCsvWritter = require('csv-writer').createObjectCsvWriter
const files = fs.readdirSync('./source')
const data = files.map(fileName => {
    console.log(fileName)
    return {name:fileName,newName:fileName}
})
const csvWriter = createrCsvWritter({
    path:"./svglist.csv",
    header:[
        {id:'name',title:'name'},
        {id:'newName',title:'newName'}
    ]
})
console.log(JSON.stringify(data))
csvWriter.writeRecords(data)
  .then(() => console.log('The CSV file was written successfully'));