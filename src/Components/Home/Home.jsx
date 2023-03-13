import { BsGithub } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import ContactMe from "../Contact/Contact";
import Menu from "../Menu/Menu";
import Mission from "../Mission/Mission";
import Preloader from "../Preloader/Preloader";
import Projects from "../Projects";
import { Link } from "react-router-dom";
import Header from "../Header/Header";





const HomePage = () => {
    return (
        <section>
         <Header/>
        <Preloader/>
        <section className='bg-black h-screen overflow-hidden'>
        <div className='flex flex-col justify-center items-center text-7.3vw text-center h-screen '>
        
        <h1 className='font-arial text-brandpurple font-500 leading-.82 -tracking-.04em '>Hey! <br/>I'm Belle,a developer<br/> that loves design</h1>
        <FaAngleDown className='absolute bottom-10 text-4xl sm:text-5xl text-brandcream xl:text-4.3vw animate-bounce'/>
        <ContactMe/>
         
        <a href="https://github.com/B2ella">
        <BsGithub className='absolute bottom-12 left-5 text-4xl sm:text-5xl xl:text-5xl text-brandcream hover:text-yellow-200 hover:animate-bounce'/>
        </a>

        <p className="absolute top-5 grid place-content-center text-lg text-brandpurple font-arial -tracking-.04em ">ISABELLE ~ FRANCIS</p>
        </div>
     
        </section>

        <Mission/>
        <Projects/>
    
        </section>

        
        
    )
}

export default HomePage;