// Q77. Write a node.js script to find all prime no.s between 1-50 using external
// module having a function checkPrime(). This function returns Boolean value
// on the basis of a no. is prime or not prime. Write all necessary .js files.
const { checkPrime } = require('./Q77_Module');
const primes = [];
for (let i = 1; i <= 50; i++) {
  if (checkPrime(i)) {
    primes.push(i);
  }
}
console.log('Prime numbers between 1 and 50:');
console.log(primes);