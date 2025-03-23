import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Paper1 from "./components/Paper1";
import Paper2 from "./components/Paper2";
import Paper3 from "./components/Paper3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paper1" element={<Paper1 />} />
        <Route path="/paper2" element={<Paper2 />} />
        <Route path="/paper3" element={<Paper3 />} />
      </Routes>
    </Router>
  );
}

export default App;
