// Q52. Write a program to demonstrate various methods of os module in Node.js.
const os=require("os");
console.log(os.arch());
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
//freemem2=os.freemem();
console.log(os.freemem()/1024/1024/1024);