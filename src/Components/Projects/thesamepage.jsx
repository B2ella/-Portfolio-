import { Link } from "react-router-dom";
import Menu from "../Menu/Menu";



const TheSamePage = () => {


    return (
        <div  className="bg-black h-screen">
        <Link href='/' className="fixed top-5 left-5 text-1.7vw font-arial text-brandcream -tracking-.04em">IS~Y</Link>
        <Menu/>
        <div className="grid place-content-center">

        <video autoPlay loop muted className='w-[70vw] h-[70vh] -mt-5 '>
        <source src='/the same page.mp4' type='video/mp4' />
        Your browser does not support the video tag.
        </video>
        <h1 className=" text-[5vw] font-bold text-white text-center leading-.82 mt-10">The SAME PAGE</h1>
        <p className='mb-5 text-white text-1.7vw font-extralight -tracking-.04em text-center '>Helping you ask the important questions.</p>
            <div className="flex flex-row justify-center items-center">
            <a href="https://github.com/B2ella/Same-Page" className=' text-[1.2vw] animate-pulse  text-brandcream
             hover:text-ibpurple  font-arial '>~ Github (front-end) ~</a>
            
            <a href="" 
            className=' text-[1.2vw] animate-pulse text-brandcream 
            hover:text-ibpurple  font-arial ml-5'>~ Site coming soon ~</a>
            </div>
          
            </div>
        </div>
        

    
        
   
   
    )
}

export default TheSamePage;