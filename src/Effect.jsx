import { useState } from "react"
import { useEffect } from "react"


const Effect = () => {

    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Called",count);
    
    },[count])
  return (

    <>
    
    <h1>{count}</h1>
    <button onClick={() => setCount((prev) => prev + 1)}>Inc</button>
    </>
  )
}

export default Effect