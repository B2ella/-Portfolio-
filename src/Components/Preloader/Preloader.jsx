import { motion } from "framer-motion"
import { Link } from "react-router-dom";


const blackBox = {
    initial: {
      width: "100vw",
      right: 0,
    },
    animate: {
      height: 0,
      transition: {
        when: "afterChildren",
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  const textContainer = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 0,
      transition: {
        duration: 4,
        when: "afterChildren",
      },
    },
  };

  const Preloader = () => {
    return (
      <div className="absolute inset-0 flex items-center justify-center"
      >
        <motion.div
  className="absolute z-999 flex items-center justify-center h-full overflow-hidden bg-brandblack"
  initial="initial"
  animate="animate"
  variants={blackBox}
  
>
<motion.div variants={textContainer} className="flex justify-center items-center h-screen flex-col">
<h2 className="text-brandpurple text-[4vw] font-arial -tracking-.04em mr-2">IS<span className="text-brandcream">~</span><span className="text-brandpurple">Y</span></h2>
<div className=" w-52 h-10 overflow-hidden">

<p className=" animate-scroll translate-y-0 rotate0 text-xl text-brandcream -tracking-.04em whitespace-nowrap">
    Javascript. CSS . Html . React . TypeScript . SQL . Node.js . Postgres
</p>
</div>
</motion.div>
</motion.div>
           
      </div>
    );
  };

  export default Preloader;