const _ = require('lodash');


const tabA = ['Ala', 'Ma', 'PUME'];
const tabB = ['Ala', 'Ma', 'KOTA'];

let tabC = _.xorWith(tabA,tabB);

console.log(tabC);

