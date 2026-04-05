// import React, { useState } from 'react'
// const App = () => {
//   const [num, setNum] = useState(19);
// const changedValue = () => {

//   setNum(prev => {
//       console.log(prev); // logs previous value
//       return 20;
//     });
 
  
// }
//   return (
//     <div>
//       <h1>{num}</h1>
//       <button onClick={changedValue}>click me</button>
      
//     </div>
//   )
// }
// export default App

//form handling

// import React from 'react'

// const App = () => {
//   const submitted = (e)=>{
//     // e.preventDefault();
//     console.log("form submitted");
 
//   }
//   return (
//     <div>
//       <form onSubmit={(e)=>{
//         submitted(e)
//       }}>
//         <input type="text" placeholder='Enter your name' />
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App

// Two way binding

import React, { use, useState } from 'react'


const App = () => {

const [name, setName] = useState("")

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("form submitted", name);
    setName("")
  }
  return (
    <div>
      <form onSubmit = {(e)=>{
        submitHandler(e)
      }}>
        <input 
        type='text' 
        placeholder='Enter your name' 
        value={name}
        onChange={(e)=>{
          setName(e.target.value);
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App





























