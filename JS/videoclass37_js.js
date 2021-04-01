var students = ["Kuldeep","Mohan","Srivastava","Sandeep","Mohan","Shrivastawa","Vineeta","Shrivastava"];
var studentscopy = ["Kuldeep","Mohan","Srivastava","Sandeep","Mohan","Shrivastawa","Vineeta","Shrivastava"];
var studentsinsports = [];
var arrlen = students.length;
var sportsarrlen = 0;
for(var i=0;i<arrlen;i++)
{
    console.log(students[i]);
    if(i%2!==0)
    {
        studentsinsports.push(students[i]);
    }
}
sportsarrlen = studentsinsports.length;
console.log("Index number of array element is "+students.indexOf("Vineeta"));
console.log("students in sports array are as follows");
for(var i=0;i<sportsarrlen;i++)
{
    console.log(studentsinsports[i]);
}
console.log("Displaying the same in a while loop");
var j = 0;
while(j<sportsarrlen)
{
    console.log(studentsinsports[j]);
    j++;
}
console.log("Displaying the same in a DO-While loop");
var k = 0;
do {
    console.log(studentsinsports[k]);
    k++;
}while(k<sportsarrlen);

console.log("Splice Example "+studentsinsports.splice(studentsinsports.indexOf("Sandeep"),1));
console.log("Sort Example "+students.sort());

console.log("To String Method"+studentscopy.toString());
console.log("Join Method which behaves just like toString(), but in addition you can specify the separator:"+studentscopy.join(" * "));

console.log("The push() method adds a new element to an array (at the end):"+ studentscopy.push("Utkarsh"));
console.log("Array after Pushing name Utkarsh" + studentscopy);

console.log("The pop() method removes the last element from an array:" +studentsinsports.pop());
console.log("Array after popping out the last name " + studentsinsports)