
const argv = require('yargs').argv;
const os = require('os');

const userInfo = os.userInfo();
const userName = os.userInfo().username;

setTimeout(function() {console.log(`Witaj ${userName} `)},5000);





