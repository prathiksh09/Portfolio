import React, { useState } from 'react'

const Toggle = () => {
    const [visible , setVisible]= useState(true)
    const handleVisibility = ()=>{
        setVisible(!visible)

    }
  return (
    <div>
      {visible && <p>Hai Welcome</p>}
      <button onClick={handleVisibility}>Toggle</button>
    </div>
  )
}

export default Toggle
