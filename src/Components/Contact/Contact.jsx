
import { MdEmail} from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { RiChatSmile3Fill} from "react-icons/ri";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactMe = () => {
  const [isShown, setIsShown] = useState();




    return (
        <div className=" bg-transparent">
        
         {
            isShown?
      
            <motion.div
            animate={{ y: -100 }}
            transition={{ type: "spring"}}
            
             className=" w-[45vw] h-[40vw] sm:w-72 sm:h-64 md:w-80 md:h-72 p-5 sm:p-8 md:p-10 absolute right-14 bottom-10  bg-brandblack border-purple-300 border-t-8 border-x-2 border-b-2 rounded-3xl z-50 "
            >
                    <p className="text-lg sm:text-2xl md:text-3xl font-bold text-brandpurple pb-5 bg-transparent underline ">Get in touch!</p>
                    <p className="text-white text-[0.25em] sm:text-xs md:text-sm text-left ">Thank you for stopping by, i’m seeking out opportunities to work with companies and individuals. 
                    If you think i’m the right fit for you send me an <a className="inline-block text-yellow-200 font-bold" href="mailto:IsabellaRebecca@live.co.uk">email</a> <MdEmail className="inline-block text-yellow-200"/>.
                    Alternatively you can message me on <a href="https://www.linkedin.com/in/isabelle-francis-paisley-b66611128/" className="inline-block text-yellow-200 font-bold">LinkedIn</a> <BsLinkedin className="inline-block text-yellow-200 "/>.</p>
              
            </motion.div>:null
         }
       
            <RiChatSmile3Fill
           className=' absolute bottom-12 right-2 text-4xl sm:text-5xl text-brandcream xl:text-4.3vw hover:text-yellow-200 hover:animate-bounce'
            onClick={()=>setIsShown(!isShown)}/>

            
            
        </div>
    )
}

export default ContactMe;