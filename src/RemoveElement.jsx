import React from "react";
import { useState } from "react";

const RemoveElement = () => {
    let [text,setText] = useState("Task 2")
    let [show,setShow] = useState(true)
  return (<>
  
  
    <ul id="tasks">
      <li>Task 1</li>
      {
        show ? <li id="removeMe">{text}</li> : ""
      }
    </ul>
      <button onClick={() => setShow(!show)}>{show ? "Remove" : "Add"}</button>
  
  </>
  );
};

export default RemoveElement;
