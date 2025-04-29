import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { decodeJwt } from "jose";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // <== null means "not yet checked"

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setIsAuthenticated(false);
      return;
    }

    try {
      const decodedToken = decodeJwt(token);
      const currentTime = Date.now() / 1000;
      if (decodedToken.exp < currentTime) {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
      } else {
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Token decoding failed:", error);
      setIsAuthenticated(false);
    }
  }, []);

  // Wait until authentication status is checked
  if (isAuthenticated === null) return null;

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
