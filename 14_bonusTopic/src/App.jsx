import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'

const App = () => {

  const [Theme, setTheme] = useState('dark')


  return (
    <div>
      <h1>Theme is {Theme}</h1>
      <Navbar theme={Theme} settheme={setTheme}/>
    </div>
  )
}

export default App
