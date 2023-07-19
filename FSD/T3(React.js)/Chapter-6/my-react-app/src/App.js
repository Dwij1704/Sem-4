import "./App.css";
import Example2 from './Example 2/Example2';
import Example3 from './Example3/Example3';
import Example4 from "./Example4/Example4";
import Example5 from "./Example5/Example5";
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
        {/* <Route path="/student" element={<StudentPage />} />
        <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
