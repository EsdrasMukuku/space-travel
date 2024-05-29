import { NavLink } from "react-router-dom"


const Home = () => {
  return (
    <>
    <div className="w-4/5 h-screen  flex flex-row mt-60 mx-10 gap-60" >
      <div className="ml-10"><h5 className="text-lightPink text-3xl text-left ">SO, YOU WANT TO TRAVEL TO</h5><h1 className="text-white font-bold text-[9.375rem] text-left mt-4 pl-auto">SPACE</h1><p className="text-lightPink text-left w-[400px] mt-16">Let's face it: if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we'll give you a truly out of this experience!</p></div>

      <NavLink to='Destination' className="bg-white h-40 w-40 p-20 rounded-full  flex justify-center items-center text-left ml-32 mt-40 hover:border-[3rem] hover:border-gray-700  hover:ml-32 hover:mt-28 ease-out duration-300">EXPLORE</NavLink>
      
    </div>
    </>
  )
}

export default Home
