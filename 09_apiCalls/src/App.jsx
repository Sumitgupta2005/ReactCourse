// import React from 'react'

// const App = () => {
//   const fetchData = async () => {
//     const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(data)
//   }
//   return (
//     <div>
//       <button onClick={fetchData}>Fetch Data</button>
      
//     </div>
//   )
// }

// export default App

import React from 'react'

const App = () => {
  const fetchData = async () => {
    const response = await fetch('https://picsum.photos/v2/list')
    console.log(response)
  }
  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      
    </div>
  )
}

export default App
