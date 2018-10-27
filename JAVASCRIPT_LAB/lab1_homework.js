//3)------------------------------------ calculate sum of the odd items--------------------------------------

// let Tab= [1,6,23,8,4,98,3,7,3,98,4,98];
// let oddSum = 0;
// for(let i=0; i<Tab.length ; i++)
// {
//     if(Tab[i] % 2)
//         {
//             oddSum= oddSum + Tab[i];
//         }
// }
// console.log(oddSum); 


//--------------------4)	Choose highest and lowest values from the given array (for Tab) -  One loop run----------------

// let Tab= [1,6,23,8,4,98,3,7,3,98,4,98];
// let lowestVal;
// let highestVal;

// for(let i=0; i<Tab.length ; i++)
// {
//     if(Tab[i] < lowestVal || !lowestVal)
//         {
//             lowestVal = Tab[i];
//         }
//     if(Tab[i] > highestVal || !highestVal)
//         {
//             highestVal = Tab[i];
//         }

// }
// console.log('lowest value of the given array equals: ', lowestVal);
// console.log('highest value of the given array equals: ', highestVal);

// -------------------5)	Choose longest string from the given array. One loop run---------------------------

// let Names = ['Karol','Adam','Rogowski','Politechnika','Super','Weekend'];
// let longestCount;
// let longestNameIndex;

// for(let i=0; i < Names.length ; i++)
// {
//    if(Names[i].length > longestCount || !longestCount) 
//    {
//         longestCount = Names[i].length;
//         longestNameIndex = i;
//    }
// }

// console.log("Longest element index of given array  is: " , longestNameIndex);
// console.log('This word counts:', longestCount, 'letters.');
// console.log('Name of the longest element is: ', Names[longestNameIndex])

// -----------------  6)	  Choose all the indexes on the highest value from the Tab array.  2 loop runs.---------  

// let Tab= [1,6,23,8,4,98,3,7,3,98,4,98];
// let Tab_indexes = [];    // <------TRZEBA DEKLAROWAĆ ŻE TABLICA (do .push) - UWAGA ,TAK SIĘ DEKLARUJE PUSTE TABLICE!!!
// let highestVal; // integer


// for(let i=0; i<Tab.length ; i++)
//     {
//         if(Tab[i] > highestVal || !highestVal)
//         {
//             highestVal = Tab[i];
//         }    
//     }

// for(let i=0; i<Tab.length ; i++)
//     {
//         if(Tab[i] === highestVal)
//             {
//                 Tab_indexes.push(i);
//             }
//     }   

// console.log('Longest elements indexes of given table are: ',Tab_indexes);

// -----------    7)	Calculate average value from the given array for even numbers ----------------------
//------------------------- even = parzysty,   odd = nieparzysty (dziwny).----------------------------------

let Tab = [1,6,23,8,4,98,3,7,3,98,4,98];
let numberOfElements = 0;
let sum = 0;

for(let i=0; i<Tab.length ; i++)
    {
   //     if(!(i % 2) && !i )  // zadanie 8
          if( !(Tab[i] % 2) )
            {
                    sum = sum + Tab[i];
                    numberOfElements++;
            }   
    }


console.log('Average value of even objects is: ', sum/numberOfElements);
