const fs = require('fs');
fs.writeFile('help.txt', "OK1", (err) => {
    if (err) throw err;
    fs.appendFile('help.txt', "OK2", (err) => {
        if (err) throw err;
        fs.readFile('help.txt', 'utf-8', (err, data)=>{
            if (err) throw err;
            console.log(data)
            console.log("Thanks")
        })
    })
})