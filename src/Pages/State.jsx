import React, { useEffect, useState } from 'react'

const Staste = () => {
    const [data, setdata]=useState(0);
    useEffect(() => {
      console.log("State Changeed");
    }, [data]);

    const handleIncrement= ()=>{
      console.log('');
      setdata(data + 1)
    }
  
    const [data1, setdata1]=useState(0);
    const handleDecrement =() =>{
      console.log("Button is clicked")
      setdata1(data1 - 1)
    }
  return (
    <div>
      <p className='text-7xl'>{data}</p>
      <button onClick={handleIncrement} className='w-20 h-7 bg-red-400'>Increment</button>
      <div>
        
      <p className='text-7xl'>{data1}</p>
      <button onClick={handleDecrement} className='w-20 h-7 bg-red-400'>Decrment</button>
    </div>
    </div>
    
  )
}

export default Staste
