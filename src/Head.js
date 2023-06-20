import React from 'react'
import './head.css'

const Head = ({showusers,items,showpost,showcomments}) => {
  return (
    <main>
        
        <form onSubmit={(e)=>e.preventDefault()}>
        
            <button id='user' onClick={()=>showusers()}>User</button>
            <button id='post' onClick={()=>showpost()}>Post</button>
            <button id='comment' onClick={()=>showcomments()}>Comment</button>
        
    </form>
    
    <pre>{JSON.stringify(items, null, 100)}</pre>
   
    </main>
  )
}

export default Head