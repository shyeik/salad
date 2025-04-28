import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

import Header from "./pages/header/Header";
import Register from "./register/Register";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
