const express = require('express');
const app = express();
var port = 3000;
const fs = require('fs');

var arr = [2, -3, 4, 1, -6, -4, 1];


function fileRead() {
    console.log('file reading');

    fs.readFileSync('calc.js', 'utf-8', (data) => {
        console.log('file read', data);
    });
}

fileRead();
app.listen(port, () => { console.log(`listening at ${port}`) });