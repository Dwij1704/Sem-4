// Q15. Write a JSON script by entering user detail of three different person having
// same age group in string format method. Print the following result in object
// form. (1) User Details (2) Name of 2nd person and his/her age.
var jsonArray = {
"userDetails": [
    { "name": "Dwij Patel", "age": "19", "city": "Ahmedabad" },
    { "name": "Jyoti Mistry", "age": "18", "city": "Navsari" },
    { "name": "Shubham Jain", "age": "22", "city": "Ahmedabad" }
]
};
console.log(jsonArray['userDetails'])
console.log(jsonArray['userDetails'][1]['name'])
console.log(jsonArray['userDetails'][1]['age'])