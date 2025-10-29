import { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [text, setText] = useState("");
  const str = "Welcome to Home Page!!!";

  useEffect(() => {
    let index = 0;
    let id = setInterval(() => {
      // console.log(text);
      setText((prev) => {
        console.log(prev, 'TYPE', index, str[index]);
        // console.log("TYPE", index);
        return prev + str[index++];
      });
      // index++;

      if (index >= str.length - 1) {
        clearInterval(id);
      }
    }, 80);
  }, []);

  return (
    <div className="home-container">
      <p className="typewriter">{text}</p>
    </div>
  );
};

export default Home;
