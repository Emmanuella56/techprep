import React from 'react'
import StudyPic from "../../assets/study.jpeg"
import VueLogo from "../../assets/logos_vue.png"
import NodeLogo from "../../assets/Vector (8).png"
import PythonLogo from "../../assets/teenyicons_python-outline.png"
import UxLogo from "../../assets/Group.png"
import HtmlLogo from "../../assets/logos_html-5.png"
import CodeImg from "../../assets/codeone.jpeg"
import CodeImgTwo from "../../assets/codeone.jpeg"
import Planning from "../../assets/planning.jpeg"
import Black from "../../assets/black.jpeg"
import Chisom from "../../assets/Chisom.jpeg"
import Babatunde from "../../assets/Babatunde.jpeg"
import vectorNine from "../../assets/Vector (7).png"
import Girl from "../../assets/Pexels Photo by Anna Nekrashevich.png"
import Vectorcurl from "../../assets/Group 18.png"

function AboutUs() {
    return (
    <div className='relative pt-20'>
        <div className='absolute top-0 bg-purple-100 h-[1000px] md:h-[520px] w-full z-[-10]'></div>
       
       
        <div className='grid px-4 md:grid-cols-2 md:gap-10 md:px-20'> 
            <div>
                
            </div>
            
            <h1 className='text-5xl  py-2'>About Us</h1>
            
            <div className='md:h-[750px] md:w-full'>
                <img src={StudyPic} alt="studywithus"  className=' h-[500px] w-[500px] md:w-full rounded-xl md:h-full'/>
            </div>
           
            <div className='w-full'>
                
                <p className='py-6 text-justify text-[16.5px]'>We are a team of dedicated developers and designers passionate about helping students and professionals excel in technical interviews. Our mission is to provide a comprehensive and effective platform for practicing technical questions, building confidence, and achieving career success.</p>
                <h3 className='w-full text-center md:text-left text-2xl font-bold '>Our Approach</h3>
                <div className='grid md:grid-cols-2 gap-10 py-6 text-center text-xl items-center'>
                    <div className='py-24 px-12 bg-indigo-950  text-white rounded-lg'>AI Powered Questions</div>
                    <div className='py-24 px-12 bg-indigo-950  text-white rounded-lg'>Real Time Feedbacks</div>
                    <div className='py-24 px-12 bg-indigo-950  text-white rounded-lg'>Personalized Practice</div>
                    <div className='py-24 px-12 bg-indigo-950  text-white rounded-lg'>Comprehensive Coverage</div>
                </div>
            </div>
        </div>

        <div className='py-10 px-4 md:px-20 '>
            <h1 className='text-4xl w-full leading-widest font-bold text-center'>Available Stacks</h1>
            
            <div className='flex flex-col gap-20 md:flex-row w-full justify-between py-10 '>
                
                <div className=' md:w-[450px] bg-purple-100 shadow-lg'>
                    <img src={CodeImg} alt="" className='h-[250px] w-full rounded-t-xl' />
                    <p className='font-bold text-2xl leading-widest text-center py-2'>Front-End Development</p>
                    <div className='flex justify-between px-4  py-10 text-2xl'>
                        <div className='flex items-center gap-1'><img src={VueLogo} alt="" className='h-[12px]'/>Vue</div>
                        <div className='flex items-center  gap-1'><img src={HtmlLogo} alt="" className='h-[20px]' />HTML</div>
                    </div>
                </div>

                <div className='md:w-[450px] bg-purple-100 shadow-lg'>
                    <img src={Planning} alt="" className='h-[250px] w-full rounded-t-xl' />
                    <p className='font-bold text-2xl leading-widest text-center py-2'>UI/UX</p>
                    <div className='flex justify-between px-4  py-10 text-2xl'>
                        <div className='flex items-center gap-1'><img src={UxLogo} alt="" className='h-[20px]'/>UX Research</div>
                        {/* <div className='flex items-center gap-1'></div> */}
                    </div>
                </div>

                <div className='md:w-[450px] bg-purple-100 shadow-lg'>
                    <img src={CodeImgTwo} alt="" className='h-[250px] w-full rounded-t-xl' />
                    <p className='font-bold text-2xl leading-widest text-center py-2'>Front-End Development</p>
                    <div className='flex justify-between py-10 px-4 text-2xl'>
                        <div className='flex items-center   gap-1'><img src={PythonLogo} alt="" className='h-[17px]'/>Python</div>
                        <div className='flex items-center  gap-1'><img src={NodeLogo} alt="" className='h-[12px]' />Node</div>
                    </div>
                </div>
            </div>

            <div className='w-full flex py-10 justify-center '>
                <p className='bg-teal-600 px-20 font-bold text-white rounded-md py-2'>Star Quiz</p>
            </div>
        
        </div>


        <div className=' relative px-4 bg-purple-100 w-full md:px-20 py-6'>
            <p className='text-xl w-full text-center'>Testimonials</p>
            <h5 className='font-bold text-xl md:text-3xl w-full md:py-3 text-center'>What Our Happy Users Are Saying</h5>
        
            <div className='flex flex-col gap-20 md:flex-row justify-between py-30'>
                <div className='relative h-[340px] md:h-[300px]  md:w-[450px] bg-white px-4 py-12 shadow-md'>
                    <img src={Black} alt="" className='absolute bottom-[295px]  md:bottom-[260px] md:left-[180px] w-[80px]  h-[80px] rounded-[50px]' />
                    <h1 className='font-bold text-3xl w-full text-center '>Jumoke</h1>
                    <h3 className='text-xl w-full py-2 text-center leading-2'>Back-end Developer</h3>
                    <p className='text-[18px] tracking-wide leading-6 py-4 ' >I can choose specific backend technologies and difficulty levels to focus on my weak areas. The timer feature adds an extra layer of challenge, simulating real-world interview conditions</p>
                </div>

                <div className='relative h-[340px] md:h-[300px]  md:w-[450px] bg-white px-4 py-12 shadow-md'>
                    <img src={Chisom} alt="" className='absolute bottom-[295px]  md:bottom-[260px] md:left-[180px] w-[80px]  h-[80px] rounded-[50px]' />
                    <h1 className='font-bold text-3xl w-full text-center'>Chisom</h1>
                    <h3 className='text-xl w-full py-2 text-center leading-2'>UI/UX</h3>
                    <p className='text-[18px] tracking-wide leading-6 py-4' >CollabHub's UI/UX design quizzes have been invaluable in honing my design thinking skills. The ability to review past quizzes and analyze my performance has helped me identify areas for improvement and build a strong design portfolio.</p>
                </div>

                <div className='relative h-[340px] md:h-[300px]  md:w-[450px] bg-white px-4 py-12 shadow-md'>
                    <img src={Babatunde} alt="" className='absolute bottom-[295px] md:bottom-[260px] md:left-[180px] w-[80px]  h-[80px] rounded-[50px]' />
                    <h1 className='font-bold text-3xl w-full text-center'>Babatunde</h1>
                    <h3 className='text-xl w-full py-2 text-center leading-2'>Front-end Developer</h3>
                    <p className='text-[18px] tracking-wide leading-6 py-4' >TechPrep has been a game-changer for my tech interview prep. The AI-generated questions are spot on, and the real-time feedback has significantly improved my problem-solving skills. I highly recommend it to anyone looking to ace their next technical interview!</p>
                </div>
            </div>

            <img src={vectorNine} alt="" className='absolute right-0 md:bottom-[350px]'/>
        </div>

        <div className='relative flex flex-col-reverse px-6 md:flex-row justify-center md:justify-between items-center md:pt-20 md:px-20'>
            <div className=' '>
                <h1 className='font-bold text-xl md:text-3xl tracking-wide  '>Tired of Falling Short of Technical Interviews?</h1>
                <p className='py-6 text-xl md:text-3xl leading-8'>Give TechPrep a trial and stands out in the Tech job market</p>
                <div className='w-[200px] md:w-[300px] text-center py-6  '>
                    <p className='bg-teal-600 hover:bg-teal-500 hover:scale-110 duration-500 font-bold text-white rounded-md py-3'>Star Quiz Now</p>
                </div>
            </div>
            <div className='w-[600px] ml-0 md:w-[1000px] h-full'>
                <img src={Girl} alt="" className='w-full' />
            </div>
            <div>
                <img src={vectorNine} alt="" className='absolute  left-[700px] top-[100px]' />
                <img src={Vectorcurl} alt="" className='absolute  left-[500px] bottom-[105px]'/>
                <img src={vectorNine} alt="" className='absolute  left-[700px] bottom-[80px]'/>
            </div>
        </div>
    </div>
    )
}

export default AboutUs
