// Q17. Write a function 'FirstAndLast' that takes in an array, and returns an object
// with:
// 1) the first element of the array as the object's key, and
// 2) the last element of the array as that key's value.
// (Example input: ['ABC', 'DEF', 'Employee', 'Manager']
// output: ABC : 'Manager')
function FirstAndLast(array) {
    var result = {};
    if (array.length > 0) {
        result[array[0]] = array[array.length - 1];
    }
    // Convert the result object to a JSON string
    var jsonResult = JSON.stringify(result);
    // Return the JSON object
    return jsonResult;
}
var arr = ['ABC', 'DEF', 'Employee', 'Manager']
var obj = FirstAndLast(arr)
console.log(obj)