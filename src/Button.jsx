import { useState } from "react";

function Button() {
  const [color, setColor] = useState(
    "linear-gradient(135deg, #ffffff, #b3b3b3ff)"
  );

  const gradients = {
    red: "linear-gradient(135deg, #ff416c, #000000ff)",
    blue: "linear-gradient(135deg, #36d1dc, #010308ff)",
    green: "linear-gradient(135deg, #11998e, #38ef7d)",
    yellow: "linear-gradient(135deg, #f6d365, #3a170dff)",
    purple: "linear-gradient(135deg, #a18cd1, #530b3fff)",
    reset: "linear-gradient(135deg, #ffffff, #b3b3b3ff)",
  };

  function changeBackground(color) {
    console.log("hello");
    setColor(color);
  }

  return (
    <>
      <div
        className="container"
        style={{ backgroundImage: color, height: "100vh" }}
      >
        <button onClick={() => changeBackground(gradients.red)}>Red</button>
        <button onClick={() => changeBackground(gradients.blue)}>Blue</button>
        <button onClick={() => changeBackground(gradients.green)}>Green</button>
        <button onClick={() => changeBackground(gradients.yellow)}>
          Yellow
        </button>
        <button onClick={() => changeBackground(gradients.purple)}>
          Purple
        </button>
        <button onClick={() => changeBackground(gradients.reset)}>Reset</button>
      </div>
    </>
  );
}

export default Button;
