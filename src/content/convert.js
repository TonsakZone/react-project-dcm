const csvtojson = require('csvtojson')
const fs = require('fs')

let csvfilepath = "../datafile/train_study_level.csv"

csvtojson()
    .fromFile(csvfilepath)
    .then((json) => {
        console.log(json)

        fs.writeFileSync("Convert-3.json", JSON.stringify(json), "utf-8", (err) => {
            if (err) console.log(err)
        })

        var c1 = json.filter(t => t.NegativeforPneumonia === '0')
        console.log(c1.length);
        var c2 = json.filter(t => t.NegativeforPneumonia === '1')
        console.log(c2.length);
        var c3 = json.filter(t => t.TypicalAppearance === '0')
        console.log(c3.length);
        var c4 = json.filter(t => t.TypicalAppearance === '1')
        console.log(c4.length);
        var c5 = json.filter(t => t.IndeterminateAppearance === '0')
        console.log(c5.length);
        var c6 = json.filter(t => t.IndeterminateAppearance === '1')
        console.log(c6.length);
        var c7 = json.filter(t => t.AtypicalAppearance === '0')
        console.log(c7.length);
        var c8 = json.filter(t => t.AtypicalAppearance === '1')
        console.log(c8.length);
        let alldata = [];
        alldata.push(c1.length);
        alldata.push(c2.length);
        alldata.push(c3.length);
        alldata.push(c4.length);
        alldata.push(c5.length);
        alldata.push(c6.length);
        alldata.push(c7.length);
        alldata.push(c8.length);
        fs.writeFileSync('./arraydata1.txt', alldata.join('\n'));

    })
;

const csvtojson1 = require('csvtojson')
csvfilepath = "../datafile/sample_submission.csv"

csvtojson1()
    .fromFile(csvfilepath)
    .then((json) => {
        console.log(json)

        fs.writeFileSync("Convert-4.json", JSON.stringify(json), "utf-8", (err) => {
            if (err) console.log(err)
        })

        var s1 = json.filter(t => t.PredictionString === 'negative 1 0 0 1 1')
        console.log(s1.length);
        var s2 = json.filter(t => t.PredictionString === 'none 1 0 0 1 1')
        console.log(s2.length);
        let alldata = [];
        alldata.push(s1.length);
        alldata.push(s2.length);
        fs.writeFileSync('./arraydata-samplesub1.txt', alldata.join('\n'));



    })
;


//export const alldata = csvtojson(); 

/*const csvFilePath='../images/train_study_level.csv'
const csv=require('csvtojson')
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
})

var fs = require('fs');

var data = fs.readFileSync('../images/train_study_level.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array

console.log(data);
console.log(JSON.stringify(data, '', 2)); // as json
/*const fs = require('fs');
const csv = require('neat-csv');
const raw = fs.readFileSync('../images/train_study_level.csv', 'utf8');
const readCSV = async () => {
    const result = await csv(raw, { headers: false });
    console.log(result);
    var something = result.filter(t => t.1 === '0')
    fs.writeFileSync("Convert-2.json",JSON.stringify(result),"utf-8",(err) => {
        if(err) console.log(err)
    })
}
readCSV();*/




