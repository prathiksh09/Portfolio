import React, { useEffect } from 'react'
import axios from 'axios'

const Users = () => {
    useEffect(()=>{
        axios.get("https://dummyjson.com/users")
        .then((res)=>{
            console.log(res.data.users);

     } )
     .catch((error)=>{
        console.log(error)
     })
    },[])
  return (
    <div>
      Users
    </div>
  )
}

export default Users
