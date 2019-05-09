const argv = require('yargs').argv;
const myMath = require('./my_math');


//a, b, operacja
console.log(result);

if(argv.operacja == '*')
{
  let result = myMath.multi(argv.a,argv.b);
}
else if(argv.operacja == '/')
{
    let result = myMath.podziel(argv.a,argv.b);
}


console.log(c);
