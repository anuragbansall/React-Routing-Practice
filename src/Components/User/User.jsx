import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
  return (
    <div>
      <div className='bg-zinc-100 w-[80%] sm:w-[60ch] md:w-[80ch] mx-auto mt-10 p-4'>
        <h2 className='text-2xl font-semibold mb-4'>User</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto possimus eius, inventore aliquam accusamus eligendi accusantium rerum autem quis minima.</p>
        <div className="flex flex-wrap gap-2 mt-4">
          <Link to="/user/profile/anurag" className="bg-slate-400 text-white px-4 py-1 rounded font-semibold">Anurag</Link>
          <Link to="/user/profile/kanak" className="bg-slate-400 text-white px-4 py-1 rounded font-semibold">Kanak</Link>
          <Link to="/user/profile/aarav" className="bg-slate-400 text-white px-4 py-1 rounded font-semibold">Aarav</Link>
        </div>
        <Link to="/user/explore" className='bg-blue-500 inline-block text-white px-4 py-2 font-semibold mt-4 rounded-md'>Explore more</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default User