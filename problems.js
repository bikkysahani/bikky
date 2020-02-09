var avi={
    bill:[124,48,268,180,42],
    tipCalc:function(){
        var percentage;
        for(i=0;i < this.bill.length;i++){
        if(this.bill[i]<50){
            percentage=.2*this.bill[i];
            console.log(this.percentage);
        }
        else if(this.bill[i]>=50 && this.bill[i]<200){
            percentage=.15*this.bill[i];
            console.log(this.percentage);
        }
        else{
            percentage=.1*this.bill[i];
            console.log(this.percentage);
        }
    }
    }

    
    
}
var tip=[tipCalc[0]];
console.log(tip);
//////
//////


