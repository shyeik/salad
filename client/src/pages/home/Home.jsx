import React, { useEffect } from "react";
import Header from "../header/Header";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Link to="/login">
        <button>Log in</button>
      </Link>
    </div>
  );
};

export default Home;
