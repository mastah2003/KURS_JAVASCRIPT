const _ = require('lodash');
const os = require('os');

let Tab = ['ala', 3, 'ma', 'kota', 1, 'ala', 1, 4, 3];

Tab = _.uniq(Tab);
// _.difference

console.log(Tab);

const userName = os.userInfo().username;