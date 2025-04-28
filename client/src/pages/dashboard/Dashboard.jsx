import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handlelogout = () => {
    const response = localStorage.removeItem("token");
    console.log("logout", response);
    navigate("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <button onClick={handlelogout}>logout</button>
      </div>
    </div>
  );
};

export default Dashboard;
