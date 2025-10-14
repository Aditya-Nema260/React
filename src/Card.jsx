import React, { useState } from 'react'

const Card = () => {

    let [color,setColor] = useState("red")
  return (
    <div className='card' style={{background : color}} onMouseOut={() => setColor("red")} onMouseEnter={() => setColor("blue") }>



    </div>
  )
}

export default Card