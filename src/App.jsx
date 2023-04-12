import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LeftNavbar from "./Components/LeftNavbar";
import MainContent from "./Components/MainContent";
import CreateContent from "./Components/CreateContent";
import ViewContent from "./Components/ViewContent";
import UpdateContent from "./Components/UpdateContent";

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <div className="headers">
          <LeftNavbar />
        </div>
        <div className="mainContent">
          <Routes>
            <Route exact path="/" element={<MainContent/>} />
            <Route path="/create-content" element={<CreateContent/>} />
            <Route path="/view-content" element={<ViewContent/>} />
            <Route path="/view-content/:id/update-content" element={<UpdateContent/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
