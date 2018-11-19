/* 1. Wykorzystując zdobytą wiedzę z poprzednich zajęć skorzystaj z zewnętrznej biblioteki 
'yargs' (https://www.npmjs.com/package/yargs) oraz wbudowanego modułu file system(fs) 
i stwórz aplikację która zapisze przekazane argumenty  
> node app.js --name Jan --lastname Nowak 
efektem końcowym powinien być plik z zawartością: {"name":"Jan","lastname":"Nowak"} 
podpowiedź: aby możliwe było 
zapisanie naszego obiektu musimy go przekonwertować do postaci tekstowej(`string`) funkcją `JSON.stringify()` 
*/

const argv = require('yargs').argv;
const fs = require('fs');

// PARAMETERS:     node app.js --name Jan --lastname Nowak

const obj =
{
    name: argv.name,
    lastname:argv.lastname
}

let customstring = JSON.stringify(obj);



fs.writeFile('name.json', customstring , function(error) {} );




