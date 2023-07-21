import "./App.css";
import img1 from './logo.svg'
import img2 from './Certificate.png'
import img3 from './Poster.png'
import Example2 from './Example 2/Example2';
import Example3 from './Example3/Example3';
import Example4 from "./Example4/Example4";
import Example5 from "./Example5/Example5";
import ClickEvent from "./Events/ClickEvent";
import TypeEvent from "./Events/TypeEvent";
import DoubleClick from './Events/DoubleClick'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

function MainContent() {
  const location = useLocation();
  if (location.pathname === '/' || location.pathname === '') {
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
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
      );
  }

  return null;
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
function App() {
  return (
    <BrowserRouter>
      <MainContent />
      <Routes>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
