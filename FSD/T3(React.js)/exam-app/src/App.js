export default function App() {
  
    // Write react js script to perform the tasks as asked below.
    // Add an array of objects which contains name and branch(CSE,IT,CE) of students. 
    // Apply filter to find students who are from CSE branch. And display name of all studens of CSE branch 
    // using map function. 
      const arr=[{Name:"Dwij",Branch:"CSE"},{Name:"Vraj",Branch:"CE"},{Name:"Brijesh",Branch:"CSE"},{Name:"Jyoti",Branch:"IT"},{Name:"Shubham",Branch:"CSE"}]
      const sortedArr=arr.filter((values)=>values=='CSE'?true:false)
      
      return(
        <>
        {sortedArr.map((val)=><li>{val.Name}</li>)}
        </>
      )
    };