import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
<>
    <div className="navbar">
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/contact'>Contact</Link>
    </div>

    <div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
    </>
  )
}

export default App
