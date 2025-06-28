// 📍 src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyLinks from "./pages/MyLinks";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyLinks />} />
      </Routes>
    </Router>
  );
}

export default App;
