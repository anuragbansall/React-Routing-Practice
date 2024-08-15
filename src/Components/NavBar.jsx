import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <nav className='font-semibold flex justify-center gap-8 py-8 px-12 text-xl'>
        <NavLink to="/" className={(e) => {
            return e.isActive ? "text-blue-500" : "text-black"
        }} >Home</NavLink>
        <NavLink to="/user" className={(e) => {
            return e.isActive ? "text-blue-500" : "text-black"
        }} >User</NavLink>
        <NavLink to="/about" className={(e) => {
            return e.isActive ? "text-blue-500" : "text-black"
        }} >About</NavLink>
    </nav>
  )
}

export default NavBar