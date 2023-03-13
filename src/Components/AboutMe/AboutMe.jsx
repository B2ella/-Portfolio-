
const AboutMe = () => {



    return (
        <section className="bg-gradient-to-b from-black to-[#262523] h-screen">
        
        <div  className=" whitespace-nowrap overflow-hidden">
        <h1  className="animate-scroll text-7.3vw text-brandpurple font-homemade leading-.82 -tracking-.04em  uppercase mt-20 ">
         About Me~About Me~About Me About Me~About Me~About Me~About Me~About Me. </h1>
        </div>

        <div className="flex flex-col justify-center items-center ">
        <h2 className="bg-br text-3xl text-center font-semibold text-brandpurple font-homemade leading-.82 -tracking-.04em mt-16 mb-10">
         Hi, since you are here<br/>let me tell you a bit about me and my journey
         </h2>
              
        <p className="w-[40em] text-xl text-justify text-brandcream font-homemade leading-[1] mb-20  
        ">
        I graduated from a degree in Fashion Promotion and Communications, you are wondering what 
        that is. Well think, fashion branding and storytelling, marketing, and forecasting. 
        After university, I found myself at a finance company as a collections advisor and underwriter 
        (yes, it was stressful), but I enjoyed the problems I elevated on a day-to-day basis, 
        which is what I aim to do as a developer and hopefully create beautiful and intuitive 
        user interfaces along the way.

         I've always had an interest in websites and a curiosity about their design and functionality. 
         So I started self-studying, and shortly after, I started a 16-week intensive bootcamp that 
         taught me all about the fundamentals of programming, the importance of agile methodologies, 
         collaborating with teams, and pair programming.<a href="/Belle Francis.pdf" className='ml-1 bg-brandcream text-black '>CV (pdf)</a>
        </p>

        <span className="text-black font-bold -mt-10">
        <span className="text-brandpurple mr-4">Front-end tools:</span> 
        <span className="bg-brandpurple px-1">React.js</span> 
        <span className="bg-brandpurple ml-5 px-1">CSS / SCSS</span> 
        <span className="bg-brandpurple ml-5 px-1">HTML5</span> 
        <span className="bg-brandpurple ml-5 px-1">JavaScript</span> 
        <span className="bg-brandpurple ml-5 px-1">Styled Components</span> 
        <span className="bg-brandpurple ml-5 px-1">Tailwind</span> 
        <span className="bg-brandpurple ml-5 px-1">TypeScript</span>
        </span>

        <span className="text-black font-bold mt-5">
        <span className="text-brandcream mr-4">Back-end tools:</span> 
        <span className="bg-brandcream px-1">Node.js</span> 
        <span className="bg-brandcream ml-5 px-1">SQL</span> 
        <span className="bg-brandcream ml-5 px-1">Express</span> 
        <span className="bg-brandcream ml-5 px-1">Jest</span> 
        <span className="bg-brandcream ml-5 px-1">Cypress</span> 
        <span className="bg-brandcream ml-5 px-1">Firebase</span> 
        </span> 

        <span className="text-brandcream font-bold mt-5">
        <span className="text-brandcream mr-4"> Brushing up on:</span> 
        <span className="bg-black px-1">Python</span> 
        <span className="bg-black ml-5 px-1">C#</span> 
        <span className="bg-black ml-5 px-1">Azure</span> 
        </span> 
         <p className="mt-5 text-brandcream text-sm">and looking forward to learning more...</p>

        </div>
      
   

        <div className="absolute right-10 bottom-10 border-transparent w-[6.6rem] h-10 overflow-hidden whitespace-nowrap">
        <a href='/projects'>
        <p className=" hover:animate-scroll text-xl text-brandcream -tracking-.04em "
        >PROJECTS ~ PROJECTS ~ PROJECTS ~ PROJECTS ~ PROJECTS</p>
        </a>
        </div>
        </section>
    )
}

export default AboutMe;