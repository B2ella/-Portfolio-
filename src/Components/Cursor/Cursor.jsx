import { motion } from "framer-motion"
import { useState, useEffect } from "react";

const Cursor = () => {

    const [mousePositionX, setMousePositionX] = useState();
    const [mousePositionY, setMousePositionY] = useState();

   
    
      useEffect(() => {
       
        window.addEventListener("mousemove", (e) => {
            setMousePositionX(e.clientX)
            setMousePositionY(e.clientY)
        });

       },[])
        
    

        
    


    return (
        <div  className="w-20 h-20 border-white border-dotted border-2 fixed rounded-full pointer-events-none"
        style={{
            left: mousePositionX + 'px',
            top: mousePositionY + 'px'
        }}></div>
    
    )
}




export default Cursor;
