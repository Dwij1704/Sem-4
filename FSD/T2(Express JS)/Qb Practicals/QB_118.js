// Write an express.js script to define one JSON array of 3 objects having members name and age. Names must be sorted according to age. If user requests “sorted Names” URL, then all names 
// should be printed according to ascending order of age.
const exp=require('express');
const app=exp();
app.use('/sortNames',(req,res)=>{
    const obj=[{'Name':'Dwij','Age':12},{'Name':'Jyoti','Age':11},{'Name':'Shubham','Age':13},{'Name':'Brijesh','Age':15}]
    const sortedAge=obj.sort((a,b)=>{return a.Age-b.Age})
    // Sort By Name Alphabatically:
    // const sortedName=obj.sort((a,b)=>{return a.Name.localeCompare(b.Name)})
    res.send(sortedAge)
})
app.listen(8080,()=>{console.log('http://localhost:8080')})