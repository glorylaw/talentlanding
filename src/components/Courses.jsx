import React from 'react'
import Courseone from "../assets/Courseone.svg";
import Coursetwo from "../assets/Coursetwo.png";
import Coursethree from "../assets/Coursethree.svg";
import Coursefour from "../assets/Coursefour.svg";
import Coursefive from "../assets/Coursefive.svg";
import Coursesix from "../assets/Coursesix.svg";

function Courses() {
  return (
    <div className='bg-[#F8F9FC]  '>
        <div className='px-4 '>
            <div className=''>
            <h1 className='text-4xl font-bold text-center'>Browse Our Popular Courses</h1>
            <p className='pt-5 pl-8 text-center text-xs' >High Definition Video Is Video Of High Resolution And Quality Than Standard Definition.While<br /> There's
            Is No Standard Meaning For High Definition.Generally Any Standard Video Image</p>
            </div>
            <div>
            <ul className=' py-2 pt-10 justify-center text-[#A1A1A1] flex item-center'>
            <button className='px-8 py-3 mt-2 mb-4 text-[#004DB3] bg-[#FFFFFF]'>All Categories</button>
           <li>Design</li>
           <li>Develop</li>
           <li>Marketing</li>
           </ul>
           <div className='grid grid-cols-3 gap-4 px-32 '>
            <img className='' src={Courseone} alt=""/>
            <img src={Coursetwo} alt=""/>
            <img src={Coursethree} alt=""/>
            <img src={Coursefour} alt=""/>
            <img src={Coursefive} alt=""/>
            <img src={Coursesix} alt=""/>
            
            </div>
           <div className=' text-center'>
           <button className='px-8 py-3 mt-2 mb-4 text-[#ffffff] bg-[#004DB3] mybtn text-center justify-center'>Explore All Courses</button>
           </div>
            </div>
            
   
        </div>
    </div>
  )
}

export default Courses