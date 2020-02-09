function calculateAge(year){
    console.log(2016-year)
}
calculateAge(1990);

var retirement=function(year){
    console.log(65-(2016-year));
}
retirement(1990);

//retirement(1990);
//var retirement=function(year){
  //  console.log(65-(2016-year));
//}

//console.log(age);
var age=23;
function foo(){
    console.log(age);
var age=65;
console.log(age);
}
foo();
console.log(age);

//lexical scoping
//this keyword
//regular function:the this keyword points at the global object.

calculateAge(1998);
function calculateAge(year){
    console.log(2016-year);
    console.log(this);
}

var john={
    name:'john',
    birth:1990,
    calAge:function(){
        console.log(this);
        console.log(2016-this.birth);

        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    }
}
john.calAge();

