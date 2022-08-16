import React from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";
import Survey from "./components/Survey page/Survey";
import Home from "./components/Home page/Home";
import Response from "./components/Response Page/Response";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/response" element={<Response />}></Route>
        <Route path="/survey" element={<Survey />}></Route>
      </Routes>
      ;
    </div>
  );
};

export default App;
