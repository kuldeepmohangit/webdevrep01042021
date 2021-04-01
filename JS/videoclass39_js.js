function area(length , width)
{
    return length*width;
}

var totalarea = area(10,14);
console.log(totalarea);

var bankbalance = 500;


function mytransaction(priceofsale)
{
    if(priceofsale<=bankbalance)
    {
        console.log("Purchase successful");
        return bankbalance -=priceofsale;
    }
    else
    {
        console.log("Insufficient Funds");
    }
}
var shoesale = 130;
var curbal = mytransaction(shoesale);
console.log("Current balance "+curbal);

var sockssale = 50;
var curbal = mytransaction(sockssale);
console.log("Current balance "+curbal);

var watchsale = 320;
var curbal = mytransaction(watchsale);
console.log("Current balance "+curbal);

var cookiessale = 320;
mytransaction(cookiessale);
// console.log("Current balance "+curbal);