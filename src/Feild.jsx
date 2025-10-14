import React, { useState } from "react";

const Feild = () => {
  const [text, setText] = useState("");

  function handleChange(e) {
    console.log(text);
    setText(e.target.value);
  }

  return (
    <div className="container1">
      <h1 style={{ color: "white" }}>Input</h1>
      <input value={text} onChange={handleChange} />
      <h2 style={{color:"white"}}>{text}</h2>
    </div>
  );
};

export default Feild;
