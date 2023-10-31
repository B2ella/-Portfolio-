import { SlMenu } from "react-icons/sl";
import { useState, useEffect, useRouter } from "react";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";

const Menu = () => {
  const [openMenu, setopenMenu] = useState(false);
 
  
      const Open = () => {
        setopenMenu(true);
      };
  
      const Close = () => {
        setopenMenu(false);
      };
  
  
    const MenuTog = () => {
      setopenMenu(!openMenu);
    };
    


    
    const variants = {
      open: {
        y: 0,
        opacity: 1,
        transition: {
          y: { stiffness: 1000, velocity: -100 }
        }
      },
      closed: {
        y: 50,
        opacity: 0,
        transition: {
          y: { stiffness: 1000 }
        }
      }
    };
  

    return (
        <div>
           

            {openMenu ? (
              
                <motion.div
                variants={variants}
                className="bg-brandcream h-screen w-screen fixed top-0 left-0 z-40">
                    <div className="flex-col grid place-content-center h-screen gap-10 ">
                    <button onClick={MenuTog}><SlMenu className=" z-999 text-black fixed right-5 top-5 text-2xl"/></button>

                    <motion.div 
                    whileHover={{ backgroundColor: ['hsl(35, 51%, 93%, 1)', 'hsl(40, 4%, 14%, 1)'] }}
                    transition={{ circIn: [0.17, 0.67, 0.83, 0.67]}}
                    className="border-2 border-black rounded-full px-5 w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[35rem] 
                    xl:w-[45rem] 2xl:w-[70rem] h-[4rem] sm:h-[5rem] md:h-[6rem] lg:h-[8rem] xl:h-[10rem] 2xl:h-[17rem] 
                    hover:bg-brandblack text-brandblack hover:text-brandcream hover:animate-ease">

                    <a href='/aboutMe' className="text-6.3vw grid place-content-center h-[4rem] sm:h-[5rem] md:h-[6rem] 
                    lg:h-[8rem] xl:h-[10rem] 2xl:h-[17rem]">ABOUT ME ~</a>

                    </motion.div>


                    <motion.div 
                    whileHover={{ backgroundColor: ['hsl(35, 51%, 93%, 1)', 'hsl(40, 4%, 14%, 1)'] }}
                    transition={{ circIn: [0.17, 0.67, 0.83, 0.67]}}
                    className="border-2 border-black rounded-full px-5 w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[35rem] 
                    xl:w-[45rem] 2xl:w-[70rem] h-[4rem] sm:h-[5rem] md:h-[6rem] lg:h-[8rem] xl:h-[10rem] 2xl:h-[17rem] 
                    hover:bg-brandblack text-brandblackhover:text-brandcream hover:animate-ease">

                    <a href='/projects' className="text-6.3vw grid place-content-center h-[4rem] sm:h-[5rem] md:h-[6rem] 
                    lg:h-[8rem] xl:h-[10rem] 2xl:h-[17rem]">PROJECT ~</a>

                    </motion.div>
                   
                    <motion.div 
                    whileHover={{ backgroundColor: ['hsl(35, 51%, 93%, 1)', 'hsl(40, 4%, 14%, 1)'] }}
                    transition={{ circIn: [0.17, 0.67, 0.83, 0.67]}}
                    className="border-2 border-black rounded-full px-5 w-[15rem] sm:w-[20rem] md:w-[25rem] lg:w-[35rem] 
                    xl:w-[45rem] 2xl:w-[70rem] h-[4rem] sm:h-[5rem] md:h-[6rem] lg:h-[8rem] xl:h-[10rem] 2xl:h-[17rem] 
                    hover:bg-brandblack text-brandblackhover:text-brandcream hover:animate-ease">

                    <a href="mailto:IsabellaRebecca@live.co.uk" className="text-6.3vw grid place-content-center h-[4rem] 
                    sm:h-[5rem] md:h-[6rem] lg:h-[8rem] xl:h-[10rem] 2xl:h-[17rem] ">CONTACT ~</a>
                    
                    </motion.div>
                    
                    </div>
                    
                </motion.div>
            ) :  <button onClick={MenuTog}><SlMenu className="z-50 text-brandcream fixed right-5 top-5 text-2xl"/></button>}
        </div>
        
    )
}

export default Menu;