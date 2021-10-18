const dirTree = require("directory-tree");
const fs = require("fs");

const tree = dirTree("./images");
const data = JSON.stringify(tree);

fs.writeFile('./DirTest.json',data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON created");
})