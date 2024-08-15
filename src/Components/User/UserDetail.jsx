import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function UserDetail() {

    const {name} = useParams()
    const navigate = useNavigate()

    const handleGoBack = () => {
        navigate(-1)
    }

  return (
    <div className='bg-zinc-100 rounded-md w-[80%] sm:w-[60ch] mb-8 md:w-[80ch] mx-auto my-10 p-4'>
        <div className='h-[6rem] w-[6rem] md:h-[8rem] md:w-[8rem] rounded-full mx-auto bg-zinc-300 overflow-hidden'>
        </div>
        <h2 className='text-2xl text-center font-semibold my-4 capitalize'>{name}</h2>
        <p className='my-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto possimus eius, inventore aliquam accusamus eligendi accusantium rerum autem quis minima.
        </p>
        <p className='my-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia magni odio esse distinctio veritatis dicta? Vitae impedit incidunt eaque nesciunt quas delectus totam illo eos, debitis nostrum repudiandae sunt minus aperiam. Voluptatibus ex consequatur voluptate, veritatis vero minima consectetur odit doloremque voluptatum at placeat id amet, in inventore quia accusamus.
        </p>
        <button className='bg-blue-500 text-white font-semibold px-4 py-1' onClick={handleGoBack}>Go Back</button>
    </div>
  )
}

export default UserDetail