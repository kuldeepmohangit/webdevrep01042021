var students = [];

function Student(first, last, age ) {
    this.firstName = first;
    this.lastName = last;
    this.age = age ;
    this.greeting = function() {
        return "Hi, My name is " + this.firstName + " and I am " + this.age + " years old.";
    };
}
students.push(new Student("Kuldeep","Mohan",41));
students.push(new Student("Rishu","Srivastava",32));
students.push(new Student("Kriteesha","Srivastava",3));

for(var index=0;index<students.length;index++)
{
    var tempstudent = students[index];
    console.log(tempstudent.greeting());
}

var tempstudent = students[0];
// console.log(tempstudent); 
for (var key in tempstudent)
{
    console.log(tempstudent[key]);
}
