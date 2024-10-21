'use client';
import React from 'react'
import Image from 'next/image'

const Hero = () => {

  const handleClick = (()=>{
    alert(`OK ADDED `)
  })
  return (
    <div>
        <div>
            <div className='hero-image'>
                  <Image 
       className="rounded-tl-3xl rounded-br-3xl" 
       src="/images/c.jpg" 
       alt="joe biden"
        width={800}
         height={440}
         />
          <div className='hero-text'>
        <h1> 
            Lets make your <br />
             Home Beautiful together</h1>
             <p >There are many variation of the passage <br />
             of lorem ipsum from majority</p>
             <button className='py-4 px-8 bg-orange-300 hover:bg-orange-500 duration-500 rounded-xl' onClick={handleClick}>Get Started</button>
             
      </div>
            </div>

       
            
         </div>

         <div className='flex items-center gap-x-14 mt-10 font-serif'>
            <div className='ml-60 '>
                {/* =============1======================== */}
                <h3 className='ml-9  hover:text-gray-600 duration-200'>Project Plan</h3>
                <p className='text-base  hover:text-gray-600 duration-300'>There are many variation of the <br />
                     passage of lorem ipsum from  <br />
                      majority</p>
                <button className='border-none bg-slate-100 px-2 p-2 ml-9 font-serif hover:bg-gray-500 duration-500'>read more </button>

            </div>
            {/* ====================2======================== */}
            <div className='border-8 '>
                {/* =============1======================== */}
                <h3 className='ml-9  hover:text-gray-600 duration-200'> Interioir Work</h3>
                <p className='text-base  hover:text-gray-600 duration-300'>There are many variation of the <br />
                     passage of lorem ipsum  from <br />
                      majority</p>
                <button  className='border-none bg-slate-100 px-2 p-2 ml-9  hover:bg-gray-500 duration-500 '>read more </button>

            </div>


            {/* ==================3============== */}
            <div>
                {/* =============1======================== */}
                <h3 className='ml-9  hover:text-gray-600 duration-200'>Realization </h3>
                <p   className='text-base  hover:text-gray-600 duration-300'>There are many variation of the <br />
                     passage of lorem ipsum from <br />
                      majority</p>
                <button  className='border-none bg-slate-100 px-2 p-2 ml-9  hover:bg-gray-500 duration-500'>read more </button>

            </div>
         </div>
        
   
        
    </div>
  )
}

export default Hero
