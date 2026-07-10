import React, { useEffect } from 'react'
import axios from 'axios'

const Api = () => {
    useEffect(()=>{
    axios.get("https://dummyjson.com/products")
    .then((res) => {
        console.log(res.data.products);
    })
    .catch((error) => {
        console.log(error);
    })
    }, [])
  return (
    <div>
      Api
    </div>
  )
}

export default Api
