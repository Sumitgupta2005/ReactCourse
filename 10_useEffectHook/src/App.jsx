import React, { useState, useEffect } from 'react'

const App = () => {

  const [name, setName] = useState(10)

useEffect(function(){
  console.log('useEffect running')
}, [name])

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={()=>{
        setName(name+1)
      }}>Click Me</button>
    </div>
  )
}

export default App
