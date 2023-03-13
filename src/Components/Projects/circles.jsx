import { Link } from "react-router-dom";
import {motion, useScroll, useTransform} from "framer-motion";
import { useRef } from "react";


import Circlesimages from "../../Images/circles-img/index";
import SplineCircles from "../Spline/Spline";
import MenuSecondVersion from "../Menu/Menuv2";



const Circles = () => {

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
  offset: ["start end", "end end"]
  });
  const x = useTransform(scrollYProgress, [0, 1], [600, 0]);
  const y = useTransform(scrollYProgress, [0,1],[-600, 0]);



    return (
        <div  className="bg-brandcream">
        <Link to='/' className="fixed top-5 left-5 text-1.7vw font-arial hover:text-brandpurple text-brandblack -tracking-.04em z-999">IS~Y</Link>
         <MenuSecondVersion/>
        <SplineCircles/>
        
       {/* first section - app introduction  */}

        <div className="grid place-content-center">

        <section ref={ref} className="flex flex-col overflow-hidden">
        <motion.h1 style={{ x: x }} className=" text-brandblack opacity-90 left-0 text-10.3vw font-homemade lowercase whitespace-nowrap mt-20">
        ~THE CIRCLES APPLICATION~
        </motion.h1>

        <motion.div style={{ x: y }} className="flex flex-col sm:flex-row justify-center sm:gap-10 md:gap-10 font-arial mt-50 bg-teal-200 opacity-70">
        <p className='text-brandblack text-1.9vw sm:text-xs xl:text-sm text-center'><span className='font-bold sm:flex sm:flex-col md:inline-flex '>Client:</span> School of Code Project</p>
        <p className='text-brandblack text-1.9vw sm:text-xs xl:text-sm text-center'><span className='font-bold sm:flex sm:flex-col md:inline-flex '>My Role: </span> Product design, visualization, front-end developement and Testing</p>
        <p className='text-brandblack text-1.9vw sm:text-xs xl:text-sm text-center'><span className='font-bold sm:flex sm:flex-col md:inline-flex '>Project Time:</span> One Week</p>
        </motion.div>
  

        <div className='flex flex-col justify-center items-center mt-14 '>
        <h1 className="  text-3xl 2xl:text-4xl bg-teal-200 font-arial lowercase underline font-500 leading-.82 -tracking-.04em ">CIRCLES </h1>
        <p  className="lg:w-[47%] w-[50%] my-5 text-justify text-sm lg:text-1.35vw font-homemade  font-500 leading-.82  ">
        Circles is a platform that offers help and support to Link workers, enabling them to better and more seamlessly 
        integrate their clients that have been referred to them via the social prescribing scheme into their local 
        communities. The online platform provides quick and easy access to reliable information on local groups and 
        events and allows them to sign up and be a part of those events.</p>
  
         <h1 className="text-3xl 2xl:text-4xl bg-teal-200 font-homemade lowercase underline font-500 leading-.82 -tracking-.04em mt-10">SOCIAL PRESCRIBING & LINK WORKERS</h1>
         <p className="w-[50%] lg:w-[47%] mt-5 text-justify text-sm lg:text-1.35vw font-homemade font-500 leading-.82 ">
         Social isolation is becoming more of an issue in today's society and can be caused for a number of reasons. Old age, 
         leaving the workforce, the death of a spouse, illness, or disability, to name a few. For these reasons, individuals 
         can struggle to integrate into their local communities and often distance themselves. This is where social prescribing 
         steps in. Social prescribing, also known as community referral, is when a health professional refers individuals to 
         link workers, who will then try to connect them to support in their community. Some of the main roles of a social 
         prescribing link worker are to help strengthen communities, support existing community groups, and encourage individuals' 
         active involvement in their local communities.</p>
         </div>

        </section>

        {/* second section -competitors */}
      
        <section className="grid place-items-center my-20">
        
        <h1 className=" text-brandblack opacity-90 left-0 text-7xl font-homemade  whitespace-nowrap overflow-hidden mt-20">~ Competitors ~</h1> 
        <h3 className='mt-5 mb-10 bg-brandblack text-2xl font-homemade text-brandcream'>Discovery: Adoddle</h3>
        <p className="w-[50%] lg:w-[47%]  mt-5 text-center text-sm xl:text-1.7vw font-homemade font-500 leading-.82 ">
        
        During this phase, the implementation of market research through competitor analysis via SWOT, thorough user 
        research, usability, navigation, layout, and design really aided in analysing the current market and the 
        opportunities available.<br/>

        <br/> Currently, there are no other apps or companies that provide the same services designed to assist and support
        link workers. However, there are some that serve to tackle similar issues, so I focused on the apps and 
        platforms that provided a solution to the issue at hand to see what they did well and where there might be 
        opportunities and a UPS.</p>
        

        
        <div className="grid grid-cols-2  gap-4 my-20 ">

        <div className="bg-brandblack w-[27rem] h-[20rem] p-5">
        <ul className='text-3xl underline text-center text-brandblack font-homemade font-500 leading-.82 -tracking-.04em my-5 
         bg-gradient-to-r from-yellow-100 to-[#BAE5F3] mx-[8rem]'>stregnths</ul>
           <p className=' text-sm text-brandcream mx-5 mb-5 '>
           ~ A unique "Traffic Light" strategy that allows individuals to see how up-to-date group information is.</p>

           <p className=' text-sm text-brandcream mx-5  mb-5 '>
           ~ Brings together organisations and charities and provides a vast amount of information about groups 
           and organisations around the UK.</p>

           <p className=' text-sm text-brandcream mx-5 '>
           ~ Allows users to filter events by radius and specify how far they are willing to travel.</p>
        </div>

        <div className="bg-brandblack w-[27rem] h-[30rem] p-5 ">
        <h1 className='text-3xl underline text-center text-brandblack font-homemade font-500 leading-.82 
        -tracking-.04em my-5 bg-gradient-to-r from-yellow-100 to-[#BAE5F3] mx-[5rem]'>Opportunities</h1>
        <p className='text-sm text-brandcream mx-5 mb-5'>
         ~ There's a focus on bringing people into the community, but there could be more of a focus on supporting vulnerable individuals and 
         helping them integrate into the community, as well as ways in which they can be supported for them to successfully 
         feel part of the community.</p>

         <p className='text-sm text-brandcream mx-5 mb-5'>
         ~ Feels impersonal, and there is a lot of information to navigate through, perhaps it would be useful for an individual to have 
         an account to view groups they are interested in.</p>

         <p className='text-sm text-brandcream mx-5 mb-5'>
         ~ Health professionals assist vulnerable and isolated individuals, but they are already under strain. Could something be done 
         to help elevate the load?</p>

         <p className='text-sm text-brandcream mx-5'>
         ~ Loneliness is at an all time high, and there aren't many competitors tackling this issue. </p>
        </div>


       <div className="bg-brandblack w-[27rem] h-[22rem] -mt-40 p-5">
       <h1 className='text-3xl underline text-center text-brandblack font-homemade font-500 leading-.82 -tracking-.04em my-5 
       bg-gradient-to-r from-yellow-100 to-[#BAE5F3] mx-[8rem]'
       >weaknesses</h1>
       <p className='text-sm text-brandcream mx-5 text-justify'>
         ~ Information on events and groups isn't regularly updated, making 
         it difficult and unclear for individuals to know whether an event is
          still available.</p>
        </div>


        <div className="bg-brandblack w-[27rem] h-[12rem] p-5 ">
        <h1 className='text-3xl underline text-center text-brandblack font-homemade font-500 leading-.82 
        -tracking-.04em my-5 bg-gradient-to-r from-yellow-100 to-[#BAE5F3] mx-[8rem]'>threats</h1>
           <p className=' text-sm text-brandcream mx-5 mb-5 text-justify'>
           ~ It is difficult to reach some of the most vulnerable people because they are not online, are not interested in technology, 
         or do not have access.</p>

        </div>
        </div>
        <div className="italic grid place-items-center text-xl font-homemade font-500 leading-.82 -tracking-.04em bg-brandblack py-16 text-brandcream">
        <h1 className="text-5xl mb-20 underline">Insights</h1>

        <div className="grid grid-cols-3 gap-10 px-20">
         <p className="first-line:tracking-normal first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
        1. Having a centralised place where you can view and access information on the activities that are happening 
        around you is key to getting individuals involved in their community;</p>

        <p className="first-line:tracking-normal first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
        2. ensuring that it feels personal and 
        tailored to them and their interests can also encourage individuals to do so. </p>

        <p className="first-line:tracking-normal first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left">
        3. It is also vital to ensure 
        vulnerable individuals feel supported even after being introduced to an event or group to ensure successful 
        integration.</p>
        </div>
       </div>
       </section>

        
         {/* third section - market research */}

         <section className="grid place-content-center" >
        <div>
        <h1  className=" text-brandblack opacity-90 text-8xl font-homemade lowercase text-center ">~ MARKET RESEARCH ~</h1>
         <p className="w-[35em] mt-10 text-center text-2xl xl:text-1.7vw font-homemade font-500 leading-[1] -tracking-.04em mb-20">
         At this stage, we started talking to the user. Hearing from both the Link workers and some vulnerable users who are in 
         different circumstances that have left them feeling socially isolated from their community was extremely insightful 
         and assured us that we were heading in the right direction.</p>
        
         

        <ul className="my-5 text-justify text-xl font-homemade  font-500 -tracking-.04em leading-8 list-disc
                        border-2 border-black border-dashed text-brandblack w-[42em] h-[25em] p-20">
        <h1 className=" text-5xl font-arial font-500 leading-.82 -tracking-.04em grid place-items-center mb-10">~ GOALS ~</h1>
          <li>To understand if / how often the target demographic experiences loneliness.</li>
          <li>Whether they have recognised loneliness among their peers of a similar age group.</li>
          <li>To find out if they feel connected and part of a community in their neighborhood?</li>
          <li>Whether or not the targeted demographic uses or has used applications to connect with people in their immediate vicinity.</li>
          <li>To understand whether they find applications or platforms with the intention of connecting individuals beneficial</li>
          <li>If there is interest in new applications that strive to help mature individuals feel part of their community.</li>
        </ul>
         
         
         <div className="grid place-items-center">
            <h1 className=" text-5xl  font-500 leading-.82 -tracking-.04em  mt-20 font-homemade text-brandblack bg-gradient-to-r from-yellow-100 to-[#BAE5F3]">~ insights ~</h1>
              <p className="w-[35em]  my-5  text-justify text-[1.5vw] font-homemade  font-500 leading-[1] -tracking-.04em ">
                According to the responses, <b>the target demographic is more connected to their local community</b> than the younger generation; 
                many of them <b>were members of social groups and were aware of what was going on in their community</b>.However, when asked
                if they knew someone who suffered from loneliness, the vast majority of responses were "yes," 
                and when asked why that was, a number of reasons were given, such as loss, disability, mental health, etc.
              </p>
          </div>

          </div>
          </section>


          {/* forth section - market research part 2 */}
          
        <section className="grid place-items-center">
              <h1  className=" text-brandblack opacity-90 text-6xl font-homemade  text-center bg-gradient-to-r from-yellow-100 to-[#BAE5F3] mx-52 mt-20">~ the research continues~</h1>
              
              <p className="w-[35em] mt-10 text-1.7vw text-center font-homemade font-500 leading-[1] -tracking-.04em mb-20">
              Due to the insight that was gained from the first round of user research, the direction for the application changed. 
              There was still a focus on connecting individuals to their local community, but <b>the demographic changed, moving 
              from mature / elderly individuals to vulnerable ones.</b> Through further research, we stumbled across social 
              prescribing, which aims to solve the same issue. To learn more and gain insight about social prescribing and the 
              issue at hand, we spoke with CANS (Citizens Advice North Somerset) and undertook user research with Link workers.</p>
          
        </section>



         {/* fifth section - user personas */}
           
        <section className="grid place-content-center" >
          <div className="grid place-content-center">
          <h1 className="text-brandblack opacity-90 text-7xl font-homemade "> ~ Connecting to the user~</h1>
          <p className="w-[35em] mt-10 text-center text-1.7vw font-homemade font-500 leading-[1] -tracking-.04em mb-20">
          At this stage, we started talking to the user. Hearing from both the Link workers and some vulnerable users who are in 
          different circumstances that have left them feeling socially isolated from their community was extremely insightful 
          and assured us that we were heading in the right direction.
          This is where. <a href="/Userstories and personas.pdf" className='bg-gradient-to-r from-yellow-100 to-[#BAE5F3]'>User Story and Personas (pdf)</a></p> 
          </div>

          <div className='columns-2 gap-10 '>
          <img src={Circlesimages.personaone} width={500} height={500}  className="mb-10" alt="user persona"  role="img"  aria-label="user persona"/>
          <img src={Circlesimages.personatwo} width={500} height={500}  alt="user persona" role="img" aria-label="user person two"/>
          <img src={Circlesimages.personathree} width={500} height={500}  className="mb-10" alt="user persona"  role="img"  aria-label="user persona"/>
          <img src={Circlesimages.personafour} width={500} height={500}  alt="user persona" className="mb-20" role="img" aria-label="user persona"/>
          </div>
      </section>
         
       {/* sixth section user journey */}
        
      <section className="grid place-content-center">
        <h1 className=" text-brandblack opacity-90 left-0 text-7xl font-homemade  whitespace-nowrap overflow-hidden mt-20 bg-gradient-to-r from-yellow-100 to-[#BAE5F3]">~ the application structure ~</h1> 
        <h3 className='text-2xl text-brandblack underline opacity-80 p-1 font-homemade font-bold leading-.82 -tracking-.04em text-center '>The journey map</h3>
        <p className="w-[30em] mt-10 ml-12 text-center text-2xl font-homemade font-500 leading-[1] -tracking-.04em mb-20">
        A journey map was made use of in order to get a visual idea of the user's steps through the application and, in addition, 
        to provide a better understanding of the user's journey. Based on the insights gained from Link workers, it was 
        determined whether additional steps needed to be implemented or reconsidered.</p>
        <img src={Circlesimages.userflow} width={800} height={700} alt="user person one"  className="mb-20" role="img"  aria-label="user person one"/>
       </section>



        {/* seventh wireframes */}
        <section className="grid place-content-center">
            <h1 className=" text-brandblack opacity-90 left-0 text-7xl font-homemade lowercase whitespace-nowrap overflow-hidden mt-20">
                 ~WIRE FRAMING, PROTOYPING, USABILITY TESTING~</h1>

               <div className="grid place-content-center">
              <p className="w-[35em] mt-10 text-center text-1.7vw font-homemade font-500 leading-[1] -tracking-.04em mb-20 ">
              Low-fidelity and high-fidelity wireframes were implemented to get an idea of the general structure of the platform. 
              Which further aided in highlighting the user's journey and ensuring that it was as intuitive and straight-forward 
              as possible, with positive feedback from link workers supporting the application's structure and design for both 
              them and their clients.</p>
        
              <p className='mb-10 text-xl text-center font-arial  '>~ Wireframes ~</p>
                <img src={Circlesimages.wireframes} width={900} height={900} alt="lo-fi wireframe" role="img"  aria-label="lo-fi wireframe"/>
                </div> 

                <div className="grid place-content-center">
                <p className='mt-32 text-xl text-center font-arial '>~ Prototype ~</p>      
                <video autoPlay loop muted className='w-[60em] h-[60em] -mt-36'>
                    <source src='/circles.mp4' type='video/mp4' />
                    Your browser does not support the video tag.
                    </video>
                    </div>  
      </section>

      {/*eigth visualisation */}
      
<section className="grid place-content-center" >
<h1 className=" text-center text-5xl font-arial font-500 leading-.82 -tracking-.04em  mt-20 ">~ VISUAL DESIGN / BRANDING ~</h1>

<p className="w-[35em] mt-10 text-center text-1.7vw font-homemade font-500 leading-.82 -tracking-.04em mb-20 ">
Accessibility was at the heart of the visual design for the Circles application; from our research, we understood 
that our application needed to be as accessible as possible to cater to our vulnerable target audience. So we 
implemented a minimal design with bold type, easy navigation, and limited gesture control. It's worth noting 
that due to the sensitive nature of the application, a calming colour palette and muted tones were implemented 
to convey and emote this.</p>


</section>
<div className='columns-3 ml-40'>

<img src={Circlesimages.colorscheme} width={500} height={500} alt="mid-fi wireframe"  role="img"  aria-label="mid-fi wireframe"/>
<img src={Circlesimages.typo} width={250} height={250} alt="mid-fi wireframe"  role="img"  aria-label="mid-fi wireframe"/>
<img src={Circlesimages.logo} width={300} height={300} alt="mid-fi wireframe"  className='-ml-36'  role="img"  aria-label="mid-fi wireframe"/>

</div>


<section className='grid place-items-center text-brandblack'>
<h1 className=" text-[5vw] font-arial font-500 leading-.82 -tracking-.04em grid place-items-center mt-24 
bg-gradient-to-r from-yellow-100 to-[#BAE5F3] ">CONCLUSION</h1>

<p className="w-[35em] mt-10 text-justify text-[1.6vw] font-homemade font-500 leading-[1] -tracking-.04em mb-20">
Loneliness is an epidemic in today's society; an issue that once mainly impacted the older and vulnerable generation 
due to the rise of social media and technological advancements now impacts the majority for a plethora of reasons, 
making individuals more disconnected from their local communities than ever. Social prescribing is an important 
solution to this matter and something that can continue to take the pressure off of healthcare professionals who 
normally aid these individuals.</p>

<p className="w-[35em] text-justify text-[1.6vw] font-homemade font-500 leading-[1] -tracking-.04em mb-20">
There is a great opportunity to help and support the social prescribing scheme, the Link workers, 
and the vulnerable individuals that benefit from it most through platforms like "Circles." 
If given more time, additional features would've been implemented, which would've truly added 
more value to the application and better supported our Link workers.</p> 

<h2 className=" text-5xl font-arial  -tracking-.04em grid place-items-center
">
~ STRETCH GOALS ~</h2>
<ul className="w-[35em] my-5 text-justify text-[1.5vw] font-homemade  font-500 -tracking-.04em list-disc">
          <li>The scroll bar on the account page needs to be changed so that it appears only when there are events planned for the day.
          </li><br/>

          <li>Create an account platform for Link workers. Features would include a component that allows Link workers to track their 
          assigned clients, how involved they are in the community, and how they are getting along in their groups and events.</li><br/>

          <li>Further work needs to be done on the responsiveness of the site so that it adjusts depending on the environment it's 
          being viewed in. (MVP was to create a web application due to research from Link workers saying that their usual procedure when 
          dealing with their clients is to look at groups in their office.)</li><br/>
          
          <li>Schedule and carry out more real-world testing and empathy mapping with the target audience. Collect feedback and 
          integrate this into a new sprint.</li><br/>

          <li>Create an account platform for group administrators to set up new groups on the platform, with the intention of making 
          requests to join groups directly through the application possible.</li><br/>

          <li>Further integration of Next Auth with more tables added to the database for authorising different accounts.</li><br/>

          <li>Delve further into accessibility and aim to achieve 100 on Lighthouse reports. Increase the ARIA coverage on the application.</li><br/>

          <li>Build a more comprehensive testing suite.</li>
        </ul>

<h2 className=" mt-10 text-5xl font-arial font-500 leading-.82 -tracking-.04em grid place-items-center bg-gradient-to-r from-yellow-100 to-[#BAE5F3]">
CHALLENGES</h2>
<p className="w-[35em] mt-10 text-justify text-2xl font-homemade font-500 leading-.82  mb-20">
Throughout this project, there were countless challenges that presented themselves: the complexities of the chosen topic, 
the topic's sensitivity, market research, to name a few, but here are the most pertinent ones.</p>

<h2 className=" mt-10 text-4xl font-arial font-500 leading-.82 -tracking-.04em grid place-items-center bg-gradient-to-r from-yellow-100 to-[#BAE5F3]">
Free Plan Limitations</h2>
<p className="w-[35em] mt-10 text-justify text-2xl font-homemade font-500 leading-.82 -tracking-.04em mb-20">
Database connections were a challenge throughout the project, as we were only limited to five connections on a
free plan for a group of six individuals. This made running the servers during development a balancing act when
sometimes required more connections. To get around this, we used pair planning whenever possible.  
</p>

<h2 className=" mt-10 text-4xl font-arial font-500 leading-.82 -tracking-.04em grid place-items-center bg-gradient-to-r from-yellow-100 to-[#BAE5F3]">
CSS consistency and Responsiveness</h2>
<p className="w-[35em] mt-10 text-justify text-2xl font-homemade font-500 leading-.82 -tracking-.04em mb-20">
Responsiveness was one of the roadblocks that we faced as a team, and I think this was a particular issue due to us 
not dealing with it until we had finished our MVP. If I could go back, I would work on the responsiveness as we went, 
or if we had the resources available, I would have a team working on the CSS and responsiveness. 
</p>

<h2 className=" mt-10 text-4xl font-arial font-500 leading-.82 -tracking-.04em grid place-items-center bg-gradient-to-r from-yellow-100 to-[#BAE5F3]">
Deployment and Merging</h2>
<p className="w-[35em] mt-10 text-justify text-2xl font-homemade font-500 leading-.82 -tracking-.04em mb-20">
Despite there being a good merging policy in place, we occasionally experienced roadblocks, for example, 
package lock errors and empty components. Going back, I would make changes to the merging policy and 
suggest merging more often and, if possible, way before deployment.
</p>


</section>
        
        </div>
       
        </div>
        

    
        
   
   
    )
}

export default Circles;