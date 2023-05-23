// Q75. Write a node.js script to print query string of URL on console as well as on
// file using ES6 Callback.
const fs = require("fs");
const url = require("url");
const urlString = "https://example.com/path?param1=value1&param2=value2";
const parsedUrl = url.parse(urlString, true);
const queryString = parsedUrl.search;
console.log("Query string:", queryString);
fs.writeFile("Q75_txt.txt", queryString, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("Query string written to file successfully!");
  }
});
