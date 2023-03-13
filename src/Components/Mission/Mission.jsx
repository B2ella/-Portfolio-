
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";


const Mission = () => {
    const {ref, inView} = useInView({threshold: 0.3});
    const animation = useAnimation(); 

  useEffect(() => {
    console.log(inView);
    if(inView){
      animation.start({
        y: 0,
        transition: {
          type: 'spring', duration: 2, bounce: 0.2
        }
      });
    }
    if(!inView){
      animation.start({y: '-100vw'})
    }
  }, [inView]);

    return (
        <section className="bg-brandblack overflow-hidden">
        
        
        <div ref={ref} className=" text-6.3vw text-violet-300 font-homemade lowercase leading-.82 -tracking-.04em" >
            <motion.h1 animate={animation} className="flex justify-center items-center h-screen mx-10" >
            MY AIM IS TO BUILD PROJECTS THAT ARE ACCESSIBLE,ELEVATE PROBLEMS, 
            HAVE THE USER AT THE HEART AND BRING COMMUNITIES TOGETHER.
            </motion.h1>
            
        </div>
        <div className="flex float-right mb-20 mr-20 border-transparent w-[6.5rem] h-10 overflow-hidden whitespace-nowrap">
        <a href='/aboutme'>
        <p className=" hover:animate-scroll hover:text-yellow-200 text-xl text-brandcream -tracking-.04em "
        >ABOUT ME~ABOUT ME~ABOUT ME~ABOUT ME~ABOUT ME</p>
        </a>
        </div>
        
        </section>
    )
}

export default Mission;