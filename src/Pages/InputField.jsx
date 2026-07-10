import React, { useState } from 'react'

const InputField = () => {
    const [data, setdata]=useState("")
    const handleChange = (e)=>{
        setdata(e.target.value)
    }
  return (
    <div>
      <input className='border-1 ' type='text' value={data} onChange={handleChange}/> 
      <p>{data}</p>

    </div>
  )
}

export default InputField
