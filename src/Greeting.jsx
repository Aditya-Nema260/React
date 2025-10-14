function Greeting(props) {

    console.log(props);
    
  return <h1>Hello, {props.name} Age : {props.age}!</h1>;
}

export default Greeting;