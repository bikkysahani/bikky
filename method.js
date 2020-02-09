var john={
    name:'john',
    dob:1998,
    calcAge:function(){
       console.log(this);
       console.log(2020-this.dob);
    }
};
john.calcAge();
var mark={
    name:'mark',
    dob:2000
};
mark.calcAge=john.calcAge;
mark.calcAge();