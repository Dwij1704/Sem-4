// Q24. Write one JSON string with date property (yyyy-mm-dd) and print date in
// India standard time. 
var jsonData = '{"date": "2023-05-22"}';
var parsedData = JSON.parse(jsonData);
var date = new Date(parsedData.date);
// Directly To IST:-
// var formattedDate = date.toLocaleString('en-IN', timeZone= 'Asia/Kolkata');
var year = date.getFullYear();
var month = (date.getMonth() + 1).toString().padStart(2, '0');
var day = date.getDate().toString().padStart(2, '0');
var formattedDate = year + '-' + month + '-' + day;
console.log(formattedDate);