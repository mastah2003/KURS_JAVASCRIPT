//--------------   5)	Create a function that based on given array return new array in pattern [a,b,c,d,e,d] -> [a+b, b+c, e+d]---------------



//10)	Create a function that on given array will perform operation of adding or subtracting elements. 
//Operation is to be chosen at random.  And return a result. [a,b,c,d] => (((a+-b)+-c)+-d)

Tab = [1,6,23,8,4,98,3,7,3,98,4,98,7,6,7,19,20,11];
let result = 0;
function addsub(table)
{
    for(i=0 ; i<Tab.length ; i++)
    {

        if(Math.random() < 0.5)
        {
            result += Tab[i];
        }
        else
        {
            result -= Tab[i];
        }
    }
    return result;
}

console.log(` ${addsub(Tab)} `);

