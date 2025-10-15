import React, { useState } from "react";

const FormValidation = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function handleUsernameSubmit(e) {
    e.preventDefault();
    if (username.trim() === "") {
      setUsernameError("Username is required");
    } else {
      setUsernameError("");
      console.log("Form submitted!");
    }
  }

  
  function validateEmail(email) {

    return email.includes("@")

    // const re = /\S+@\S+\.\S+/;
    // return re.test(email);
  }


  function handleEmailSubmit(e) {
    e.preventDefault();
    if (email === "") {
      setEmailError("Email is required");
    } else if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
      console.log("Email form submitted!");
    }
  }

  return (
    <div>
      
      <form id="signupForm" onSubmit={handleUsernameSubmit}>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Submit</button>
        <p id="errorMsg" style={{ color: "red" }}>{usernameError}</p>
      </form>

    
      <form id="emailForm" onSubmit={handleEmailSubmit}>
        <input
          type="text"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
        <p id="emailError" style={{ color: "red" }}>{emailError}</p>
      </form>
    </div>
  );
};

export default FormValidation;
