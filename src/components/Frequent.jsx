import React from 'react'
import Circle from "../assets/Circle.svg"
//import Semictwo from "../assets/Semictwo.png"
 //import Semicone from "../assets/Semicone.png"
 //import Zigzag from "../assets/Zigzag.svg"
import Frequents from "../assets/Frequently.png"
//import{PlusIcon,MinusIcon} from "@heroicons/react/outline"



function Frequent() {
  return (
    <div>
        <div className=''>
            <h1 className='text-5xl font-bold text-center pt-6'>Frequently Asked Questions</h1>
            <img className='mx' src={Circle} alt=''/>
            <p className='pt-5 pl-8  text-xs text-center pb-10 text-[#A1A1A1]' >High Definition Video Is Video Of High Resolution And Quality Than Standard Definition.While<br /> There's
            Is No Standard Meaning For High Definition.Generally Any Standard Video Image</p>
            {/* <div className=''>
                <div className='flex justify-evenly pt-32 '>
                <h2  className='text-[#004DB3] font-bold'>Is There A Free Trail Available? <p className='para'>High Definition Video Is Video Of High Resolution And Quality Than Standard Definition.High Definition Video Is Video Of High Resolution<br/> 
                Build your future with our quality education.The best and largest All-in-one online tutoring platform in <br />The World Definition
            </p> </h2> 
                <MinusIcon className='w-5 pt-5 text-[#004DB3]'/>
                </div>
                <div className='flex justify-evenly pt-12 '>
                <h2  className='text-[#004DB3] font-bold'>Is There A Free Trail Available? <p></p> </h2> 
                <PlusIcon className='w-5 pt-5 text-[#004DB3]'/>
                </div>
                </div> */}
                {/* <img className='ml-auto' src={Semictwo} alt=''/> */}
                {/* <img className='h-[20%]' src={Zigzag} alt=''/>  */}

           <img className='mx-auto px-32 pb-7' src={Frequents} alt=''/> 
            
            
            
        </div>
    </div>
  )
}

export default Frequent