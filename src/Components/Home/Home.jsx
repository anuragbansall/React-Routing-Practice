import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='bg-zinc-100 w-[80%] sm:w-[60ch] md:w-[80ch] mx-auto mt-10 p-4'>
        <h2 className='text-2xl font-semibold mb-4'>Home</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, omnis cum atque et sequi iusto aut accusantium aperiam distinctio, possimus provident laudantium animi dolore modi quis facere at tempore fugiat.</p>
        <Link to="/home/explore" className='bg-blue-500 inline-block text-white px-4 py-2 font-semibold mt-4 rounded-md'>Explore more</Link>
    </div>
  )
}

export default Home