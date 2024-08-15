import React from 'react'
import { useParams } from 'react-router-dom'

function Explore() {

    const {component} = useParams()
    console.log(component);
    
    

  return (
    <div className='min-h-screen w-full bg-zinc-100 p-4'>
      <h2 className='text-4xl text-center font-semibold capitalize'>Explore {component}</h2>
      <p className='w-[90%] mx-auto my-8'>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, quis rem. Reiciendis, obcaecati earum. Minima atque reiciendis, velit nostrum ullam perferendis sint impedit ea sequi quam quia porro necessitatibus sit tenetur dolorem expedita eligendi sapiente provident harum cum ad ducimus saepe fugiat? Sapiente dolor praesentium obcaecati debitis error illo neque.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam fuga eos vero atque doloremque esse provident adipisci consequuntur est repudiandae nihil corporis placeat cumque perspiciatis veritatis debitis dolorum sunt doloribus similique voluptate, modi facilis in? Qui explicabo minima repellendus reiciendis.
      </p>
      <p className='w-[90%] mx-auto my-8'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores omnis optio ratione, culpa doloremque, deserunt voluptatum expedita esse obcaecati ullam sequi magni voluptatibus, ad perspiciatis commodi ipsam reprehenderit repellat dicta odit! Praesentium ipsum officia minima harum ipsa rerum quae explicabo amet, qs asperiores nisi qui, labore ullam nesciunt. Ipsum earum animi aut accusamus dolores, inventore excepturi officia omnis aperiam. Obcaecati fugiat maiores perferendis eos, tempora non. Earum, impedit? Ex.
      </p>
      <p className='w-[90%] mx-auto my-8'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro voluptatem expedita alias? Inventore beatae molestiae qui sapiente iusto, optio provident quidem fuga. Aspernatur sapiente sit velit nam incidunt corrupti at voluptate saepe quod. Deserunt natus maiores non molestias aperiam magni magnam quasi fugiat alias quam harum adipisci consequuntur saepe ea illo quos repellat eveniet dolore labore, impedit animi laborum optio quo. Minus aliquam ullam suscipit veniam officia sequi vitae fugiat dignissimos velit architecto dolorem ipsa, consequatur numquam at explicabo cum sunt. Placeat dolore eaque aut nam suscipit accusantium alias eos ex, repellendus doloribus deserunt id eius in reiciendis sint fugiat?
      </p>
    </div>
  )
}

export default Explore