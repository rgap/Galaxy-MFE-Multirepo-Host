import React from "react";

// Mock Button component for standalone mode
export const Button = ({ children, className = "", style = {}, ...props }) => {
  const defaultStyle = {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    ...style,
  };

  return (
    <button
      {...props}
      className={`btn ${className}`}
      style={defaultStyle}
      onMouseOver={e => {
        e.target.style.backgroundColor = "#0056b3";
      }}
      onMouseOut={e => {
        e.target.style.backgroundColor = "#007bff";
      }}
    >
      {children}
    </button>
  );
};

// Export other common components as needed
export default {
  Button,
};
