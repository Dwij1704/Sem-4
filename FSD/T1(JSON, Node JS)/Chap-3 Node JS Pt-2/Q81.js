var ps=require("fs");
class person
{
    constructor(name,age){
        this.age=age;
        this.name=name;
    }
    elderofx(p1,p2){
        if(p1.age>p2.age){
            console.log("P1.age="+p1.age);
            return p1;
        }
        else{
            console.log("P2.age="+p2.age);
            return p2;
        }
    }
}
var p1=new person("xyz",3);
var p2=new person("pqr",33);
var p3=new person();
var a=p3.elderofx(p1,p2);
const jsonstr=JSON.stringify(a);
console.log(jsonstr);
ps.writeFileSync("elder.txt",jsonstr);