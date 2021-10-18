const fs = require('fs');
var filename = './images/test';
const scriptName = fs.readdirSync(filename);
var final = {};
final = '[';
for (var k = 0; k < scriptName.length; k++) {
    final += `{"title":"${scriptName[k]}","key":"0-${k}","children":[`;
    for (var i = 0; i < scriptName.length; i++) {
        const scriptName2 = fs.readdirSync(`${filename}/${scriptName[i]}`);
        final += `{"title":"${scriptName2}","key":"0-${k}-${i}","children":[`;
        for (var j = 0; j < scriptName2.length; j++) {
            const scriptName3 = fs.readdirSync(`${filename}/${scriptName[i]}/${scriptName2[j]}`);
            final += `{"title":"${scriptName3}","key":"0-${k}-${i}-${j}","isLeaf":"true","path":"${filename}/${scriptName[i]}/${scriptName2[j]}/${scriptName3}"`;
        }
        if (i < scriptName.length - 1) {
            final += `},]},`;
        }
        else {
            final += `},]},`;
        }
    }

    if (k < scriptName.length - 1) {
        final += `]},`;
    }
    else {
        final += `]},]`;
    }
}
const data = JSON.stringify(final);
fs.writeFile('./from through.js/TS1.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON created");
})

/*const fs = require('fs');
let make_dir = async(pathname, origin) => {


    var key = new Promise((resolve, reject) => {
        fs.readdir(pathname, (err, files) => {
            resolve(files)
        })
    })
    var tmp_arr = [];
    for(let i=0 ;i<key.length;i++){
        if (!key[i].includes('.dcm')){
            var obj = {};
            obj['title'] = key[i];
            var tmp_key = origin + '-' + i;
            if(origin === ''){
                tmp_key =  i.toString();
            }
            obj[`key`] = tmp_key
            if(obj[`childen`] == null){
                obj[`childen`] = [];
            }
            var childen = make_dir(pathname + '/' + key[i], tmp_key)
            console.log(childen);
            obj[`childen`] = childen
            tmp_arr.push(obj)
            if(i==key.length-1){
                return tmp_arr
            }
        }
        else{
            var obj = {};
            obj[`title`] = key[i];
            obj[`key`] = origin + '-' + i
            obj[`isLeaf`] = true;
            obj[`path`] = pathname + '/' + key[i];
            tmp_arr.push(obj);
        }
    }
    console.log(tmp_arr);
    return tmp_arr
}
const getdata = make_dir("./images",'');
console.log(getdata);*/