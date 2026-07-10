import React, { useState } from 'react'

const Like = () => {
    const [liked , setliked]= useState(false)
    const handleLike = ()=> {
        setliked(!liked)
    }

  return (
    <div>
      <button onClick={handleLike}>
        { liked ? " ❤️ Liked":" 🤍 Like"} {/* Ternary Operator */}
      </button>
    </div>
  )
}

export default Like
