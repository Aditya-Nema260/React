import { useEffect, useState } from "react";
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

function App() {
  const [data, setData] = useState([]);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
  async function fetchData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");
    let jsonData = await res.json();
    localStorage.setItem("postData", JSON.stringify(jsonData));
    setData(jsonData);

    console.log(jsonData);
  }
  fetchData();
}, []);
  // useEffect(() => {
  //   async function fetchData() {
  //     let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     let jsonData = await res.json();
  //     localStorage.setItem("postData", jsonData);
  //     let data = localStorage.getItem("postData");
  //     setData(jsonData);

  //     console.log(data.keys);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div>
      <FormValidation/>
      <RemoveElement/>
      <Notification/>
      <Typewriter/>
      <Card></Card>
      <Button />
      <Feild />
      {/* <Timer /> */}
      <Effect />
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
          setCounter((prev) => prev + 1);
          setCounter((prev) => prev + 1);
          setCounter((prev) => prev + 1);
          setCounter((prev) => prev + 1);
        }}
      >
        +
      </button>
      <h3>{counter}</h3>
      <button
        onClick={() => {
          setCounter(counter - 1);
          setCounter(counter - 1);
          setCounter(counter - 1);
          setCounter(counter - 1);
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
      {data.map((obj) => (
        <h3 key={obj.id}>{obj.title}</h3>
      ))}
      <Greeting name="Aladdin" age={15} />
      <Greeting name="Jhoe" age={20} />
    </div>
  );
}

export default App;

// import React from "react";
// import "./App.css";
// import Greeting from "./Greeting";
// import Button from "./Button";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((res) => res.json())
//       .then((jsonData) => {
//         this.setState({ data: jsonData });
//       });
//   }

//   render() {
//     return React.createElement(
//       "div",
//       null,
//       React.createElement(Button, null),

//       ...this.state.data.map((obj) =>
//         React.createElement("h3", { key: obj.id }, obj.title)
//       ),

//       React.createElement(Greeting, { name: "AlicE", age: 15 }),
//       React.createElement(Greeting, { name: "Bob", age: 20 })
//     );
//   }
// }

// export default App;
