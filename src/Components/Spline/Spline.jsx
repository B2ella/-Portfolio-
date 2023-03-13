import Spline from '@splinetool/react-spline';
import React, { Suspense } from 'react';




const SplineCircles = () => {

    

    return (
    <section className='h-screen bg-brandcream '>
     
     <Suspense fallback={<div>Loading...</div>}>
     <div className='absolute right-0'>
      <Spline scene="https://prod.spline.design/wHeXdPlZF55Of4ED/scene.splinecode"/>
    </div>
    </Suspense>
    
  <div className='absolute top-1/2 ml-10'>
  <h1  className=' text-brandblack text-7.3vw font-homemade lowercase font-500 leading-.82 -tracking-.04em'>THE CIRCLES APP</h1>
  <p  className=' mt-6 text-black text-3xl font-homemade font-500 leading-.82 -tracking-.04em w-96 '>Helping socially prescribed and vulnerable individuals integrate into their local communities.</p>

  <div className='mt-10'>
    <a href="https://circlesapp.netlify.app/" className='mx-10 text-lg animate-pulse text-brandblack 
    hover:border-2 hover:bg-brandblack hover:text-brandcream hover:w-20 hover:h-40 hover:rounded-full font-arial'>~ site ~</a>
    
    <a href="https://github.com/B2ella/circles_app/" 
    className='htext-lg animate-pulse text-brandblack 
    hover:border-2 hover:bg-brandblack hover:text-brandcream hover:w-20 hover:h-40 hover:rounded-full font-arial'>~ Github ~</a>
  </div>
  </div>
  



        </section>
    )
}

export default SplineCircles;