import React from 'react'
import { useState } from 'react'
// import { FaBarsStaggered } from "react-icons/fa6";
// import { IoCloseOutline } from "react-icons/io5";

function Nav() {
  const [dropDown, setDropDown] = useState(false)
    return (
      <>
        <div className="hidden md:flex fixed left-0 top-0 nav z-30 w-full items-center font-bold py-6  px-20 justify-between">
              <h1 className="text-teal-700 text-4xl font-[playfair-display]">TechPrep</h1>
              <ul className="flex  gap-16 text-xl cursor-pointer font-[open-sans] ">
                <li className='click'>Home</li>
                <li className='click'>About Us</li>
                <li className='click'>Stacks</li>
              </ul>
              <div  className="bg-teal-500  text-center text-xl cursor-pointer px-12 py-2 rounded-xl text-white">
                Start Quiz
              </div>
        </div>

        <div className="md:hidden flex fixed left-0 top-0 nav z-30 w-full px-4 font-bold py-6  justify-between">
          
          <h1 className="text-teal-700 text-3xl font-[playfair-display]">TechPrep</h1>
          <div onClick={() => setDropDown(!dropDown)} className='cursor-pointer'>{dropDown? "X" : "*"}
              {/* <FaBarsStaggered /> */}
              {/* <IoCloseOutline /> */}
          </div>
        </div>
        <ul className={`md:hidden  fixed top-0 right-[-30px] h-[600px] w-[220px] bg-linear-gradient z-50 shadow-xl text-xl cursor-pointer font-[open-sans] ${dropDown ? "translate-x-0 linear duration-500" : "linear duration-500 translate-x-full"}`}>
              <li className=' p-4 text-white hover:bg-teal-900 hover:scale-105  cursor-pointer  hover:shadow-xl duration-500 ease-in-out 200' onClick={() => setDropDown(false)}>X</li>
              <li className='p-4 text-white hover:bg-teal-900 hover:scale-105  cursor-pointer hover:shadow-xl duration-500 ease-in-out 200'>Home</li>
              <li className='p-4 text-white hover:bg-teal-900  hover:scale-105  cursor-pointer hover:shadow-xl duration-500 ease-in-out 200'>About Us</li>
              <li className='p-4 text-white hover:bg-teal-900 hover:scale-105  cursor-pointer hover:shadow-xl duration-500 ease-in-out 200'>Stacks</li>
              <li className="bg-teal-500  p-4 hover:bg-teal-900 hover:scale-105 text-xl cursor-pointer duration-500   text-white">Start Quiz</li>
          </ul>
      </>
      )
      
       
}

export default Nav
