//asynchro
function multi(a,b,callback)
{
    setTimeout(function()
    {
    const resultAB = a*b;
    callback(resultAB);
    },5000);
}

// synchro
module.exports.multi = function(a,b)
{
    return a*b;
} 

