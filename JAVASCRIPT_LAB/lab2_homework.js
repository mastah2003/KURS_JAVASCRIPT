// LAB_2 HOMEWORK

// 1)	Create a function that returns the sum of 
// all elements passed in array as parameter. Function (array)=>number

// let Tab= [1,6,23,8,4,98,3,7,3,98,4,98];
// function sum(Table)
// {
//     let a= 0;
//     for(let i=0; i<Table.length ; i++)
//     {
        
//         a += Table[i];
//     }
//     return a;
// }

// console.log(sum(Tab));

//2)	Create a function that returns sum of first and last elements of given array.

// let Tab= [1,6,23,8,4,98,3,7,3,98,4,98];

// function sum_first_last(Table)
// {
// let a = Table[Table.length-1] + Table[0];
// return a;
// }
// console.log(sum_first_last(Tab));

//3)	Create a function that takes a number and return factorial of that number.

// function factorial(count)
// {
//     let a = 1;
//     for(let i=1; i<count+1 ; i++)
//      {
//           a *=  i;
//      }
//      return a;
// }
// console.log(factorial(5));

// 4)	Create a function that returns given array in reverse order. // no build in functions

// let Tab= [1,6,23,8,4,98,3,7,3,98,4,98];

//  function reverse(Table)
//  {

//     let tempElement = 0;    
//     for(let i=0; i<Table.length / 2 ; i++)
//      {
//         tempElement = Table[i]; 
//         Table[i] = Table[Table.length - i -1]; 
//         Table[Table.length - i - 1] = tempElement; 
//      }

//     return Table;
//  }
//  console.log(reverse(Tab));

//5)	Create a function that based on given array returns new array in pattern
// [a,b,c,d,e,f] -> [a+b, c+d, e+f]
// [1,3,4,1,0,3] => [4,5,3] function(array)=>array


// let Tab= [1,6,23,8,4,98,3,7,3,98,4,98];
// function specialSum(Table)
// {
//      let resTab=[];
//      for(let i=0; i<Table.length; i+=2)
//       {
//         resTab.push(Table[i]+Table[i+1]);
//       }
//       return resTab;
// }
// console.log(specialSum(Tab));

// 6)	For time of this example remove last element from the given array.
// Create a function that based on given array return new array in pattern 
// [a,b,c,d,e] -> [a+b, c+d, e+e]

//  let Tab= [1,6,23,8,4,98,3,7,3,98,4,98];
// function specialSum(Table)
// {
//      let resTab=[];
//      for(let i=0; i<Table.length; i+=2)
//       {
//         if(i+1 >= Table.length)  // 
//         resTab.push(Table[i]*2)
//         else
//         resTab.push(Table[i] + Table[i+1])
//       }
//       return resTab;
// }
// console.log(specialSum(Tab));

// 7)	Create a function the return one random element from given array.
// use random function 

// let Tab= [1,6,23,8,4,5,3,7,3,22,4,44];
// function randomElement(Table)
// {
//     return Table[Math.floor((Math.random() * Table.length))]
// } 
// console.log(randomElement(Tab));

// 8)	Create a function that takes two parameters array and number off attempts.
// Based on number of attempts 
// choose a random number from table that many times and return lowest one.

let Tab= [1,2,3,4,5,6,7,8,9,10,11,12];
function randomElement2(Table,attempts)
{
    let lowest;
    while(attempts>0)
    {
        let Randomelement = Table[Math.floor((Math.random() * Table.length))];
        if(lowest > Randomelement || !lowest)
        lowest = Randomelement;
        attempts--;
    }
    return lowest;
}
console.log(randomElement2(Tab,5));

// 9)	Create a function that takes given array. 
// Then takes a random element,
// removes it from the array and pushes it to result arrays. 
// This takes place as long as there are elements in source array. 

let Tab= [1,4,7,12,24,55,77,86,23,666,2333,5555];
let Tab2=[];
function random_exchange(Table1,Table2)
{
    while(Table1.length)
    {
    let RandomElementAdr = Math.floor((Math.random() * Table1.length));
    Table2.push(Table1[RandomElementAdr]);
    Table1.splice(RandomElementAdr,1);
    }
}
random_exchange(Tab,Tab2);
console.log(Tab,Tab2);

// 11)	Create a function that will return the current day name in Polish. 

// let current_date = new Date();
// let dotw;
// switch(current_date.getDay())
// {
// case 0:
// dotw='niedziela';
// break;
// case 1:
// dotw='poniedziałek';
// break;
// case 2:
// dotw='wtorek';
// break;
// case 3:
// dotw='środa';
// break;
// case 4:
// dotw='czwartek';
// break;
// case 5:
// dotw='piątek';
// break;
// case 6:
// dotw='sobota';
// break;
// default:
// dotw='słoneczny dzień';
// }

// console.log(`dziś jest ${dotw}`)

//  12)	Create a function that tells us how many days till Friday 

// let current_date = new Date();
// let dotw = current_date.getDay();
// if(dotw===5)
// {console.log('Jest piątek');}
// else if(dotw>5)
// {console.log('Zostało 6 dni do piątku');}
// else
// {console.log(`Zostało ${5-dotw} do piątku`);}

//13)	Create a function that take two numbers and return the object with 4 fields.
//      Result on 4 basic arithmetic operations. 

// function arithmetic(num1,num2)
// {
//     let results = {sum:num1+num2,sub:num1-num2,mul:num1*num2,div:num1/num2};
//     return results;
// }
// console.log(arithmetic(6,5));

//14)	Create a function that takes array of objects given below and calls ‘show’ function if one is present on object.
let objects = [{
    id:1,
    show: function(){
        console.log('first show');
    }
},{
    id:2
},{
    id:3,
    show: function(){
        console.log('third show');
    }
}];

for(let i=0; i < objects.length; i++)
{
try{ objects[i].show(); } catch{}
}

