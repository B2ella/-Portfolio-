
import {motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";


const Projects = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
  offset: ["start end", "end end"]
  });
  const x = useTransform(scrollYProgress, [0, 1], [600, 0]);
  const y = useTransform(scrollYProgress, [0,1],[-600,0]);

    return (
    
        <div 
        id="projects"
        ref={ref}
        className="bg-brandblack">
        <Header/>
        
        
          <section className="overflow-hidden whitespace-nowrap">
          <a href={'/projects/icebreaker'}>
          <motion.div 
          style={{ x }}
          className=" ">

          <h1 className="text-10.3vw font-homemade leading-.82 -tracking-.04em 
          text-brandcream pt-10 pl-10 hover:animate-scroll hover:text-brandpurple">the ice breaker - the ice breaker -
          </h1> 
          </motion.div>
          <span className="font-thin font-arial text-1.9vw tracking-normal text-brandcream p-10 hover:text-yellow-200">research / design / developement</span>
          </a>

         

          <a href={'/projects/circles'}>
          <motion.div 
          style={{ x: y }}
          className="">

          <h1 className="text-10.3vw font-homemade leading-.82 -tracking-.04em 
          text-brandpurple pt-10 pl-10 hover:animate-scroll hover:text-yellow-100">the circles app - the circles app
          </h1> 
          </motion.div>
          <span className="font-thin font-arial text-1.9vw tracking-normal text-brandcream p-10 hover:text-brandpurple">research / design / developement</span>
          </a>



          <a href={'/projects/thesamepage'}>
          <motion.div 
          style={{ x: x }}
          className="">

          <h1 className="text-10.3vw font-homemade leading-.82 -tracking-.04em 
          text-brandcream  pt-10 pl-10 hover:animate-scroll hover:text-brandpurple">the same page - the same page -
          </h1> 
          </motion.div>
          <span className="font-thin font-arial text-1.9vw tracking-normal text-brandcream p-10 hover:text-yellow-200">developement</span>
          </a>

          <a href={'https://todays-times.netlify.app/'}>
          <motion.div 
          style={{ x: y }}
          className="">

          <h1 className="text-10.3vw font-homemade leading-.82 -tracking-.04em 
          text-brandpurple pt-10 pl-10 hover:animate-scroll hover:text-yellow-100">todays times - todays times - todays times
          </h1> 
          </motion.div>
          <span className="font-thin font-arial text-1.9vw tracking-normal text-brandcream p-10 hover:text-brandpurple">developement</span>
          </a>

          

          </section>
          <section className="overflow-hidden whitespace-nowrap">
          <a href={'/projects/thesamepage'}>
          <motion.div 
          style={{ x: x }}
          className="">

          <h1 className="text-10.3vw font-homemade leading-.82 -tracking-.04em 
          text-brandcream  pt-10 pl-10 hover:animate-scroll hover:text-brandpurple">ink'd site - ink'd site - ink'd site
          </h1> 
          </motion.div>
          <span className="font-thin font-arial text-1.9vw tracking-normal text-brandcream p-10 hover:text-yellow-200">coming soon</span>
          </a>

          </section>
        </div>
      
    )
}

export default Projects;