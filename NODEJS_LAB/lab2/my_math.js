//asynchro
module.exports.multi = function(a,b,callback)
{
    setTimeout(function()
    {
    const resultAB = a*b;
    callback(resultAB);
    },2500);
}
;

module.exports.divide = function(a,b,callback)
{
    setTimeout(function()
    {
    const resultAB = a/b;
    callback(resultAB);
    });
}
;
// synchro
// module.exports.multi = function(a,b)
// {
//     return a*b;
// } 

