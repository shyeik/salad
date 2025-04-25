import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <Link to="/register">To Register</Link>
      </nav>
    </>
  );
};

export default Header;
