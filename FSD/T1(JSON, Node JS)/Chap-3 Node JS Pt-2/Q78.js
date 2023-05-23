var e = require("events");
var ee = new e();
const findval = (s1,s2,s3) =>{
if (s1< 0||s2<0||s3<0){
    ee.emit("negside");
}
var peri = s1+s2+s3;
if(peri<0){
    ee.emit("negperi");
}
else {
    console.log("perimeter=" + peri);
}
}
ee.on("negside",()=>{console.log("side must be positive")});
ee.on("negperi", ()=>{console.log("perimeter must be positive")});
ee.on("findval",findval);
ee.emit("findval",2,-3,8);