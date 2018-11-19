//console.log('hello world');

const os = require('os');
const fs = require('fs');


//console.log(os.userInfo());

const userName = os.userInfo().username;

//console.log(userName);



//fs.appendFile('hello.txt', 'co wpisac' , function() { } ); // asynchroniczne
//fs.appendFileSync('co wpisac', userName);                  // synchroniczne

const data = fs.readFileSync('hello.txt');
console.log(data.toString());
