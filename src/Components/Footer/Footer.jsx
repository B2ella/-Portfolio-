import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer> 
        
        <section className="bg-brandblack  xl:pt-52 md:pt-0  w-full" id="contact">

        
         <div className="text-brandcream  opacity-0  sm:opacity-0 md:opacity-0  lg:opacity-100 xl:opacity-100  2xl:opacity-100  md:text-9xl lg:text-9xl pl-16
         ">
         ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
         ~ 
         </div>


        <div className="text-brandcream flex justify-between px-40 py-10 ">
            
            <div className="flex float-right mb-10 mr-10 border-transparent w-52 h-10 overflow-hidden whitespace-nowrap">
            <a href="mailto:IsabellaRebecca@live.co.uk"
            className="hover:animate-scroll"
            >IsabellaRebecca@live.co.uk ~ IsabellaRebecca@live.co.uk </a>
            </div>

            <div className="flex float-right mb-10 mr-10 border-transparent w-[5.6rem] h-10 overflow-hidden whitespace-nowrap">
            <a href="https://www.linkedin.com/in/isabelle-francis-paisley-b66611128/" 
            className="uppercase hover:animate-scroll">
            LinkedIn ~ LinkedIn ~ LinkedIn ~ LinkedIn</a>
            </div>
            
            <div className="flex float-right mb-10 mr-10 border-transparent w-[4.6rem] h-10 overflow-hidden whitespace-nowrap">
            <a href="https://github.com/B2ella" className="uppercase hover:animate-scroll">
            Github ~ Github ~ Github ~ Github</a>
            </div>

            <a href="#" className="hover:underline uppercase text-brandpurple">Back to the top</a>
        </div>
        
        <h1 className="text-7.3vw text-brandpurple font-homemade grid place-content-center pb-10">Get in touch</h1>
        </section>
        </footer> 
    )
}

export default Footer;