import "./App.css";
import img1 from './logo.svg'
import img2 from './Images/Certificate.png'
import img3 from './Images/Poster.png'
import Example2 from './Example 2/Example2';
import Example3 from './Example3/Example3';
import Example4 from "./Example4/Example4";
import Example5 from "./Example5/Example5";
import ClickEvent from "./Events/ClickEvent";
import TypeEvent from "./Events/TypeEvent";
import DoubleClick from './Events/DoubleClick';
import Newspaper from './NavBar Files/Newspaper';
import SpaceManager from './NavBar Files/Space Manager';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import {useReducer} from 'react';
import {useEffect} from 'react';
import axios from 'axios'
// BrowserRouter: It is used to keep your UI in synchrounous with the URL it is the parent
// component that is used to store all other Router Components.

// Routes: An Application can have Multiple Routes, they are choosen based on the best match
// instead of being traversed in order.

// Route: It is used to render some UI when its path matches the current URL.
function MainContent() {
    return (
    <>
  <div className="container">
    <div className="row justify-content-center align-items-center" style={{height:100+"vh"}}>
      <div className="col-md-4">
        <div className="card">
          <div className="button-container">
            <h2 className="heading">Lecture 1</h2>
            <a className="btn btn-primary" href="lecture1/Example1">Example 1 Routing</a>
            <h2 className="heading">Lecture 2</h2>
            <a className="btn btn-primary" href="lecture2/Example2">Example 2 Module Import</a>
            <a className="btn btn-primary" href="lecture2/Example3">Example 3 Task-1</a>
            <a className="btn btn-primary" href="lecture2/Example4">Example 4 Props</a>
            <a className="btn btn-primary" href="lecture2/Example5">Example 5 JSON Prop</a>
            <h2 className="heading">Lecture 3</h2>
            <a className="btn btn-primary" href="lecture3/OnClick">OnClick Event</a>
            <a className="btn btn-primary" href="lecture3/OnChange">Type Event</a>
            <a className="btn btn-primary" href="lecture3/OnDoubleClick">Double Click Event</a>
            <a className="btn btn-primary" href="lecture3/Maps">Map Example</a>
            <a className="btn btn-primary" href="lecture3/Task1">Task 1</a>
            <a className="btn btn-primary" href="lecture3/Task2">Task 2</a>
            <a className="btn btn-primary" href="lecture3/Task3">Task 3</a>
            <h2 className="heading">Lecture 4</h2>
            <a className="btn btn-primary" href="lecture4/ListAndKeys">List And Keys</a>
            <a className="btn btn-primary" href="lecture4/Filter">Filter</a>
            <a className="btn btn-primary" href="lecture4/Task4">Task 4</a>
            <a className="btn btn-primary" href="lecture4/NavBar">NavBar</a>
            <h2 className="heading">Lecture 5</h2>
            <a className="btn btn-primary" href="lecture5/Hooks">Hooks</a>
            <a className="btn btn-primary" href="lecture5/Task5">Task 5</a>
            <a className="btn btn-primary" href="lecture5/Task6">Task 6</a>
            <a className="btn btn-primary" href="lecture5/Task7">Task 7</a>
            <a className="btn btn-primary" href="lecture5/Task8">Task 8</a>
            <h2 className="heading">Lecture 6</h2>
            <a className="btn btn-primary" href="lecture6/Reducer">Reducer</a>
            <a className="btn btn-primary" href="lecture6/Task9">Task 9</a>
            <a className="btn btn-primary" href="lecture6/Task10">Task 10</a>
            <a className="btn btn-primary" href="lecture6/Task11">Use Effect</a>
            <h2 className="heading">Lecture 8</h2>
            <a className="btn btn-primary" href="lecture8/ReactForm">React Form</a>
            <a className="btn btn-primary" href="lecture8/Task12">Task 12</a>
            <a className="btn btn-primary" href="lecture8/Task13">Task 13</a>
            <h2 className="heading">Lecture 9</h2>
            <a className="btn btn-primary" href="lecture9/Axios">Axios</a>
            <a className="btn btn-primary" href="lecture9/Task14">Task 14</a>
            <a className="btn btn-primary" href="lecture9/Task15">Task 15</a>
            <a className="btn btn-primary" href="lecture9/Task16">Task 16</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
      );
  }
function Lecture1Example1() {
  // Routing Example
  return <div>Routing Example</div>;
}
function Lecture2Example2(){
  // Module Import Example
  return(
    <div>
      <Example2/>
      {console.log("Hello World")}
    </div>
    )
}
function Lecture2Example3(){
  // React Script to create a component which contains <h1>Name</h1>, <b>Date</b>, <p>Time</p>
  return(
    <>
    <Example3/>
    </>
  )
}
function Lecture2Example4(){
  // Props Example
  return(
    <>
    <Example4 name="Dwij" marks="25"/>
    </>
  )
}
function Lecture2Example5(){
  // JSON Prop Example
  const car = {
    img: "https://stimg.cardekho.com/images/carexteriorimages/360x240/Audi/Audi-R8/047.jpg",
    name: "Audi",
    model: "A8",
    color: "Black",
    price: "1.5 Crore",
    engine: "V8",
    power: "500hp",
    torque: "700Nm",
    transmission: "8-speed Automatic",
    fuel: "Petrol",
    topSpeed: "250kmph",
    acceleration: "3.5sec",
    seats: "4",
    doors: "4",
    length: "5.3m",
    width: "2.1m",
    height: "1.5m",
    wheelbase: "3.1m",
    groundClearance: "0.1m",
    bootSpace: "500L",
    fuelTankCapacity: "80L",
    tyreSize: "255/45 R19",
    wheelSize: "19 Inch",
    wheelType: "Alloy",
    mileageCity: "8kmpl",
    mileageHighway: "12kmpl",
    mileageOverall: "10kmpl",
  }
  return(
    <>
    <Example5 car={car}/>
    </>
    )
}
function Lecture3OnClick(){
  // Onclick Event Handler
  return(
    <>
    <ClickEvent/>
    </>
  )
}
function Lecture3OnChange(){
  // Onchange Event Handler
  return(
    <>
    <TypeEvent/>
    </>
  )
}
function Lecture3OnDoubleClick(){
  // OnDoubleclick Event Handler
  return(
    <>
    <DoubleClick/>
    </>
  )
}
function Lecture3Maps(){
  const arr=[1,2,3,4]
  return(
    <>
    {arr.map((values)=>{
      return <h2>Elements are:{values}</h2>
    })}
    </>
  )
}
function Lecture3Task1(){
  // Task-1 Value To Upper
  const arr=['dwij','jeel']
  return(
    <>
    {arr.map((values)=>{
      return(<h2>{values.toUpperCase()}</h2>)
    })}
    </>
  )
}
function Lecture3Task2(){
  // Task-2 We have Array of numbers and multiply each numbers by 5 use map to display
  const arr=[1,2,3,4,5,6,7,8,9,10]
  return(
    <>
    {arr.map((values)=>{
      return(<h2> {values}x5 is {values*5}</h2>)
    })}
    </>
  )
}
function Lecture3Task3(){
  // Task-3 Array Of Objects to display image
  const arr=[{id:1,image:img1},{id:2,image:img2},{id:3,image:img3}]
  return(
    <>
    {arr.map((values)=>{
      return <img src={values.image} height="300" width="300"></img>
    })}
    </>
  )
}
function Lecture4ListKeys(){
  // List And Keys Example using Array of Objects and map function.
  const arr=[{id:1,name:'Dwij'},{id:2,name:'Jeel'},{id:3,name:'Shubham'}]
  return(
    <>
    <center>  
    {arr.map((values)=>{
      return <li key={values.id}>{values.name}</li>
    })}
    </center>
    </>
  )
}
function Lecture4Filter(){
  // Filter Method loops through an array and filters out elements that don't pass a certain condition
  const  arr=Array.from(Array(20).keys())

  const jodd=arr.filter((values)=>{
    return values%2!=0
  })
  return(
    <>
    <center>
    {jodd.map((values)=>{
      return <h2>{values}</h2>
    })}
    </center>
    </>
  )
}
function Lecture4Task4(){
  // Filter Prime Numbers from 1 to 20 using filter method example
  const arr=Array.from(Array(21).keys())
  const prime=arr.filter((values)=>{
      if (values <= 1) return false;
      if (values <= 3) return true;
      for (let i = 2; i <= Math.sqrt(values); i++) {
        if (values % i === 0) {
          return false;
        }
      }
        
      return true;
    })
    return(
      <>
      <center>
      {prime.map((values)=>{
        return <h2>{values}</h2>
      })}
      </center>
      </>
    )
  }
function Lecture4NavBar(){
  return(
    <>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
            <div class="container-fluid">
                <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#demo">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="demo">
                    <ul class="navbar-nav">  
                      <li class="nav-item">
                            <a href="/" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="NavBar/SpaceManager" class="nav-link">Space Manager</a>
                        </li>
                        <li class="nav-item">
                            <a href="NavBar/Newspaper" class="nav-link">Newspaper</a>
                        </li>
                     </ul>
                </div>
        </div>
    </nav>
    </>
  )
}
function Lecture5Hooks(){
  // Hooks:
  // 1. Hooks can only be called inside react function components.
  // 2. Hooks can only be called at the top level of components.
  // 3. Hooks can not be conditional.
  // Types of Hooks:
  //  i. useState 
  //    - import {useState} from 'react' 
  //    - const[currentState,function to update state]=useState(initialState)
  //    - It is a function that returns a stateful value and a function to update it.
  const [count,setCount]=useState(0)
  const [name,setName]=useState('Dwij')
  const [arr,setArr]=useState([1,2,3,4,5])
  const [obj,setObj]=useState({name:'Dwij',age:19})
  const [bool,setBool]=useState(true)
  return(
    <>
    <center>
    <h2>Count is {count}</h2>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>
    <h2>Name is {name}</h2>
    <button onClick={()=>setName('Jeel')}>Change Name</button>
    <h2>Array is {arr}</h2>
    <button onClick={()=>setArr([1,2,3,4,5,6,7,8,9,10])}>Change Array</button>
    <h2>Object is {obj.name} and {obj.age}</h2>
    <button onClick={()=>setObj({name:'Jeel',age:20})}>Change Object</button>
    <h2>Boolean is {bool.toString()}</h2>
    <button onClick={()=>setBool(!bool)}>Change Boolean</button>
    </center>
    </>
  )
}
function Lecture5Task5(){
  // Value should be between 0-10
  const [count,setCount]=useState(0)
  return(
    <>
    <center>
    <h2>Count is {count}</h2>
    <button onClick={()=>count!=10?setCount(count+1):alert("Exceeds 10")}>Increment</button>
    <button onClick={()=>count!=0?setCount(count-1):alert("Exceeds 0")}>Decrement</button>
    </center>
    </>
  )
}
function Lecture5Task6(){
  // Change text and colour also add a show/hide button
  const [text,setText]=useState('LJ University')
  const [color,setColor]=useState('red')
  const [state,setState]=useState(true)
  return(
    <>
    <center>
    <h2 style={{color:color}}>{text}</h2>
    <h1 style={{display:state?'block':'none'}}>React Hook</h1>
    <button onClick={()=>text=='LJ University'?setText('Pols aa gayi pols 🚨'):setText('LJ University')}>Change Text</button>
    <button onClick={()=>color=='red'?setColor('blue'):setColor('red')}>Change Color</button>
    <button onClick={()=>setState(!state)}>{state?'Show':'Hide'}</button>
    </center>
    </>
  )
}
function Lecture5Task7(){
  // Change Images on click
  const[image,setImage]=useState(img1)
  return(
    <>
    <center>
      <img style={{height:400+'px',width:400+'px'}} src={image}></img>
      <br></br>
      <button onClick={()=>{image==img1?setImage(img2):setImage(img1)}}>Click To Change</button>
    </center>
    </>
  )
}
function Lecture5Task8(){
  // 2 input fields, and display it on browser
  const[text1,setText1]=useState('')
  const[text2,setText2]=useState('')
  return(
    <>
    <h1>{text1}{text2}</h1>

    {/* Using onChange */}
    <input type="text" onChange={(event)=>setText1(event.target.value)} placeholder="Enter First Name"></input>
    <input type="text" onChange={(event)=>setText2(event.target.value)} placeholder="Enter Last Name"></input>

    {/* Using onClick in Button */}
    <input type="Button" onClick={()=>{setText1(document.getElementsByTagName('input')[0].value)
    setText2(document.getElementsByTagName('input')[1].value)}} value="Click me"></input>
    </>
  )
}
function Lecture6Reducer(){
  const [state, dispatch] = useReducer((state, action) => {
    return action.type === 'increment' ? state + 1 : state;
  }, 0);
  
  return(
    <>
    <button onClick={()=>dispatch({type:'increment'})}>Click</button>
    <h1>{state}</h1>
    </>
  )
}
function Lecture6Task9(){
  // To increase the value by 5 while click on button start value is 20 use useReduces to perform task
  const [state, dispatch] = useReducer((state, action) => {
    return action.type === 'increment' ? state + 5 : state;
  }, 20);
  
  return(
    <>
    <button onClick={()=>dispatch({type:'increment'})}>Click</button>
    <h1>{state}</h1>
    </>
  )
}
function Lecture6Task10(){
  // Increment and Decrement
  const [state, dispatch] = useReducer((state, action) => {
    return action.type === 'increment' ? state + 2 : action.type=== 'decrement' ? state - 1 : state;
  }, 0);
  
  return(
    <>
    <center>
    <br></br>
    <button onClick={()=>dispatch({type:'increment'})}>➕</button>
    <h1>{state}</h1>
    <button onClick={()=>dispatch({type:'decrement'})}>➖</button>
    </center>
    </>
  )
}
function Lecture6Task11(){
  // Using UseEffect
  // 1. Add 2 Buttons and increment Count by 1 with each click
  // 2. Display alert box as an effect on a specific conditon
  //    - Effect will be triggered only when page is rendered for the first time.
  //    -    ||    ||   ||    ||   when button is clicked
  const [count,setCount]=useState(0)
  const [calculation,setCalculation]=useState(0)
  useEffect(()=>{alert("Clicked")} ,[])
  return(
    <>
    <button onClick={()=>{setCount(count+1)}}>Count {count}</button>
    <br></br>
    <button onClick={()=>{setCalculation(calculation+1)}}>Calculate {calculation}</button>
    </>
  )
}

function Lecture8ReactForm(){
  const [name,setName]=useState("")
  const [text,setTextArea]=useState("")
  return(
    <>
    <div class="container">
      <form onSubmit={(e)=>{
        e.preventDefault();
        alert(`Welcome ${name}, text is ${text}`)
      }}>
      <div class="mb-3">
        <label for="TextArea" class="form-label">Text Area</label>
        <textarea class="form-control" name="TextArea" onChange={(e)=>{setTextArea(e.target.value)}}></textarea>
      </div>
      <label for="" class="form-label">Name</label>
      <input type="text" class="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Name"></input>
      <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    </>
  )
}
function Lecture8Task12(){
  // Create a react form to select any type of Pizza size using radio
  const [Pizza, setPizza] = useState("Nothing")
  return(
    <>
    <form>
      <div class="form-check form-check-inline">
        <input class="form-check-input" onChange={(e)=>setPizza(e.target.value)} type="radio" name="pizza" id="Margherita" value="Margherita"></input>
        <label class="form-check-label" for="Margherita">Margherita</label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input" onChange={(e)=>setPizza(e.target.value)} type="radio" name="pizza" id="Thincrust" value="Thin Crust"></input>
        <label class="form-check-label" for="Thincrust">Thin Crust</label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input" onChange={(e)=>setPizza(e.target.value)} type="radio" name="pizza" id="Cheesy7" value="Cheesy-7"></input>
        <label class="form-check-label" for="Cheesy7">Cheesy-7</label>
        </div>
    </form>
    <p>You Selected {Pizza}</p>
    </>
  )
}
function Lecture8Task13(){
  // Create a react form for username, age, email, pass, confirm pass(Functional), alert them
  const [user, setUser] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [cpass, setCPass] = useState("")
  let passpat=/^[A-Z].*$/;
  return(
    <>
    <form onSubmit={(e)=>{e.preventDefault();
      pass==cpass?(passpat.test(pass)?alert(user+" "+age+" "+email):alert("Enter a valid password")):alert("Password doesn't match")}}>
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" onChange={(e)=>{setUser(e.target.value)}} class="form-control" name="username" id="username" aria-describedby="helpId" placeholder="Enter Username"></input>
      </div>
      <div class="mb-3">
        <label for="Email" class="form-label">Email</label>
        <input type="email" onChange={(e)=>{setEmail(e.target.value)}} class="form-control" name="Email" id="Email" aria-describedby="emailHelpId" placeholder="abc@mail.com"></input>
      </div>
      <div class="mb-3">
        <label for="Age" class="form-label">Age</label>
        <input type="text" onChange={(e)=>{setAge(e.target.value)}} class="form-control" name="Age" id="Age" aria-describedby="helpId" placeholder="Enter Your Age"></input>
      </div>
      <div class="mb-3">
        <label for="Password" class="form-label">Password</label>
        <input type="password" onChange={(e)=>{setPass(e.target.value)}} class="form-control" name="Password" id="Password" placeholder="Enter Password"></input>
      </div>
      <div class="mb-3">
        <label for="CPassword" class="form-label">Confirm Password</label>
        <input type="password" onChange={(e)=>{setCPass(e.target.value)}} class="form-control" name="CPassword" id="CPassword" placeholder="Confirm Password"></input>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </>
  )
}
function Lecture9Axios(){
  // Axios: It is a library which is used to make request to an API
  //        Return Data from the API and then do things with that data in a 
  //        react Application, it is very popular HTTP client which allows us
  //        to make HTTP requests from the browser.
  //        useEffect is used to make it working
    const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const fetchChatCompletion = () => {
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const apiKey = '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'; // Replace with your actual OpenAI API key

    const requestData = {
      messages: [
        {
          role: 'system',
          content: 'You are a helpful assistant.'
        },
        {
          role: 'user',
          content: inputText
        }
      ]
    };

    axios.post(apiUrl, requestData, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    })
      .then(response => {
        setResponseText(response.data.choices[0].message.content);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <div>
      <h1>OpenAI GPT-3 Chat Completion in React</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter your message"
      />
      <button onClick={fetchChatCompletion}>Get Chat Completion</button>
      <p><strong>Response:</strong> {responseText}</p>
    </div>
  );
}
function Lecture9Task14(){
  const [image, setImage] = useState("")
  return(
    <center>
      <img src={image} height={'250px'} width={'250px'}></img> <br></br>
      <button onClick={()=>{
        axios.get("https://dog.ceo/api/breeds/image/random").then((response)=>{
          const res=response.data
          setImage(`${res.message}`)
        }).catch((error)=>console.error(error))
      }}>Generate Image</button>
    </center>
  )
}
function Lecture9Task15(){
  const [image, setImage] = useState("")
  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random").then((response)=>{
          const res=response.data
          setImage(res.message)
        }).catch((error)=>console.error(error))
  })
  
  return(
    <center>
      <img src={image} height={'250px'} width={'250px'}></img>
    </center>
  )
}
function Lecture9Task16(){
  const [allTask,setTasks]=useState([])
  const [task, setTask] = useState('')
  function deleteTask(values){
    setTasks(
        allTask.filter((task)=>{
            if (task!== values){
                return true;
            }
            else{
                return false;
            }
        })
    )    
}
  return(
    <>
    <form onSubmit={(e)=>{
      e.preventDefault()
      setTasks([...allTask,task])}}>
    <input type="text" onChange={(e)=>setTask(e.target.value)}></input>
    <input type="submit" value='submit'></input>
    {allTask.map((values)=>{
      return (
      <>
      <h2>{values}</h2>
      <button onClick={deleteTask(values)}>{values}</button>
      </>
    )})}
    </form>
    </>
  )
}
// To-Do List
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/lecture1/Example1" element={<Lecture1Example1 />} />
        <Route path="/lecture2/Example2" element={<Lecture2Example2 />} />
        <Route path="/lecture2/Example3" element={<Lecture2Example3 />} />
        <Route path="/lecture2/Example4" element={<Lecture2Example4 />} />
        <Route path="/lecture2/Example5" element={<Lecture2Example5 />} />
        <Route path="/lecture3/OnClick" element={<Lecture3OnClick />} />
        <Route path="/lecture3/Onchange" element={<Lecture3OnChange />} />
        <Route path="/lecture3/OnDoubleClick" element={<Lecture3OnDoubleClick />} />
        <Route path="/lecture3/Maps" element={<Lecture3Maps />} />
        <Route path="/lecture3/Task1" element={<Lecture3Task1 />} />
        <Route path="/lecture3/Task2" element={<Lecture3Task2 />} />
        <Route path="/lecture3/Task3" element={<Lecture3Task3 />} />
        <Route path="/lecture4/ListAndKeys" element={<Lecture4ListKeys />} />
        <Route path="/lecture4/Filter" element={<Lecture4Filter />} />
        <Route path="/lecture4/Task4" element={<Lecture4Task4 />} />
        <Route path="/lecture4/NavBar" element={<Lecture4NavBar />} />
        <Route path="/lecture4/NavBar/NewsPaper" element={<Newspaper />} />
        <Route path="/lecture4/NavBar/SpaceManager" element={<SpaceManager />} />
        <Route path="/lecture5/Hooks" element={<Lecture5Hooks />} />
        <Route path="/lecture5/Task5" element={<Lecture5Task5 />} />
        <Route path="/lecture5/Task6" element={<Lecture5Task6 />} />
        <Route path="/lecture5/Task7" element={<Lecture5Task7 />} />
        <Route path="/lecture5/Task8" element={<Lecture5Task8 />} />
        <Route path="/lecture6/Reducer" element={<Lecture6Reducer />} />
        <Route path="/lecture6/Task9" element={<Lecture6Task9 />} />
        <Route path="/lecture6/Task10" element={<Lecture6Task10 />} />
        <Route path="/lecture6/Task11" element={<Lecture6Task11 />} />
        <Route path="/lecture8/ReactForm" element={<Lecture8ReactForm />} />
        <Route path="/lecture8/Task12" element={<Lecture8Task12 />} />
        <Route path="/lecture8/Task13" element={<Lecture8Task13 />} />
        <Route path="/lecture9/Axios" element={<Lecture9Axios />} />
        <Route path="/lecture9/Task14" element={<Lecture9Task14 />} />
        <Route path="/lecture9/Task15" element={<Lecture9Task15 />} />
        <Route path="/lecture9/Task16" element={<Lecture9Task16 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
