import React from 'react'
import Testtwo from "../assets/Testtwo.svg"
import Testthree from "../assets/Testthree.svg"

function Testimonial() {
  return (
    <div  className='bg-[#F8F9FC]  '>
        <div>
            <h1 className='text-5xl font-bold' >What Our Clients Are Saying</h1>
            <p className='text-xs'>
            High Definition Video Is Video Of High Resolution And Quality Than Standard Definition.While<br /> There's
            Is No Standard Meaning For High Definition.Generally Any Standard Video Image
            </p>
        </div>
        <div className='grid grid-cols-3 gap-4 px-32 pt-10 '>
            <img src={Testthree} alt=''/>
            <img  className='' src={Testtwo} alt=''/>
            <img  className='' src={Testthree} alt=''/>
            
           
        </div>
    </div>
  )
}

export default Testimonial