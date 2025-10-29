import { useReducer } from "react";

const Reducer = () => {
  
    // Counter reducer
  const counterReducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return 0;
      default:
        return state;
    }
  };

  const [count, countDispatch] = useReducer(counterReducer, 0);

  // Input Reducer
  const inputReducer = (state, action) => {
    switch (action.type) {
      case "ChangeVal":
        return {
          ...state,
          [action.field]: action.value,
        };
      case "reset":
        return initialInput;
      default:
        return state;
    }
  };

  const initialInput = {
    name: "",
    password: "",
    email: "",
  };

  const [inputs, inputDispatch] = useReducer(inputReducer, initialInput);

  const handleChange = (e) => {
    inputDispatch({
      type: "ChangeVal",
      field: e.target.name,
      value: e.target.value,
    });
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => countDispatch({ type: "increment" })}>+</button>
      <button onClick={() => countDispatch({ type: "decrement" })}>-</button>
      <button onClick={() => countDispatch({ type: "reset" })}>reset</button>

      <hr />

      <input
        type="text"
        name="name"
        value={inputs.name}
        onChange={handleChange}
        placeholder="name"
      />{" "}
      <span>{inputs.name}</span>
      <br />

      <input
        type="email"
        name="email"
        value={inputs.email}
        onChange={handleChange}
        placeholder="email"
      />{" "}
      <span>{inputs.email}</span>
      <br />

      <input
        type="password"
        name="password"
        value={inputs.password}
        onChange={handleChange}
        placeholder="password"
      />{" "}
      <span>{inputs.password}</span>
    </div>
  );
};

export default Reducer;
