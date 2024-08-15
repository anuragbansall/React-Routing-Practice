import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import NotFound from '../Components/Common/NotFound'
import User from '../Components/User/User'
import About from '../Components/About/About'
import Home from '../Components/Home/Home'
import UserDetail from '../Components/User/UserDetail'
import Explore from '../Components/Common/Explore'

function Routing() {
  return (
    <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} >
          <Route path="/user/profile/:name" element={<UserDetail />} />
        </Route>
        <Route path="/:component/explore" element={<Explore />} />
    </Routes>
  )
}

export default Routing