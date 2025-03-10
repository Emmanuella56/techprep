import React from 'react'

function Nav() {
    return (
        <div className="flex items-center font-bold py-8  px-20 justify-between">
        <h1 className="text-teal-700 text-4xl font-[playfair-display]">TechPrep</h1>
        <ul className="flex  gap-16 text-xl cursor-pointer font-[open-sans] ">
          <li className='click'>Home</li>
          <li>About Us</li>
          <li>Stacks</li>
        </ul>
        <div  className="bg-teal-500  text-center text-xl cursor-pointer px-12 py-2 rounded-xl text-white">
          Start Quiz
        </div>
      </div>
    )
}

export default Nav
