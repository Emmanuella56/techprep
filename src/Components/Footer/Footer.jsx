import React from 'react'
// import { BiLogoTelegram } from "react-icons/bi";




function Footer() {
    return (
        <div className='bg-indigo-950 text-white px-4 py-10 md:px-20'>
            <div className='grid justify-center w-full '>
                <p className='text-md px-5'>Subcribe to our newsletter</p>
                <div className='flex'>
                    <input type="text" placeholder='rechaeltimi@gmail.com' className='px-5 py-4 w-[250px] md:w-[600px] text-xs text-slate-200 rounded-l-[40px] border border-slate-700 '/>
                    <div className='px-5 py-4 w-[70px] md:w-[100px] text-xs text-slate-200 text-center rounded-r-[40px] bg-teal-500  border border-slate-700 '>
                        {/* <BiLogoTelegram  /> */}
                                    **
                    </div>
                </div> 
            </div>
           
            <div className='flex flex-col px-4 py-10 md:flex-row justify-around md:gap-13 md:py-20 md:px-20'>
               <h1 className='text-2xl md:text-[35px] font-bold'>TechPrep</h1> 
                    <div>
                        <h1  className='pt-6 text-xl md:text-[25px] md:py-3 font-bold '>Quick Link</h1>
                        <ul>
                            <li className=''>Home</li>
                            <li className='py-2 md:py-3'>About Us</li>
                            <li >Stack</li>
                        </ul>
                    </div>
                    <div>
                        <h1  className='pt-6 text-xl md:text-[25px] md:py-3 font-bold '>Support</h1>
                        <ul>
                            <li>Contact Us</li>
                            <li className='py-2 md:py-3'>Help Center</li>
                        </ul>
                    </div> 
                    <div>
                        <h1  className='pt-6 text-xl md:text-[25px] md:py-3 font-bold '>Legal</h1>
                        <ul>
                            <li>Private Policy</li>
                            <li className='py-2 m:py-3'>Terms and Condition</li>
                        </ul>
                    </div> 
                    <div>
                        <h1  className='pt-6 text-xl md:text-[25px] md:py-3 font-bold '>Contact Us</h1>
                        <ul>
                            <li>Techprep@gmail.com</li>
                            <li className='py-2 md:py-3'>23491263541189</li>
                        </ul>
                    </div>
               
            </div>
            <p className='w-full text-center text-slate-500 text-xs'>Techprep &copy; (2024) TechPrep</p>
        </div>
    )
}

export default Footer
