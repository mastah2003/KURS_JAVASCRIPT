//console.log('start app1');

// zrob operację matematyczna, podaj 2 argumenty i wydaj sumę. w konsoli, zapisz to rowniez w pliku

const os = require('os');
const fs = require('fs');
//onst arg = process.argv[2]; // dane wprowadzone jako argument w konsoli

const myMath = require('./matematyczny'); // taki include , root
const a= parseInt(process.argv[2]);       // zamiana na int
const b= parseInt(process.argv[3]);
// parseFloat - zamiana na float




let sum = 0;
if (a && b)
{
      sum =  myMath.add(a,b);
        console.log('sum equals: ' + sum);
        try 
        {
            fs.appendFile('wynik sumy.txt', ' wynik sumy: ' + sum  , function() { } );    
            console.log('zapisano do pliku wynik sumy');
        }
         catch (error) 
        {
                console.log('brak dostępu');
        }
      
}
else
{
        console.log('type 2 numbers as args');
}

