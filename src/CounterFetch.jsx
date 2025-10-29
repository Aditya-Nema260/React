import React from 'react'
import { useEffect, useState } from "react";

const CounterFetch = () => {

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

    </div>
  )
}

export default CounterFetch