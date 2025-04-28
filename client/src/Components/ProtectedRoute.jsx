import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import * as jwt_decode from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      setIsAuthenticated(false);
    } else {
      try {
        // Decode the token to get the expiration and other user info
        const decodedToken = jwt_decode(token);

        // Check if the token is expired
        const currentTime = Date.now() / 1000;
        if (decodedToken.exp < currentTime) {
          // Token has expired
          localStorage.removeItem("token");
          setIsAuthenticated(false);
        } else {
          // Token is valid
          setIsAuthenticated(true);
        }
      } catch (error) {
        // If JWT decoding fails
        console.error("Token decoding failed", error);
        setIsAuthenticated(false);
      }
    }
  }, []);

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If authenticated, render the protected children components
  return <>{children}</>;
};

export default ProtectedRoute;
