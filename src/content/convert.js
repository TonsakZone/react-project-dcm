const csvtojson = require('csvtojson')
const fs = require('fs')

let csvfilepath = "../datafile/train_study_level.csv"

csvtojson()
    .fromFile(csvfilepath)
    .then((json) => {
        //console.log(json)

        fs.writeFileSync("Convert-3.json", JSON.stringify(json), "utf-8", (err) => {
            if (err) console.log(err)
        })

        var c1 = json.filter(t => t[`Negative for Pneumonia`] === '0')
        //console.log(c1.length);
        var c2 = json.filter(t => t[`Negative for Pneumonia`] === '1')
        //console.log(c2.length);
        var c3 = json.filter(t => t[`Typical Appearance`] === '0')
        //console.log(c3.length);
        var c4 = json.filter(t => t[`Typical Appearance`] === '1')
        //console.log(c4.length);
        var c5 = json.filter(t => t[`Indeterminate Appearance`] === '0')
        //console.log(c5.length);
        var c6 = json.filter(t => t[`Indeterminate Appearance`] === '1')
        //console.log(c6.length);
        var c7 = json.filter(t => t[`Atypical Appearance`] === '0')
        //console.log(c7.length);
        var c8 = json.filter(t => t[`Atypical Appearance`] === '1')
        //console.log(c8.length);
        var c9 = json.filter(t => t.id)
        //console.log(c9.length);
        let alldata = [];
        alldata.push(c1.length);
        alldata.push(c2.length);
        alldata.push(c3.length);
        alldata.push(c4.length);
        alldata.push(c5.length);
        alldata.push(c6.length);
        alldata.push(c7.length);
        alldata.push(c8.length);
        alldata.push(c9.length);
        fs.writeFileSync("DataCount-3.json", JSON.stringify(alldata), "utf-8", (err) => {
            if (err) console.log(err)
        })

    })
    ;

const csvtojson1 = require('csvtojson')
csvfilepath = "../datafile/sample_submission.csv"

csvtojson1()
    .fromFile(csvfilepath)
    .then((json) => {
        //console.log(json)

        fs.writeFileSync("Convert-4.json", JSON.stringify(json), "utf-8", (err) => {
            if (err) console.log(err)
        })

        var s1 = json.filter(t => t.PredictionString === 'negative 1 0 0 1 1')
        //console.log(s1.length);
        var s2 = json.filter(t => t.PredictionString === 'none 1 0 0 1 1')
        //console.log(s2.length);
        var s3 = json.filter(t => t.id)
        //console.log(s3.length);
        let alldata = [];
        alldata.push(s1.length);
        alldata.push(s2.length);
        alldata.push(s3.length);
        fs.writeFileSync("DataCount-4.json", JSON.stringify(alldata), "utf-8", (err) => {
            if (err) console.log(err)
        })


    })
    ;

const csvtojson2 = require('csvtojson')
csvfilepath = "../datafile/train_image_level.csv"

csvtojson2()
    .fromFile(csvfilepath)
    .then((json) => {
        //console.log(json)

        fs.writeFileSync("Convert-5.json", JSON.stringify(json), "utf-8", (err) => {
            if (err) console.log(err)
        })

        var t1 = json.filter(t => t.id)
        console.log(t1.length);
        let alldata = [];
        alldata.push(t1.length);
        fs.writeFileSync("DataCount-5.json", JSON.stringify(alldata), "utf-8", (err) => {
            if (err) console.log(err)
        })


    })
    ;