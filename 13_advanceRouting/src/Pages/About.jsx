import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className='aboutMe'>
        <Link to="/About/AboutMe">About Me</Link>
        <Link to="/About/Qualifications">Qualifications</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default About
