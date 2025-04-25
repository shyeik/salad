import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

import Header from "./pages/header/Header";
import Register from "./register/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
