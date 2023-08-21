import "./assets/css/App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import NewTemplate from "./screens/NewTemplate/index";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NewTemplate />} />
      </Routes>
    </div>
  );
}

export default App;
