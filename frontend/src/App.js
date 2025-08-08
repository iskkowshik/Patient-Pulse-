// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login"; // Adjust path if needed
import Signup from "./Components/Signup";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="*" element={<h2>Page Not Found</h2>} />
        <Route path="/register" element={<Signup/>}/>
      </Routes>
    </Router>
  );
}

export default App;
