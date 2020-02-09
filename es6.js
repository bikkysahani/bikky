//es6
{
    const a=1;
    let b=2;
    var c=3;

}
//console.log(a+b);//referecnce error becoz it is with in a block.(``back ticks sign)
console.log(c);

//es5
(function(){
    var c=3;
}());

let fname='bikky';
let lname='sahani';
const dob=1998;
 
function calcAge(year){
    return 2020-year;

}

//es5
console.log('this is'+ fname + ' '+ lname + '  ');

//es6
console.log(`this is ${(fname)} `)


//arrow functions
const years=[1990,1998,1980,1946];
//ES5
var age5=years.map(function(el){
    return 2016-el;
});
console.log(age5);

//ES6
let age6=years.map((el)=>{return 2016-el});//=>indicates function.
console.log(age6);

let age7=years.map(el=>2016-el);//if we have only one argument then we can ommit parethisesis,return statement,braces.
console.log(age7);

//for more then one arguments
/*let age8=years.map((el,index)=>{
    const now:new Date().getFullYear();
    const age:now-el;
    return `Age element ${index + 1}: ${age}.`
});
*/
var box={
    color:'green',
    findcolor:()=>{ ///arrow operator will take golbal value
        console.log(this.color);
    }
}
box.findcolor();

var box={
    color:'green',
    findcolor:function(){
        console.log(this.color);
        (()=>{
            console.log(this.color);
        })();
    }
}
box.findcolor();

//destructuring

//es5
var john=['john',26];
var name=john[0];
var age=john[1];

const obj={
    firstname:'john',
    lastname:'smith'
};
const{firstname,lastname}=obj;

console.log(firstname);
console.log(lastname);

const{firstname:a,lastname:b}=obj;
console.log(a);
console.log(b);

function calcAge(year){
    const age=new Date().getFullYear()-year;
    return[age,65-age,1];

}
const[age2,retirement,one]=calcAge(1990);
console.log(age2);
console.log(retirement);
console.log(one);


//map:create new array from existing array.
//spread operators:extracting the values from an existing arays and put into an new array.
const familySmith=['john','bb','vv'];
const familyMark=['mark','dd','ff'];
const bigFamily=[...familyMark,...familySmith];
//const bigFamily=[familyMark,familySmith];
console.log(bigFamily.length);
console.log(bigFamily);

function addFourAges(a,b,c,d){
    return a+b+c+d;
}

var ages=[16,12,13,14];
const sum3=addFourAges(...ages);
console.log(sum3);

///Rest Parameters :helps id function defination(when spread operator is used in function defination called rest operator)
function isFullAge(...years){
    years.forEach(cur=>console.log((2016-cur)>=18));
}
isFullAge(1990,1991,1992,1993);

//es6
function isFullAge6(limit,...years){
    years.forEach(cur=>console.log((2016-cur)>=limit));
}
isFullAge6(16,1998,1999,1997,1996);


//default parameters:
function SmithPerson(firstname,yearBirth,lastname,nationality){
    lastname===undefined? lastname='smith':lastname=lastname;
    nationality===undefined?nationality='american':nationality=nationality;

    this.firstname=firstname;
    this.lastname=lastname;
    this.yearBirth=yearBirth;
    this.nationality=nationality;
}

var john=new SmithPerson('john',1990);
console.log(john);

var emily=new SmithPerson('emily',1998,'dia','nepal');
console.log(emily);

//es6
function SmithPerson(firstname,yearBirth,lastname='smith',nationality='nepali'){
    
    this.firstname=firstname;
    this.lastname=lastname;
    this.yearBirth=yearBirth;
    this.nationality=nationality;
}
var john=new SmithPerson('john',1990);
console.log(john);

var emily=new SmithPerson('emily',1998,'dia','nepal');
console.log(emily);


