import images from "../../../src/Images/icebreaker-img";
import { RoughNotation } from "react-rough-notation";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import Header from "../Header/Header";






const Icebreaker = () => {

    const {ref, inView} = useInView({threshold: 0.3});
    const animation = useAnimation(); 

  useEffect(() => {
    console.log("effect in affect", inView);
    if(inView){
      animation.start({
        x: 0,
        transition: {
          type: 'spring', duration: 2, bounce: 0.2
        }
      });
    }
    if(!inView){
      animation.start({x: '-100vw'})
    }
  }, [inView]); 


    return (
        <div className="bg-black ">
        <Header/>
        <div className="grid place-content-center pt-20">
        <img src={images.ib} alt="" width={700} height={700} />
        </div>
           <section className="grid place-content-center mt-10">
           <h1 className=" text-7.3vw text-transparent  bg-clip-text bg-gradient-to-b from-[#C5A7FE] to-[#B72EEA] leading-[1.2]">The Icebreaker Application</h1>
           
           
           <div className='flex flex-row '>
           <p className=' ml-5 text-white text-3xl font-arial font-500 -tracking-.04em '>Facilitating better connections.</p>
            <a href="https://github.com/B2ella/The-Ice-Breaker-Front-end-" className=' text-lg animate-pulse  text-brandcream
             hover:text-ibpurple  font-arial ml-[26em]'>~ Github (front-end) ~</a>
            
            <a href="https://github.com/B2ella/The-Ice-Breaker-Back-end-" 
            className=' text-lg animate-pulse text-brandcream 
            hover:text-ibpurple  font-arial ml-5'>~ Github (back-end) ~</a>
          </div>
           </section>



{/* problem and soultion section  */}
<div className='mt-24 grid place-items-center '>
         <div className=" text-5xl font-arial font-500 leading-.82 -tracking-.04em">
         
        <div className="flex justify-center font-homemade lowercase"><RoughNotation type="highlight" color="#FF00D9" show={true}>THE PROBLEM</RoughNotation></div>
           <p className="w-[35em] mt-10 text-justify text-2xl font-homemade font-500 leading-1 -tracking-.04em text-white">
                Meeting new partners for the week can be nerve-racking; sometimes you don't know what to say, sometimes there are awkward moments, 
                and sometimes you are tired of reintroducing yourself to someone new each week. Is there a better way of breaking the ice with a 
                new partner?</p>
         

        
        <div className="flex justify-center leading-.82 font-homemade lowercase"><RoughNotation type="highlight" color="#9900FF" show={true} className="mt-20">THE APPLICATION</RoughNotation></div>
            <h2 className='flex justify-center text-2xl text-white'>our solution</h2>
        
                 <p className="w-[35em] mt-10 text-justify text-2xl font-homemade font-500 leading-1 -tracking-.04em text-white">
                    Introducing a new way of getting to know your new weekly partner,The Ice Melter App is a new take on the conventional icebreaker; 
                    it's designed to help bootcampers connect better and more comfortably with their new pairs. It takes them through a series of fun
                    questions, which can be discussed and perhaps debated with their partner at the end. All you need is your partner's ID, then 
                    debate away.</p>
          

        {/* agile section  */}  

        <div className='mt-40'>
         <h1 className=" text-5xl font-arial font-500 leading-.82 -tracking-.04em grid place-items-center text-white">AGILE ALL THE WAY</h1>
         <p className="w-[35em] mt-10 text-justify text-2xl font-homemade font-500 leading-1 -tracking-.04em text-white">
         Every day, a quick 15-minute scrum/stand-up took place twice a day, usually at the start and end of the day to go over problems, 
         identify obstacles to task progression, or merely for topical discussions, as well as regular check-ins. Despite this being 
         a week-long project, we made use of sprint planning to the best of our abilities and shortened the sprint down to every couple 
         of days to plan what task needed to be carried out. At the end of the project, a sprint retrospective allowed discussions 
         around what was done well and poorly, as well as what changes could've been made and what could be improved for future sprints.<a href="/icebreaker agile.pdf"  className=' text-ibpurple ml-2 '>  Agile Methodologies (pdf)</a></p>
         </div>
         <div className='columns-3 inline-flex '>
         <img src={images.planning} width={300} height={300} className="my-10" alt="planning structure" role="img"  aria-label="planning structure"/>
         <img src={images.recovery} width={300} height={300} className="my-10" alt="Recovery Principles" role="img"  aria-label="Recovery Principles"/>
         <img src={images.teamman} width={300} height={300} className="my-10" alt="Team Manifesto"  role="img"  aria-label="Team Manifesto"/>
         </div>
         </div>

{/* ideation section  */} 
         <div className='mt-20 text-white'>
         <h1 className=" text-5xl font-arial font-500 leading-.82 -tracking-.04em grid place-items-center">IDEATION</h1>
         <p className="w-[35em] mt-10 text-justify text-2xl font-homemade font-500 leading-.82 -tracking-.04em">
         This is the ideation stage, where we choose an idea for a final application that was selected via dot voting.
          We then allowed ourselves to explore the limitless possibilities of executing the final idea, then re-evaluated 
          and looked at what was actually feasible.
         <a href="/icebreaker Idea exploration.pdf" className='text-ibpink ml-2 '>Ideation (pdf)</a></p>
         
         <div ref={ref}>
         <div>
            <motion.div animate={animation} className='border-2 border-[#FF00D9] rounded-sm border-dashed  w-[50em] h-[17em] my-10 p-8'>
                <h2 className='white mb-3 text-2xl text-center text-ibpink font-homemade'>Dreamer</h2>
                <ul className='text-sm '>
                    <li className='mb-3'>
                    ~ Create a 3-in-1 application: The first section would be a "bootcamp energizer," 
                    ( energiser: an activity that lifts and energises people) which would include a 
                    variety of fun activities that users could add to. 
                    </li>

                    <li className='mb-3'>
                    ~ An "ice breaker" section: this would be a quiz of 10-20 questions designed to 
                    help new pair programming partners feel more at ease with one another, 
                    break away from traditional ice breakers, and get to know one another a little better.
                    </li>

                    <li>
                    ~ A voting section: Voting is something that comes up throughout the bootcamp, 
                    whether in a team or pair. This inspired the idea to create a feature that makes 
                    that process easier and more straightforward.
                    </li>
                </ul>
            </motion.div>
        </div>

        <div>
            <motion.div animate={animation} className='border-2 border-violet-500 rounded-sm border-dashed w-[50em] h-[15em] my-10 p-8'>
                <h2 className='white mb-3 text-2xl text-center text-ibpurple  font-homemade  '>Realist</h2>
                <ul className='text-sm'>
                    <li className='mb-3'>
                    ~ Due to time constraints and technical ability,
                     we need to narrow the application down from three sections to one and start small.
                    </li>

                    <li >
                    ~ We must devise a method for comparing user results and storing user information; 
                    we cannot store anyone's identifying personal data, so we must use nicknames to 
                    maintain their anonymity.
                    </li>
                </ul>
            </motion.div>
        </div>
        <div>
            <motion.div animate={animation} className='border-2 border-blue-500 rounded-sm border-dashed  w-[50em] h-[15em] my-10 p-8'>
                <h2 className='white mb-3 text-2xl text-center text-blue-500 font-homemade'>Critic</h2>
                <ul>
                    <li className='mb-3'>
                    ~ Implementing bootcamp-wide functionality and mass stat comparison would be difficult and time-consuming.
                    </li>

                    <li>
                    ~ To easily compare data between users, 
                    it might be worth reducing the number of question types and using mostly multiple-choice answers.
                    </li>
                </ul>
            </motion.div>
        </div>
        </div>
         </div>

         {/* Empathy Map */}
        <div className='mt-40 text-white'>
         <h1 className=" text-5xl  text-ibpink font-arial font-500 leading-.82 -tracking-.04em grid place-items-center  underline ">Empathy Map</h1>
         <p className="w-[35em] mt-10 text-justify text-2xl font-homemade font-500 leading-1 -tracking-.04em">
         So here's where our research came into play, and we started to think about why our users would need this app 
         and what they think, feel, do, and say when meeting their new partner for the week. Some of the main points
          were being "tired of introducing themselves," disliking conventional ice breakers, feeling dread, nervousness, 
          and worry, as well as being unsure of what to ask.</p>
         </div>
         <img src={images.empathymap} 
         width={1000} height={1000} 
         className="my-10" 
         alt="empathy Map"   
         aria-label="Empathy Map"/>
         

         {/* User stories and personas */}
        <div className='mt-40 text-white'>
            <h1 className=" text-5xl text-white font-arial font-500 leading-.82 -tracking-.04em grid place-items-center mt-20 ">OUR USER</h1>

                <p className="w-[35em] mt-10 text-justify text-2xl font-homemade font-500 leading-1 -tracking-.04em mb-20">
                     At this stage, we focused on who our users are, the things they would want to see in our app and why they would benefit from it.<br/>
                    <br/>From the user stories, we delved deeper and created user personas for each to get a more detailed idea of our users and 
                    really define who they are. The personas are a representation of the variety of students on the bootcamp, 
                    their past experiences, and the struggles they face making this career switch. Ika Melrose (27), 
                    a sixth-form graduate and customer service career changer; Casse Winchester (40), who has been in 
                    managerial roles for the past 10 years; and Mason Rue (25), a freelance photographer for 4 years. 
                    <a href="/icebreaker Userstories and personas.pdf" className='text-ibpurple ml-2 '> User Stories and Personas (pdf)</a></p> 

                    <img src={images.personaone} width={900} height={900} className="mb-20" alt="user persona one" role="img"  aria-label="user person one"/>
                    <img src={images.personatwo} width={900} height={900} className="mb-20" alt="user persona two" role="img"  aria-label="user person two"/>
                    <img src={images.personathree} width={900} height={900} className="mb-20" alt="user persona three" role="img"  aria-label="user person three"/>
        </div>

        {/* user journey section */}
        <section className="text-white grid place-items-center">
            <h1 className=" text-5xl font-arial font-500 leading-.82 -tracking-.04em">The Application Structure</h1> 
            <h3 className='text-2xl font-homemade font-bold leading-.82 -tracking-.04em'>The journey map</h3>
                <p className="w-[35em] mt-10 text-justify text-2xl font-homemade font-500 leading-.82 -tracking-.04em mb-20">
                First, we started off by understanding our users' journey and how they would manoeuvre through the application.</p>
                <img src={images.userflow} width={900} height={900} alt="user person one" className="mb-20" role="img" aria-label="user person one"/>
        </section>
        
        
        
        {/* wireframes and prototype section*/}
        <section className="text-white grid place-items-center">
            <h1 className=" text-5xl font-arial font-500 leading-.82 -tracking-.04em underline">WIRE FRAMING, PROTOYPING, USABILITY TESTING</h1>

                <p className="w-[35em] mt-10 text-justify text-2xl font-homemade font-500 leading-.82 -tracking-.04em mb-20">
                Low and high-fidelity wireframes allow us to get a visual idea of the user journey before implementing the UI and design. 
                Then we moved on to the prototype to simulate the application.</p>

                <p className='mb-10 text-xl font-arial font-bold underline'>Lo-fi wireframe</p>
                <img src={images.lofi} width={900} height={900} alt="lo-fi wireframe"  role="img" aria-label="lo-fi wireframe"/>

                <p className='mt-24 mb-10 text-xl font-arial font-bold underline'>Mid-fi wireframe</p>
                <img src={images.midfi} width={900} height={900} alt="mid-fi wireframe"  role="img" aria-label="mid-fi wireframe"/>

                <p className='mt-32 text-xl font-arial font-bold underline'>Prototype</p>
                    <video autoPlay loop muted className='w-[60em] h-[60em] -mt-36'>
                    <source src='/Icebreaker.mp4' type='video/mp4' />
                    Your browser does not support the video tag.
                    </video>
              
       </section>
       
       {/* Visulization section */}
        <section className="grid place-items-center" >
            <h1 className="text-white  text-5xl font-arial font-500 leading-.82 -tracking-.04em grid place-items-center  underline">VISUAL DESIGN / BRANDING</h1>

                <p className="text-white w-[35em] mt-10 text-justify text-2xl font-homemade font-500 leading-.82 -tracking-.04em mb-20">
                The visual design was inspired by the key themes that surround the application's intentions; some of those themes are lightheartedness, 
                fun, and playfulness, which also come through in the typography. The fluorescent-like colour palette is also supposed to allude to 
                the application being a source of levity in perhaps an awkward or uncomfortable situation</p>
                <img src={images.branding} width={700} height={700} alt="colour palette and typography"  role="img" aria-label="colour palette and typography"/>
        </section>


        {/* Conclusion section */}
       <section className='grid place-items-center text-white bg-gradient-to-b from-black to-[#262523] w-screen '>
            <h1 className=" text-5xl font-arial font-500 leading-.82 -tracking-.04em grid place-items-center mt-24 underline">CONCLUSION</h1>

                <p className="w-[35em] mt-10 text-justify text-2xl font-homemade font-500 leading-.82 -tracking-.04em ">
                Pair programming is such a beneficial and crucial tool to utilise, as it aids in stronger and better connections and 
                collaborations between developers, allows them to share best practices, and improves code quality. However, pair programming
                 isn't always a smooth transition for individuals, especially those used to working alone, so from this project, 
                 it's evident that finding new and innovative ways to help programmers get to know each other, perhaps in a 
                 less conventional way, can make for a smoother transition.</p>
                 
                 <p className="w-[35em] mt-10 text-justify text-2xl font-homemade font-500 leading-.82 -tracking-.04em mb-20">
                  Some things to improve would be to add more variety and 
                 situational questions, ones that allow individuals to identify each other's strengths and weaknesses, which would 
                 help them when working together. In terms of coding, going back and refactoring a lot of the code, making the site 
                 responsive, and utilising the database </p>



            <h2 className=" text-5xl font-arial font-500 leading-.82 -tracking-.04em mb-10">IF WE HAD MORE TIME/ CHANGES</h2>
              <h3 className="text-3xl text-black font-arial font-500 -tracking-.04em">
                <RoughNotation type="highlight" show={true} color="#FF00D9"> ~Big MVP aspirations, small timeframe~ </RoughNotation></h3>

                <p className="w-[35em] mt-10 text-justify text-2xl font-homemade font-500 leading-.82 -tracking-.04em mb-20">
                The MVP was slightly ambitious given the one-week timeframe that needed to be stuck to; due to this, my team and I focused 
                more on completing the application and providing a functioning MVP rather than working in areas of individual weakness. 
                It would've been more beneficial to pick a smaller MVP and put more of an emphasis on the team working in areas that 
                they felt they needed to strengthen.
                </p>


            <h3 className="text-3xl text-black font-arial font-500 -tracking-.04em">
                <RoughNotation type="highlight" show={true} color="#BDABE0"> ~Less idea exploration~ </RoughNotation></h3>

                <p className="w-[35em] mt-10 text-justify text-2xl font-homemade font-500 leading-.82 -tracking-.04em mb-20">
                At the start of the week, a lot of focus was put on exploring different ideas, and this took time away from planning 
                and development. Going back, I would put a time limit on idea exploration and spend a little more time looking at 
                who our users are, the problems they face, and the service we could provide them.
                </p>
      

            <h3 className="text-3xl text-black font-arial font-500 -tracking-.04em">
                <RoughNotation type="highlight" show={true} color="#00FEFF"
                className="text-3xl text-black font-arial font-500 -tracking-.04em">~More research and more testing~</RoughNotation></h3>
                
                <p className="w-[35em] mt-10 text-justify text-2xl font-homemade font-500 leading-.82 -tracking-.04em mb-20">
                Looking back, I would have liked to have carried out more user research via different methods as well. 
                Due to the limited time, we were unable to undertake comprehensive research, meaning that we perhaps missed out 
                on some valuable insight and feedback. The same goes for usability and testing; although testing was done on 
                the functionality of the app, it would've been beneficial to gain live feedback from users testing the application.
                </p>
        </section>


         </div>
        </div>
  
    )
}

export default Icebreaker;