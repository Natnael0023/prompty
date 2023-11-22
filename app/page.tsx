import React from 'react'
import { Feed } from '@components/Feed'

const Home = () => {
  return (
    
    <section className=' w-full flex flex-col gap-7 justify-center items-center borderv mt-20'>
        <h1 className=' xl:text-7xl lg:text-6xl md:text-5xl text-center font-bold text-orange-600'>
            Discover and Share <span> </span>
            <span className=' border border-2 rounded border-sky-400'> AI Prompts  1:16 </span>
        </h1>
        <p className=' text-center text-gray-500 max-w-[50rem]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse architecto perferendis assumenda eius amet beatae, animi aspernatur sit tenetur. Veniam.
        </p>

        <Feed/>
    </section>
  )
}

export default Home