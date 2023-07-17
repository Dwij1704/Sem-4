import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

function Lecture1Example1() {
  return <div>Routing Example</div>;
}

function StudentPage() {
  return <div>Student Page</div>;
}

function AboutPage() {
  return <div>About Us</div>;
}

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
            <a className="btn btn-primary" href="lecture1/Example1">Example 1</a>
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

function App() {
  return (
    <BrowserRouter>
      <MainContent />
      <Routes>
        <Route path="/lecture1/Example1" element={<Lecture1Example1 />} />
        {/* <Route path="/student" element={<StudentPage />} />
        <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
