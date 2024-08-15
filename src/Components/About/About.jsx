import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='bg-zinc-100 w-[80%] sm:w-[60ch] md:w-[80ch] mx-auto mt-10 p-4'>
        <h2 className='text-2xl font-semibold mb-4'>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit culpa excepturi hic inventore pariatur eaque, dolor, aliquam iusto iste quia magnam vero ipsum sunt dicta itaque fugiat animi eveniet aperiam veritatis commodi? Cum hic deserunt earum velit quod dicta eum.</p>
        <Link to="/about/explore" className='bg-blue-500 inline-block text-white px-4 py-2 font-semibold mt-4 rounded-md'>Explore more</Link>
    </div>
  )
}

export default About