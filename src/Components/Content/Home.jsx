import HomeImage from "../../assets/HomeImage.png"
import vector from "../../assets/Vector.png"
import vectorone from "../../assets/Vector (1).png"
import vectortwo from "../../assets/Vector (2).png"
import vectorthree from "../../assets/Vector (3).png"
import vectorfour from "../../assets/Vector (4).png"
import vectorfive from "../../assets/Vector (5).png"
import vectorsix from "../../assets/Vector (6).png"
import grouped from "../../assets/Group 14.png"
import imgone from "../../assets/imgone.jpeg"
import imgtwo from "../../assets/imgtwo.jpeg"
import imgthree from "../../assets/imgthree.jpeg"
import imgfour from "../../assets/imgfour.jpeg"
import imgfive from "../../assets/imgfive.jpeg"













function Home() {
    return (
        <div className="pt-[190px] px:6 md:px-10 h-[1700px] md:h-full md:overflow-hidden">
            <img src={vector} alt="star" className="absolute left-[10px] top-[50px] md:top-[150px] md:left-[80px]" />
            <img src={vectorone} alt="star1" className="absolute left-[20px] top-[280px] md:top-[260px] md:left-[310px]" />
            <img src={vectortwo} alt="star2"  className="hidden md:flex absolute right-[595px] top-[80px]"/>
            <img src={vectorthree} alt="star3" className="hidden md:flex absolute right-[465px] top-[205px] h-[120px] w-[360px]"/>
            <img src={vectorfour} alt="star4" className="absolute right-[0] top-[340px]"/>
            <img src={grouped} alt="groupedvector" className="absolute top-[80px] right-[-5px] w-[350] h-[210px]  md:right-[100px] md:top-[140px] md:h-[150px] md:w-[345px]" />
            
            <div>

            
                    <div className="flex flex-col px-4 md:px-0 mt-[-70px] md:mt-[-30px] md:items-center  ">
                        <h1 className="font-bold text-[42px] md:text-6xl md:w-[500px] md:tracking-wider md:leading-20  ">Level Up Your Skill In Minutes</h1>
                        <p className=" tracking-wider pt-7 md:pt-10 text-md md:w-[600px] md:text-lg">Our AI -powered quizzed are designed to stimulate real world interview scenerios, helping you practice effectively and efficiently</p>
                    </div>

                <div className="grid justify-center pt-10  md:flex px-10 md:justify-between md:gap-20 w-full md:pt-16">

                   <div className="w-full ">
                    
                        <div className="flex flex-col justify-center bg-teal-950 text-white w-[316px] shadow-xl px-4 py-2 items-center text-center h-[300px] rounded-2xl ">
                            <p className="text-xl">Get non-repetitive questions with our AI</p>
                            <p className="border-8 m-4 rounded-[50%] border-teal-400 text-2xl p-10  ">10k</p>    
                            <p>questions based on your stack</p>
                        </div>
                    </div> 

                    <div className="w-full">
                        <img src={HomeImage} alt="image" className="mt-[-40px] md:mt-[-50px] md:w-[479px] h-[578px] " />
                    </div>

                    <div className="relative w-full mt-[-10px] md:mt-0 ">
                        <div className="relative bg-teal-600  text-white w-[316px] shadow-xl px-4 py-2 items-center text-center h-[233px] rounded-xl">
                            <div className=" flex flex-col items-center justify-center absolute bg-cyan-800 text-white origin-top-right -rotate-5 right-[40px] md:top-[40px] w-[316px] shadow-xl px-4 py-2 items-center text-center h-[233px] rounded-xl">
                            <div>
                                    <p className=" text-4xl ">200+</p>
                                    <p className=" text-4xl ">Active users</p>
                                    <div className="relative flex">
                                        <img src={imgone} alt="" className="absolute right-[140px] w-[40px] h-[40px] rounded-[50px] border-2 border-stone-300"/>
                                        <img src={imgtwo} alt="" className="absolute right-[107px] w-[40px] h-[40px] rounded-[50px] border-2 border-stone-300" />
                                        <img src={imgthree} alt="" className="absolute right-[74px] w-[40px] h-[40px] rounded-[50px] border-2 border-stone-300"/>
                                        <img src={imgfour} alt="" className="absolute right-[42px] w-[40px] h-[40px] rounded-[50px] border-2 border-stone-300" />
                                        <img src={imgfive} alt="" className="absolute right-[10px] w-[40px] h-[40px] rounded-[50px] border-2 border-stone-300" />
                                    </div>
                                </div>    
                            </div>
                        </div>
                    
                        <div className="flex flex-col absolute justify-center items-center top-[280px] md:top-[320px] w-full md:right-[80px] "> 
                            <div className="flex gap-2 py-4">
                                <div className=" px-4 md:px-10 py-3  bg-teal-600 md:text-xl rounded-2xl text-white">Front-end dev</div>
                                <div className=" px-4  md:px-10 py-3 md:text-xl border rounded-2xl">UI/UX Design</div>
                            </div>
                            <div className=" text-center py-3 w-[200px] md:text-xl border rounded-2xl">Back-end dev</div>
                        </div>

                        
                    </div>
                </div>
            
            </div>
            <img src={vectorfive} alt="groupedvector" className="hidden md:flex absolute bottom-[-600px] md:bottom-[-240px] right-0"/>
            <img src={vectorsix} alt="groupedvector" className="absolute bottom-[-130px] left-0"/>
        
        </div>
    )
}

export default Home
