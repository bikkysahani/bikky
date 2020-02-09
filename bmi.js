var massMark=25000;
var hMark = 50;
var massJohn=36000;
var hJohn=60;
var BMI_Mark = massMark /( hMark * hMark);
console.log(BMI_Mark);
var BMI_John = massJohn / (hJohn * hJohn);
console.log(BMI_John);

var higherBMI=BMI_John < BMI_Mark;
console.log(higherBMI);


//==:check the values is eual or not
//===: check the value and adata type

var x=20;
var y='21';

if (x==y){
    console.log('both are same');

}
else{
    console.log('both are not same');

}
//for ===;
var x=20;
var y='20';

if (x===y){
    console.log('both are same');

}
else{
    console.log('both are not same');

}

//ternery operator
var age=20;
age >=30 ? console.log('teenager') : console.log('not teenager');
 
var drink = age >= 18 ? console.log('beear'): console.log('jiice');

//switch statement:
var job='institute';
switch(job){
    case 'teacher':
    case 'institute1':
        console.log('it is a institute');
        break;//to come out of the loop when it is executed

    case 'car':
        console.log('it is a car');
        break;
    default:
        console.log('it is my house');
}


//truthy and falsy values and equality operator
//falsy values:undefined,null,0,NaN:
//truthy:Not falsy values:

var height;
height=0;
if (height){
    console.log("defined");
}else{
    console.log('not defined');
}

if (height || height===0){
    console.log("defined");
}else{
    console.log('not defined');
}

var amount=[124,48,268];
function tips(amount){

    if(amount<50){
      var tip=(20/100)*amount;
      console.log(tip);  
    }
    else if(amount>50 && amount<200){
        var tip=(15/100)*amount;
        console.log(tip);
    }
    else{
        var tip=(10/100)*amount;
        console.log(tip);
    }
}
tips(124);
tips(100);
tips(200);

//another way from sir
function tipCalculator(bill){
    var percentage;
    if (bill<50){
        percentage=.2;
    }else if(bill>=50 && bill <200){
        percentage=.15;
    }else{
        percentage=.1;
    }
    return percentage*bill;
}
var bills=[124,48,268];
var tips=[tipCalculator(bills[0])]
var finalValues=[bills[0]+tips[0]];
console.log(tips,finalValues);

//objects and properties
//objects literal
var john={
    firstName:'john',
    lastName:'kk',
    birthYear:1990,
    family:['aa','bb'],
    job:'teacher',
    isMarried:false
};
console.log(john.firstName);
console.log(john['lastName']);
var x='birthYear';
console.log(john[x]);
//changing the values
john.job='designer'
john['isMarried']=true;
console.log(john);


//creating new objects
var jane=new Object();
jane.firstName='jane';
jane.birthYear=1990;
jane['lastName']='sahani';
console.log(jane);

//function with in an object called methods
var john={
    firstName:'john',
    lastName:'kk',
    birthYear:1990,
    family:['aa','bb'],
    job:'teacher',
    isMarried:false,
    calcAge:function(){
        this.age=2018-this.birthYear;
    }
};
john.calcAge();
console.log(john);

//question
var bikky={
    firstName:'Bikky',
    lastName:'sahani',
    massBikky:63,
    heightBikky:60,
    calcBMI : function(){
        this.Bmi=this.massBikky/(this.heightBikky * this.heightBikky);
        return this.Bmi;
    }
};
//bikky.calcBMI();
console.log(bikky);
var bik={
    firstName:'Bik',
    lastName:'sah',
    massBik:65,
    heightBik:70,
    calcBMI : function(){
        this.Bmi=this.massBik / (this.heightBik * this.heightBik);
        return this.Bmi;
    }
};
//bik.calcBMI();
console.log(bik);

if (bikky.calcBMI() > bik.calcBMI){
    console.log(bikky.firstName+' has highest bmi '+ bikky.Bmi);
}
else{
    console.log(bik.firstName+' has highest bmi '+ bik.Bmi); 
}

//while loop and for loop
var john=['aa','bb','cc','dd'];
for( var i=0; i<john.length;i++){
    console.log(john[i]);
}
var i=0;
while(i<john.length){
    console.log(john[i]);
    i++;
    //console.log(john.length);
}

//continue and break statement
var johni=['avi','babi','jabi',1998,'dabi','ee'];
for (var i=0; i<johni.length;i++){
    if(typeof johni[i]!=='string'){
        continue;
    }
    console.log(johni[i]);
}



for (var i=0;i<johni.length;i++){
    if(typeof johni[i]!=='string'){
        break;
    }
    console.log(johni[i]);
}
for (var i=johni.length-1;i>0;i--){
    console.log(johni[i]);
}
//challenge
