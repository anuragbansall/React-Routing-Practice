import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import NotFound from '../Components/NotFound'
import User from '../Components/User'
import About from '../Components/About'
import Home from '../Components/Home'

function Routing() {
  return (
    <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/about" element={<About />} />
    </Routes>
  )
}

export default Routing