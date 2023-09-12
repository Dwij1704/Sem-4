use("LJ")

Q352
Write commands to perform the following tasks on an employee collection having fields
name, age & joiningDate:
(1) Insert 3-4 records in the collection.
(2) List all employees who joined before 1st January 2010.
(3) Update the name of the employee to "WWW" whose joiningDate is "05-05-2015"

(1) Insert 3-4 records in the collection
db.employee.insertMany([
    { name: "Dwij", age: 19, joiningDate: "2004-02-31" },
    { name: "Shubham", age: 20, joiningDate: "2007-05-05" },
    { name: "Jyoti", age: 21, joiningDate: "2009-05-05" },
    { name: "Brijesh", age: 22, joiningDate: "2015-05-05" }
])

(2) List all employees who joined before 1st January 2010
db.employee.find({ "joiningDate": { $lt: "2010-01-01" } })

(3) Update the name of the employee to "WWW" whose joiningDate is "05-05-2015"
db.employee.updateOne({ 'joiningDate': "2015-05-05" }, { $set: { name: "WWW" } })


--------------------------------------------------------------------------------------------


Q353
Write commands to perform following tasks on employee collection having fields having
name,age & joiningDate:
(1) Delete all records having joiningDate before 1st January, 2010.
(2) List all employees having age>50 years.
(3) List only 1st employee having age>60 years.
db.employee.insertMany([
    { name: "Omdev", age: 19, joiningDate: "2004-02-31" },
    { name: "Jainam", age: 20, joiningDate: "2007-05-05" },
    { name: "Jatin", age: 21, joiningDate: "2009-05-05" },
    { name: "Amisha", age: 50, joiningDate: "2015-05-05" },
    { name: "Mosam", age: 60, joiningDate: "2017-09-05" },
    { name: "Rohan", age: 70, joiningDate: "2019-05-05" },
    { name: "Divyam", age: 55, joiningDate: "2019-10-31" }
])

(1) Delete all records having joiningDate before 1st January, 2010.
db.employee.deleteMany({ "joiningDate": { $lt: "2010-01-01" } })

(2) List all employees having age>50 years.
db.employee.find({ "age": { $gt: 50 } })

(3) List only 1st employee having age>60 years.
db.employee.find({ "age": { $gt: 60 } }).limit(1)


--------------------------------------------------------------------------------------------


Q354
Write commands to perform following tasks on employee collection having fields having
name,age & joiningDate:
(1) Update the name="Senior citizen" having age>60 years.
(2) Update the name="JKL" having age=20 years. Insert this record, if it is not found.
(3) Retire all employees by deleting senior citizens from collection.

(1) Update the name="Senior citizen" having age>60 years.
db.employee.updateMany({ "age": { $gt: 60 } }, { $set: { name: "Senior citizen" } })

(2) Update the name="JKL" having age=20 years. Insert this record, if it is not found.
db.employee.updateOne({ "age": 20 }, { $set: { name: "JKL" } }, { upsert: true })

(3) Retire all employees by deleting senior citizens from collection.
db.employee.deleteMany({ "age": { $gt: 60 } })


--------------------------------------------------------------------------------------------


Q355
Write commands to perform following tasks on employee collection having fields having
name,age & joiningDate:
(1) Count no. of employees having age>=60 years.
(2) List all employees in descending order of names having names "ABC", "PQR", "XYZ".
(3) List all employees whose age lies between 25 to 50 years excluding all rest of the fields


(1) Count no. of employees having age>=60 years.
db.employee.find({ "age": { $gte: 60 } }).count()

(2) List all employees in descending order of names having names "ABC", "PQR", "XYZ".
db.employee.insertMany([
    { name: "ABC", age: 19, joiningDate: "2004-02-31" },
    { name: "PQR", age: 20, joiningDate: "2007-05-05" },
    { name: "XYZ", age: 21, joiningDate: "2009-05-05" },
])
db.employee.find({ name: { $in: ["ABC", "PQR", "XYZ"] } }).sort({ name: -1 })

(3) List all employees whose age lies between 25 to 50 years excluding all rest of the fields
db.employee.find({ "age": { $gte: 25, $lte: 50 } }, { name: 1, age: 1, joiningDate: 1, _id: 0 })


--------------------------------------------------------------------------------------------


Q356
Map following SQL queries to MongoDB query:
(1) alter table people add joiningDate datetime
(2) alter table people drop column joiningDate
(3) select age,name from people where status="PH"
(4) select * from people where status!="PH"
(5) select name from people order by age desc

(1) alter table people add joiningDate datetime
db.people.updateMany({}, { $set: { joiningDate: "" } })

(2) alter table people drop column joiningDate
db.people.updateMany({}, { $unset: { joiningDate: "" } })

(3) select age,name from people where status="PH"
db.people.find({ status: "PH" }, { age: 1, name: 1, _id: 0 })

(4) select * from people where status!="PH"
db.people.find({ status: { $ne: "PH" } })

(5) select name from people order by age desc
db.people.find({}, { name: 1, _id: 0 }).sort({ age: -1 })


--------------------------------------------------------------------------------------------


Q357
Map following SQL queries to MongoDB query:
(1) update employee set name="TTT" where age not in {12,33,44,55}
(2) select count(*) from employee where age<>23
(3) update employee set age=age+10

(1) update employee set name="TTT" where age not in {12,33,44,55}
db.employee.updateMany({ age: { $nin: [12, 33, 44, 55] } }, { $set: { name: "TTT" } })

(2) select count(*) from employee where age<>23
db.employee.find({ age: { $ne: 23 } }).count()

(3) update employee set age=age+10
db.employee.updateMany({}, { $inc: { age: 10 } })


--------------------------------------------------------------------------------------------


Q367
Consider following student collection:
[
 {_id:123433,name: "SSS",age:22},
 {_id:123434,name: "YYY",age:2},
 {_id:123435,name: "PPP",age:32},
]
Do as directed:
(1) Update name=”JJJ” and age=40, where age=20 occurs. Insert new document, if record is
not found.
(2) To retrieve age and name fields of documents having names “YYY” & “SSS”. Don’t
project _id field.

(1) Update name=”JJJ” and age=40, where age=20 occurs. Insert new document, if record is not found.
db.student.updateMany({ age: 20 }, { $set: { name: "JJJ", age: 40 } }, { upsert: true })

(2) To retrieve age and name fields of documents having names “YYY” & “SSS”. Don’t project _id field.
db.student.find({ name: { $in: ["YYY", "SSS"] } }, { name: 1, age: 1, _id: 0 })


--------------------------------------------------------------------------------------------


Q368
Write a script using frontend technology to have a textfield and a submit button. After clicking
submit button, insert that value of textfield in database

main.html:-
<html>
<head>
    <h1>Q368</h1>
</head>
<body>
    <form action="/" method="post">
        Text:<input type="text" name="txt"><br>
        <input type="submit" name="submit" value="Submit">
    </form>
</body>
</html>

main.js:-
var express = require("express");
var bodyparser = require("body-parser");
var url = bodyparser.urlencoded({ extended: false })
var alert = require("alert")
var path = __dirname

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/LJ').then(() => console.log("connection Done")).catch((err) => console.log(err));

var db = mongoose.connection
var app = express()
app.use(express.static(path, { index: 'main.html' }))

try {
    app.post("/", url, (req, res) => {
        var txt = req.body.txt

        var data = {
            "Text": txt
        }
        db.collection('qb').insertOne({"Text": txt}, (err, collection)=> {
            if (err) throw err;
        });
        return res.redirect('main.html');
    })
} catch (err) {
    console.error(`Error in server ${err}`)
}
app.listen(3000, () => {
    console.log("3000")
})