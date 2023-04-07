import React from "react";
import './App.css';
import LeftNavbar from "./Components/LeftNavbar";
import MainContent from "./Components/MainContent";

function App() {

  return (
    <div className="container">
      <div className="headers">
        <LeftNavbar />
      </div>
      <div className="mainContent">
        <MainContent />
      </div>
    </div>
  )
}

export default App
