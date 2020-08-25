var calc = require('./calc.js');
// var http = require('http');
var fs = require('fs');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const events = require('events');
const request = require('request');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.json());
app.use(express.urlencoded());


// const eventEmmitter = new events().eventEmmitter();

// const _callback = () => {
//     console.log('a');
//     eventEmmitter.removeListener('newEvent', _callback);
// }

// const callback_ = () => {
//     console.log('b');
//     eventEmmitter.removeListener('newEvent', callback_);
// }

// eventEmmitter.on('newEvent', _callback);
// eventEmmitter.on('newEvent', callback_);
// eventEmmitter.emit('newEvent');
// eventEmmitter.emit('newEvent');
// eventEmmitter.emit('newEvent');
const myObject = {
    myArrowFunction: null,
    myMethod: function () {
        this.myArrowFunction = () => { console.log('Inside', this) };
    }
};


myObject.myMethod();
const myArrowFunction = myObject.myArrowFunction;
// myArrowFunction();

// const myFunction = () => {
//     console.log(this);
// };

// // call it
// myFunction();

// const myObject1 = {
//     myMethod: () => {
//         console.log(this);
//     }
// };

// myObject1.myMethod();


const myMethod = () => {
    console.log(this);
};

myMethod1 = function () {
    console.log(this);
};

const myObject1 = { name: 'A' };

// myMethod.call(myObject1);
myMethod.bind(myObject1);

// myMethod1().bind(myObject1);
var port = 9000;

var user = {
    name: "Virat Kohli",
    address: "New Delhi"
};
function userDetail(name, address) {
    return "Name: " + name + " Address: " + address;
}

var f1 = userDetail.call(user.name, user.address);
var f2 = userDetail("Virat", "Chandigarh");
console.log("f1 ", f1);
console.log("f2 ", f2);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.post('/name/saveName', function (req, res, next) {
    res.json(req.body);
});


app.get('/name', function (req, res) {
    res.send("My Name Id is " + req.query.id);
});
app.get('/name/:name', function (req, res) {
    // res.send("My Name is " + req.params.name);
    var obj = { name: req.params.name };
    res.json(obj);
});

class Person {
    name = 20;
    constructor() {
        console.log(this.name);
    }
    desc1(){
        console.log('Create person through prototype, Name:', this.name);
    }
    desc= ()=> {
        console.log('Create person, Name:', this.name);
    }
    desc2=function () {
        console.log('Create person desc2, Name:', this.name);
    }
}

var p = new Person();
console.log(p);
console.log(p.desc1());
console.log(p.desc());
console.log(p.desc2());
function f(){ 
console.log('in call stack'); 
setImmediate(()=>console.log('in Immediate stack'));
setTimeout(()=>{ console.log('in Time Out stack');},0); 
}
f();

var Singleton = function () {
    // var instance;
    if(Singleton.instance){
        return Singleton.instance;
    }
    Singleton.instance=this;
    // function createInstance() {
    //     var object = new Object("I am the instance");
    //     return object;
    // }
 
    // return {
    //     getInstance: function () {
    //         if (!instance) {
    //             instance = createInstance();
    //         }
    //         return instance;
    //     }
    // };
};
 
function run() {
 
    var instance1 = new Singleton();
    var instance2 = new Singleton();
 
    console.log("Same instance? ", (instance1 === instance2));  
    console.log("Same instance? ", ((new Singleton()).Singleton));  
}

run();
app.listen(port);

// fs.writeFile('file2.js', 'console.log("Inside file1.js")', function (err) {
//     console.log('write done');
// }
// );

// fs.unlink('file2.js', function (err) {
//     console.log('delete done');
// })


// var server = http.createServer(function (req, res) {
//     res.write("Welcome to Node Backend "+calc.add(4,5));
//     res.end();
// }
// );

// server.listen(port);