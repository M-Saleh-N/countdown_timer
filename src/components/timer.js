import { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds <= 0) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div style={{ fontSize: "2rem", textAlign: "center", marginTop: "50px" }}>
      Time Left: {seconds}s
    </div>
  );
}

export default Timer;
