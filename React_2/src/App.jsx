import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { Routes,Route } from "react-router";
import Home from "./component/Home";
import About from "./component/About";
const App = () => {
  let [count, setCount] = useState(0);
  let [data, setData] = useState(0);

  const prevCount = useRef(0);

  useEffect(() => {
    prevCount.current = count;
    console.log(count);
  }, [count]);  

  return (
    <>
      <div>Count : {count}</div>
      <button onClick={() => setCount((prev) => prev + 1)}>count++</button>


      <h1>prevCount : {prevCount.current}</h1>

      <Routes>
        <Route path = "/home" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/>
      </Routes>
    </>
  );
};

export default App;
