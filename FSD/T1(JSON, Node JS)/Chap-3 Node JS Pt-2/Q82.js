class time
{
    constructor(hour,min,sec){
        this.hour=hour;
        this.min=min;
        this.sec=sec;
    }
    addition(p2) {
        var p3 = new time();
        p3.hour=p2.hour+p1.hour;
        p3.min=p2.min+p1.min;
        p3.sec=p2.sec+p1.sec;
        return p3;
    }
}
var p1=new time(5,5,20);
var p2=new time(2,58,55);
var a=p1.addition(p2);
if (a.sec > 60){
    a.sec = a.sec % 60;
    a.min=a.min+1;
}
if(a.min>60){
    a.min=a.min%60;
    a.hour=a.hour+1;
}
console.log(a);