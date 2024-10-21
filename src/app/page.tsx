import React from 'react'
import Image from 'next/image'

 const Home = () => {
  return (
    <div className='image-container ml-56 mt-7'>
    
        <Image
        //  className="mt-16 items-center ml-56 bg-none " 
        src="/images/2.png"
        alt=''
        width={800}
        height={440}/>
      
      <div className='text text-5xl font-light text-zinc-200 '>
        {/* text */}
        <p >We Created Art<br /> For our Beloved <br />Customers</p>
      </div>
    </div>
     
   
  )
}

export default Home