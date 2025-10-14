import React, { useEffect, useState } from "react";

const Typewriter = () => {
  
  const [text, setText] = useState("");
  let str = "Welcome to DOM Practice!";
  let i = 0;

  
  useEffect(() => {
    const id = setInterval(() => {
      console.log(text);

      setText((prev) => prev + str[i]);
      i++;
      if (i >= str.length - 1) clearInterval(id);
    }, 90);
  }, []);

  return (
    <>
      <div>Typewriter</div>
      <p>{text}</p>
    </>
  );
};

export default Typewriter;
