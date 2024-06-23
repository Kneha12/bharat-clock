import React from "react";

const ClockSlogan = () => {
  const colors = ["#333", "#555", "#777"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const sloganStyle = {
    textAlign: "center",
    margin: "20px 0",
    fontSize: "1.5rem",
    color: randomColor,
    width:"60vh",
    background: "rgba(255, 255, 255, 0.8)",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <p style={sloganStyle}>
      This is the clock that shows the time in Bharat at all times.
    </p>
  );
};

export default ClockSlogan;
