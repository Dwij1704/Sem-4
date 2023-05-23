// Q74. Write a node.js script to create my own module to calculate reverse of a
// given number. That module should be use to compute all numbers between 1
// to 100 in which square of reverse & reverse of sqaure is same. This has call
// of reverse twice so call it from module. Also keep a function to compute
// average of any number of elements.
const { rev, avg } = require("./Q74_Module.js");
arr = rev(12);
first = arr[2];
arr2 = rev(arr[1]);
second = arr2[0];
if (first == second) {
  console.log("Equal");
} else {
  console.log("not equal");
}
console.log(avg(5, 15));
