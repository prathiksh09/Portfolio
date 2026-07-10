import axios from 'axios'
import React, { useEffect } from 'react'

const Cart = () => {
    useEffect(()=>{
        axios.get("https://dummyjson.com/carts")
        .then((res)=>{
            console.log(res.data.carts);
        })
        .catch((error)=>{
            console.log(errror)
        })
    },[])
  return (
    <div>
      Cart
    </div>
  )
}

export default Cart
