import React, { useEffect, useState } from "react";

const Timer = () => {
  let [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => {
        console.log(prev + 1);
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <h2
      style={{
        color: count % 2 == 0 ? "green" : "red",
        backgroundImage: "linear-gradient(135deg, #93ad00ff, #000000ff)",
      }}
      className="container1"
    >
      Timer = {count}
    </h2>
  );
};

export default Timer;
