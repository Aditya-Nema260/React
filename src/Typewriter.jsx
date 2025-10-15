import React, { useEffect, useState } from "react";

const Typewriter = () => {
  const [text, setText] = useState("");
  let str = "Welcome to DOM Practice!";

  // useEffect(() => {
  //   let index = 0;
  //   let typeText = () => {
  //     console.log("hello");

  //     if (index < str.length - 1) {
  //       setText((prev) => prev + str[index]);
  //       index++;
  //       setTimeout(typeText, 200);
  //     }
  //   };
  //   typeText();
  // }, []);

  function handleWriter() {
    // console.log();

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
    }, 200);
  }

  return (
    <>
      <div onClick={handleWriter}>Typewriter</div>

      <p>{text}</p>
    </>
  );
};

export default Typewriter;
