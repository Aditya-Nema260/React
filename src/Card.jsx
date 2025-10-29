import React, { useState } from 'react'
import {Link,Outlet} from "react-router"        
                  

const Card = () => {

    let [color,setColor] = useState("red")
  return (

    <>
    <div className='card' style={{background : color}} onMouseOut={() => setColor("red")} onMouseEnter={() => setColor("blue") }>
    </div>
    
      <Link to = "card1">Card 1</Link>
      <Link to = "card2">Card 2</Link>
      <Outlet/>
    
    </>
  )
}

export default Card