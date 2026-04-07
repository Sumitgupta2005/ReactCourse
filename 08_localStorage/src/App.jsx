
// const App = () => {

//     localStorage.setItem('name', 'John Doe')
//     localStorage.setItem('class', 'chati')
//     localStorage.setItem('bap la naam', 'kallu khan')

//   return <div>App</div>
// }

// export default App

import React from 'react'

const App = () => {
  // const naam = localStorage.getItem('name')
  // console.log(naam)
  // localStorage.removeItem('name')
  const data = {
    name: 'sumit gupta',
    class: 'chati',
    roll: 12
  }
  
  
  localStorage.setItem('data', JSON.stringify(data))
  const dataa = JSON.parse(localStorage.getItem('data'))
  console.log(dataa);
  
  return (
    <div>
      
    </div>
  )
}

export default App
