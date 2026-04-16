import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Foot from './Pages/Foot'
import NotFound from './Pages/NotFound'
import AboutMe from './Pages/AboutMe'
import Qualifications from './Pages/Qualifications'
import Courses from './Pages/Courses'
import CourseDetail from './Pages/CourseDetail'
import { Routes, Route } from 'react-router-dom'
import { Navigate } from "react-router-dom";
import React from 'react'

const App = () => {

  return (
    <>
      <Navbar />
      <Footer />
      <Routes>

        <Route path='/' element={<Navigate to="/Home" />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />}>
          <Route path='AboutMe' element={<AboutMe />} />
          <Route path='Qualifications' element={<Qualifications />} />
        </Route>
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Foot' element={<Foot />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/Courses/:userId' element={<CourseDetail />} />
      </Routes >


    </>
  )
}

export default App
