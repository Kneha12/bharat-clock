import React from "react";

const ClockHeading = () => {
  const hours = new Date().getHours();
  const isDayTime = hours >= 6 && hours < 18;
  const headingStyle = {
    textAlign: "center",
    height:"120px",
    fontSize: "4.5rem",
    padding: "20px",
    background: isDayTime ? "linear-gradient(to right, #17a2b8, #0056b3)" : "linear-gradient(to right, #343a40, #1c1c1c)",
    color: "white",
    fontWeight: "bolder",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return <h1 style={headingStyle}>Bharat Clock</h1>;
};

export default ClockHeading;
