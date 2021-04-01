var acbalance = 10000;
var price = 10300;
var coupon = 450;
var x = "31";
var y = 31;
var z = 31;

if( price<=acbalance)
{
    console.log("Purchasing Done! . The balance is " + (acbalance-price));
}
else if (price-coupon<=acbalance)
{
    console.log("Coupon applied !!! Purchasing Done! . The balance is " + (acbalance-(price-coupon)));
}
else {
    console.log("Account balance seems to be insufficient! . Please check");
}
if(x==y)
console.log("Result when == operator is applied which does not check the data type and focuses only on the value");

if (x===y)
console.log("Value and data type both are matching");

if(x!==y)
console.log("Either value or type is not matching");