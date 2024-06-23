import React, { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  const [fontSize, setFontSize] = useState(window.innerWidth > 600 ? "1.5rem" : "1rem");

  useEffect(() => {
    console.log("Interval has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const handleResize = () => {
      setFontSize(window.innerWidth > 600 ? "1.5rem" : "1rem");
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const timeStyle = {
    textAlign: "center",
    width:"50vh",
    margin: "20px 0",
    fontSize: fontSize,
    color: "#555",
    background: "rgba(141, 176, 254, 0.5)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  return (
    <p style={timeStyle}>
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default CurrentTime;
