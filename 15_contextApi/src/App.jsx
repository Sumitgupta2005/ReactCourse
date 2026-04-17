import React from 'react'
import Nav1 from "./Components/Nav1";
import Nav2 from "./Components/Nav2";
import { useContext } from 'react';
import { ThemeDataContext } from './Context/ThemeContext';

const App = () => {

  const data = useContext(ThemeDataContext)
  

  return (
    <div className='navbar'>
      <Nav1 data = {data}/>
      <Nav2 />
      
    </div>
  )
}

export default App
