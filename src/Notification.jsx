import React from "react";

import { useState } from "react";

const Notification = () => {
  const [text, setText] = useState("This is a notification");
  const [val , setVal] = useState(false)






  function handleClick(e) {
    setVal(true)
    setTimeout(() => {
      setVal(false)
    }, 5000);
  }
  return (
    <>
    <br />
      <button onClick={handleClick}>click</button>
      <div>{val ? text : ""}</div>
    </>
  );
};

export default Notification;
