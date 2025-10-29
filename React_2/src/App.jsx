import React from "react";
import { Routes, Route } from "react-router";
import Home from "./component/Home";
import About from "./component/About";
import Counter from "./Counter";
import { CounterProvider } from "./CounterContext";
import Reducer from "./component/Reducer";

const App = () => {
  return (
    <CounterProvider>
      <Reducer/>
      <Counter />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </CounterProvider>
  );
};

export default App;
