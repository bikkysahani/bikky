var fMatchJohn=89;
var sMatchJohn=120;
var tMatchJohn=103;
var averageJohn=(fMatchJohn + sMatchJohn + tMatchJohn)/3;
console.log(averageJohn);

var fMatchMike=116;
var sMatchMike=94;
var tMatchMike=123;
var averageMike=(fMatchMike + sMatchMike + tMatchMike)/3;
console.log(averageMike);

var win=averageJohn < averageMike;
console.log(win);

var draw=averageMike ==averageJohn ? console.log('match draw'):console.log('not draw');

var averageMary=(97 + 134 + 105)/3;
console.log(averageMary);

var winner;
if(averageJohn > averageMary && averageJohn > averageMike){
    console.log('john team is a winner');
}else if(averageMike > averageJohn && averageMike > averageMary){
console.log('mike team is a winner');
}else{
    console.log('mary team is a winner');
}

//defining a function;
function funName(){
    console.log('hello world');
}
//calling function
funName();

// reusing the function
function calculateAge(birthYear){
    return 2020 - birthYear;// calling function out of the loop by using ''return''
}
var ageJohn = calculateAge(2000);
var ageBikky = calculateAge(1998);
console.log(ageBikky,ageJohn);

function yearsUntilRetirment(year,firstName){
    var age=calculateAge(year);
    var retirment=65-age;
    if(retirment>0){
        console.log(firstName  + ' retires in ' + retirment + 'years');
    }
    else{
        console.log(firstName +' already retired');

    }
}
yearsUntilRetirment(1990,'john');
yearsUntilRetirment (1948,'avi');


//function expressions:
var whatDoYouDO=function(job,firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' how to drive';
            default:
                return firstName + ' something else';
    }
}
console.log(whatDoYouDO('teacher','rahul'));
console.log(whatDoYouDO('designer','jane'));

//arrays:

//initialize the arrays in two ways:
var names=['avi','kabi','jabi'];
var years= new Array(1990,1998,1999);

console.log(names[2]);
console.log(names.length);

//mutate array data
names[1]='bikky';
names[names.length]='mary';
console.log(names);

//different data types:
var john=['avi','kabi','jabi','delete',1009];

john.push('red');//add element at the end
john.unshift('bikky');//add element at the starting
console.log(john);

john.pop();
john.pop();//delet an element at the end
john.shift();//delete an element from the starting
console.log(john);

console.log(23);
console.log(john.indexOf(1009));

//using ternary operator
var isDelete=john.indexOf('delete')===-1? 'john is not designer':'john is a designer';
console.log(isDelete);


