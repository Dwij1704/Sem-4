use("LJ")

// Q352
// Write commands to perform the following tasks on an employee collection having fields
// name, age & joiningDate:
// (1) Insert 3-4 records in the collection.
// (2) List all employees who joined before 1st January 2010.
// (3) Update the name of the employee to "WWW" whose joiningDate is "05-05-2015"

// (1) Insert 3-4 records in the collection
// db.employee.insertMany([
//     { name: "Dwij", age: 19, joiningDate: "2004-02-31" },
//     { name: "Shubham", age: 20, joiningDate: "2007-05-05" },
//     { name: "Jyoti", age: 21, joiningDate: "2009-05-05" },
//     { name: "Brijesh", age: 22, joiningDate: "2015-05-05" }
// ])

// (2) List all employees who joined before 1st January 2010
// db.employee.find({ "joiningDate": { $lt: "2010-01-01" } })

// (3) Update the name of the employee to "WWW" whose joiningDate is "05-05-2015"
// db.employee.updateOne({ 'joiningDate': "2015-05-05" }, { $set: { name: "WWW" } })


// --------------------------------------------------------------------------------------------


// Q353
// Write commands to perform following tasks on employee collection having fields having
// name,age & joiningDate:
// (1) Delete all records having joiningDate before 1st January, 2010.
// (2) List all employees having age>50 years.
// (3) List only 1st employee having age>60 years.
// db.employee.insertMany([
//     { name: "Omdev", age: 19, joiningDate: "2004-02-31" },
//     { name: "Jainam", age: 20, joiningDate: "2007-05-05" },
//     { name: "Jatin", age: 21, joiningDate: "2009-05-05" },
//     { name: "Amisha", age: 50, joiningDate: "2015-05-05" },
//     { name: "Mosam", age: 60, joiningDate: "2017-09-05" },
//     { name: "Rohan", age: 70, joiningDate: "2019-05-05" },
//     { name: "Divyam", age: 55, joiningDate: "2019-10-31" }
// ])

// (1) Delete all records having joiningDate before 1st January, 2010.
// db.employee.deleteMany({ "joiningDate": { $lt: "2010-01-01" } })

// (2) List all employees having age>50 years.
// db.employee.find({ "age": { $gt: 50 } })

// (3) List only 1st employee having age>60 years.
// db.employee.find({ "age": { $gt: 60 } }).limit(1)


// --------------------------------------------------------------------------------------------


// Q354
// Write commands to perform following tasks on employee collection having fields having
// name,age & joiningDate:
// (1) Update the name="Senior citizen" having age>60 years.
// (2) Update the name="JKL" having age=20 years. Insert this record, if it is not found.
// (3) Retire all employees by deleting senior citizens from collection.

// (1) Update the name="Senior citizen" having age>60 years.
// db.employee.updateMany({ "age": { $gt: 60 } }, { $set: { name: "Senior citizen" } })

// (2) Update the name="JKL" having age=20 years. Insert this record, if it is not found.
// db.employee.updateOne({ "age": 20 }, { $set: { name: "JKL" } }, { upsert: true })

// (3) Retire all employees by deleting senior citizens from collection.
// db.employee.deleteMany({ "age": { $gt: 60 } })


// --------------------------------------------------------------------------------------------


// Q355
// Write commands to perform following tasks on employee collection having fields having
// name,age & joiningDate:
// (1) Count no. of employees having age>=60 years.
// (2) List all employees in descending order of names having names "ABC", "PQR", "XYZ".
// (3) List all employees whose age lies between 25 to 50 years excluding all rest of the fields


// (1) Count no. of employees having age>=60 years.
// db.employee.find({ "age": { $gte: 60 } }).count()

// (2) List all employees in descending order of names having names "ABC", "PQR", "XYZ".
// db.employee.insertMany([
//     { name: "ABC", age: 19, joiningDate: "2004-02-31" },
//     { name: "PQR", age: 20, joiningDate: "2007-05-05" },
//     { name: "XYZ", age: 21, joiningDate: "2009-05-05" },
// ])
// db.employee.find({ name: { $in: ["ABC", "PQR", "XYZ"] } }).sort({ name: -1 })

// (3) List all employees whose age lies between 25 to 50 years excluding all rest of the fields
// db.employee.find({ "age": { $gte: 25, $lte: 50 } }, { name: 1, age: 1, joiningDate: 1, _id: 0 })


// --------------------------------------------------------------------------------------------


// Q356
// Map following SQL queries to MongoDB query:
// (1) alter table people add joiningDate datetime
// (2) alter table people drop column joiningDate
// (3) select age,name from people where status="PH"
// (4) select * from people where status!="PH"
// (5) select name from people order by age desc

// (1) alter table people add joiningDate datetime
// db.people.updateMany({}, { $set: { joiningDate: "" } })

// (2) alter table people drop column joiningDate
// db.people.updateMany({}, { $unset: { joiningDate: "" } })

// (3) select age,name from people where status="PH"
// db.people.find({ status: "PH" }, { age: 1, name: 1, _id: 0 })

// (4) select * from people where status!="PH"
// db.people.find({ status: { $ne: "PH" } })

// (5) select name from people order by age desc
// db.people.find({}, { name: 1, _id: 0 }).sort({ age: -1 })


// --------------------------------------------------------------------------------------------


// Q357
// Map following SQL queries to MongoDB query:
// (1) update employee set name="TTT" where age not in {12,33,44,55}
// (2) select count(*) from employee where age<>23
// (3) update employee set age=age+10

// (1) update employee set name="TTT" where age not in {12,33,44,55}
// db.employee.updateMany({ age: { $nin: [12, 33, 44, 55] } }, { $set: { name: "TTT" } })

// (2) select count(*) from employee where age<>23
// db.employee.find({ age: { $ne: 23 } }).count()

// (3) update employee set age=age+10
// db.employee.updateMany({}, { $inc: { age: 10 } })


// --------------------------------------------------------------------------------------------


// Q367
// Consider following student collection:
// [
//  {_id:123433,name: "SSS",age:22},
//  {_id:123434,name: "YYY",age:2},
//  {_id:123435,name: "PPP",age:32},
// ]
// Do as directed:
// (1) Update name=”JJJ” and age=40, where age=20 occurs. Insert new document, if record is
// not found.
// (2) To retrieve age and name fields of documents having names “YYY” & “SSS”. Don’t
// project _id field.

// (1) Update name=”JJJ” and age=40, where age=20 occurs. Insert new document, if record is not found.
// db.student.updateMany({ age: 20 }, { $set: { name: "JJJ", age: 40 } }, { upsert: true })

// (2) To retrieve age and name fields of documents having names “YYY” & “SSS”. Don’t project _id field.
// db.student.find({ name: { $in: ["YYY", "SSS"] } }, { name: 1, age: 1, _id: 0 })


// --------------------------------------------------------------------------------------------


// Q368
// Write a script using frontend technology to have a textfield and a submit button. After clicking
// submit button, insert that value of textfield in database

// main.html:-
// <html>
// <head>
//     <h1>Q368</h1>
// </head>
// <body>
//     <form action="/" method="post">
//         Text:<input type="text" name="txt"><br>
//         <input type="submit" name="submit" value="Submit">
//     </form>
// </body>
// </html>

// main.js:-
// var express = require("express");
// var bodyparser = require("body-parser");
// var url = bodyparser.urlencoded({ extended: false })
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1/LJ').then(() => console.log("connection Done")).catch((err) => console.log(err));
// var db = mongoose.connection
// var app = express()
// app.use(express.static(__dirname, { index: 'main.html' }))

// try {
//     app.post("/", url, (req, res) => {
//         var txt = req.body.txt
//         db.collection('qb').insertOne({"Text": txt}, (err, collection)=> {
//             if (err) throw err;
//         });
//         return res.redirect('main.html');
//     })
// } catch (err) {
//     console.error(`Error in server ${err}`)
// }
// app.listen(3000, () => {
//     console.log("3000")
// })


// --------------------------------------------------------------------------------------------



// Q369
// Write a node.js script to define a schema having fields like name,age,gender,email.
// Apply following validations:
// (1) name field must remove leading/trailing spaces,minimum and maximum length should be 3
// & 10 respectively
// (2) age must accept a value from 1<=age<=100 only.
// (3) Perform Email ID validation on Email field.
// (4) gender must accept values in small letters only and allowed values are “male” & “female”
// only

// const mg=require("mongoose")
// const v= require('validator')

// const { default: validator } = require("validator")
// mg
// .connect('mongodb://localhost:27017/test')
// .then(()=>{console.log("db.connected")})
// .catch(()=>{console.log("error")})

// const register= new mg.Schema({
//     name:{
//         type:String,
//         trim:true,
//         minlength:3,
//         maxlength:10,
//     },
//     age:{
//         type:Number,
//         validate(v){if (v<=0 || v>100) {throw new Error('age must be between 1-100')}}
//     },
//     email :{
//         type: String ,
//         validate:[validator.isEmail(),'invalid Email'],
//         unique: true
//     },
//     gender:{
//         type:String,
//         enum:['male','female'],
//         lowercase:true,
//     }
//     }
// )
// const xyz = mg.model("369",register)
// const save= async()=>{
//     await xyz.insertMany([{
//         name:'divyam',
//         age:19,
//         email:"divyamj212@gmail.com",
//         gender:"male"
//     },
    
// ]).then(()=>{
//     console.log("data inserted")
// })
// .catch(()=>{
//     console.log("error")
// })
// }
// save()
// app.listen(8000)



// --------------------------------------------------------------------------------------------



// Q373
// Consider following student collection:
// [
//  {_id:123433,name: "2DD", surname:"GGG", age:22},
//  {_id:123434,name: "LLL", surname:"RRR", age:2},
//  {_id:123435,name: "KKK", surname:"III", age:32}
//  {_id:123436,name: "ZZZ", surname:"TTTT", age:9}
// ]
// Do as directed:

// (1) List all students whose name starts by digit only.
// db.students.find({ name: /^\d/ })

// (2) List all students whose surname has exactly 4 letters only.
// db.students.find({surname:/^[A-Za-z]{4}$/})

// (3) List only names of students from youngest to oldest.
// db.students.find().sort({age:1}).project({_id:0,name:1})

// (4) List all students whose name has 3-10 letters only. Don't allow digits & underscore.
// db.students.find({name:/^[A-Za-z]{3,10}$/})



// --------------------------------------------------------------------------------------------



// Q387
// Write a node.js script to update a specific document using an _id field. Display the updated
// result on console.
// const mg=require("mongoose")
// mg.connect("0.0.0.0.27013/temp").then(console.log("db connected")).catch(console.log("error"))
// const user=new mg.Schema({name:String,age:Number})
// const user_1=new mg.model("Temp",user)
// const Update=async()=>{
//     await user_1.updateMany({age:{$eq:20}},{$set:{name:"JJJ",age:40}},{upsert:true}).then(console.log("updated"))
// }
// Update()
// const Find=async()=>{
//     await user_1.find({$and:[{name:"YYY"},{name:"SSS"}]},{_id:0})
// }



// --------------------------------------------------------------------------------------------



// Q388
// Write a node.js script to update a specific document using an _id field. Display the updated
// result on console.

// const Delete=async()=>{
//     await user_1.deleteMany({}).then(console.log("deleted"))
// }
// const Find=async()=>{
//     await user_1.find({},{_id:0})
// }



// --------------------------------------------------------------------------------------------



// Q389
// Write a node.js script to insert 4 documents simultaneously in a collection. Assume that schema
// is already created having name(string), surname(string), age(Number), active(Boolean) fields.
// var express = require("express");
// var bodyparser = require("body-parser");
// var url = bodyparser.urlencoded({ extended: false })
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1/omdevdb').then(() => console.log("connection successed"))
//     .catch((err) => console.log(err));

// var db = mongoose.connection
// var app = express()

// try {
//     app.get("/",(req, res) => {
//         const data =[{
//             name:1,
//             surname:1,
//             age:1,
//             active:0
//         },{
//             name:1,
//             surname:1,
//             age:1,
//             active:1
//         },{
//             name:1,
//             surname:1,
//             age:1,
//             active:1
//         },{
//             name:1,
//             surname:1,
//             age:1,
//             active:0
//         }]

//         db.collection('register').insertMany(data, function (err, collection) {
//             if (err) throw err;
//             swal("Error", "Record inserted Successfully!", "error")
//             alert("Record inserted Successfully");
//         });

//         // return res.redirect('index.html');
//     })
// } catch (err) {
//     console.error(`Error in server ${err}`)
// }
// app.listen(3000, () => {
//     console.log("3000")
// })