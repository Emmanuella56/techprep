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
        < div className="py-20 px-10 h-screen">
            <img src={vector} alt="star" className="absolute top-[150px] left-[80px]" />
            <img src={vectorone} alt="star1" className="absolute top-[260px] left-[310px]" />
            <img src={vectortwo} alt="star2"  className="absolute right-[595px] top-[80px]"/>
            <img src={vectorthree} alt="star3" className="absolute right-[468px] top-[205px] h-[120px] w-[360px]"/>
            <img src={vectorfour} alt="star4" className="absolute right-[0] top-[340px]"/>
            <img src={grouped} alt="groupedvector" className="absolute right-[100px] top-[140px] h-[150px] w-[345px]" />
            <div>

            
                    <div className="flex flex-col mt-[-30px] items-center  ">
                        <h1 className="font-bold text-6xl w-[500px] tracking-wider leading-20  ">Level Up Your Skill In Minutes</h1>
                        <p className=" tracking-wider pt-10  w-[600px] text-lg">Our AI -powered quizzed are designed to stimulate real world interview scenerios, helping you practice effectively and efficiently</p>
                    </div>

                <div className="flex justify-between px-20 py-16">

                    <div className="flex flex-col justify-center bg-teal-950 text-white w-[316px] shadow-xl px-4 py-2 items-center text-center h-[365px] rounded-2xl ">
                        <p className="text-xl">Get non-repetitive questions with our AI</p>
                        <p className="border-8 m-4 rounded-[50%] border-teal-400 text-2xl p-10  ">10k</p>    
                        <p>questions based on your stack</p>
                    </div>

                    <div>
                        <img src={HomeImage} alt="image" className="mt-[-50px] w-[479px] h-[578px] " />
                    </div>

                    <div className="relative bg-teal-600  text-white w-[316px] shadow-xl px-4 py-2 items-center text-center h-[233px] rounded-xl">
                        <div className=" flex flex-col items-center justify-center absolute bg-cyan-800 text-white origin-top-right -rotate-5 right-[40px] top-[40px] w-[316px] shadow-xl px-4 py-2 items-center text-center h-[233px] rounded-xl">
                            <div>
                                <p className=" text-4xl ">200+</p>
                                <p className=" text-2xl ">Active users</p>
                                <div>
                                    <img src={imgone} alt="" className="w-[50px] h-[50px]"/>
                                    <img src={imgtwo} alt="" className="w-[50px] h-[50px]" />
                                    <img src={imgthree} alt="" className="w-[50px] h-[50px]"/>
                                    <img src={imgfour} alt="" className="w-[50px] h-[50px]" />
                                    <img src={imgfive} alt="" className="w-[50px] h-[50px]" />
                                </div>
                            </div>
                            <div>
                                <div></div>
                                <div></div>
                            </div>
                            <div></div>
                        </div>
                    
                    </div>
                </div>
            
            </div>
            <img src={vectorfive} alt="groupedvector" />
            <img src={vectorsix} alt="groupedvector" />
        
        </div>
    )
}

export default Home
