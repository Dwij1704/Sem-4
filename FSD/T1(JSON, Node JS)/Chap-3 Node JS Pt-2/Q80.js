var ps=require("fs");
class person{
    constructor(name,result){
        this.result=result;
        this.name=name;
    }
    topperofx(p1,p2){
        if(p1.result>p2.result){
            console.log("P1.result="+p1.result);
            return p1;
        }
        else{
            console.log("P2.result="+p2.result);
            return p2;
        }
    }
}
var p1=new person("xyz",90);
var p2=new person("pqr",80);
var p3=new person();
var a=p3.topperofx(p1,p2);
const jsonstr=JSON.stringify(a);
console.log(jsonstr);
ps.writeFileSync("topper.txt",jsonstr);