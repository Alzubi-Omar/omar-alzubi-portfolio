import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-message">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="not-found-home-link">
        Go back to Home
      </Link>
    </div>
  );
};

export default NotFound;
