import "./App.css";
import Greeting from "./Greeting";
import Button from "./Button";
import Effect from "./Effect";
import Feild from "./Feild";
import Timer from "./Timer";
import Card from "./Card";
import Typewriter from "./Typewriter";
import Notification from "./Notification";
import RemoveElement from "./RemoveElement";
import FormValidation from "./FormValidation";
import { Routes, Route } from "react-router";
import Home from "./Home";
import Navbar from "./Navbar";
import CounterFetch from "./CounterFetch";
import Card2 from "./NestedRoutes/Card2";
import Card1 from "./NestedRoutes/Card1";
import DynamicRoutes from "./DynamicRoutes/DynamicRoutes";


function App() {


  
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formValidation" element={<FormValidation />} />
        <Route path="/removeElement" element={<RemoveElement />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/typewriter" element={<Typewriter />} />
        <Route path="/card" element={<Card />}>
          <Route path="card1" element={<Card1 />} />
          <Route path="card2" element={<Card2 />} />
        </Route>
        <Route path="/button" element={<Button />} />
        <Route path="/feild" element={<Feild />} />
        <Route path="/effect" element={<Effect />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/counterFetch" element={<CounterFetch />} />
        <Route path="/dynamicRoutes/:name/:age" element={<DynamicRoutes />} />
      </Routes>
    </div>
  );
}

export default App;
