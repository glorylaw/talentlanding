import React from 'react';
import Webest from "../assets/Webest.svg"
import Photoone from "../assets/Photoone.svg"
import Phototwo from "../assets/Phototwo.svg"
import Photothree from "../assets/Photothree.png"
import Photofour from "../assets/Photofour.svg"

function AboutUsTwo() {
  return (
    <div className='bg-[#F8F9FC]'>
        <div className='flex flex-col lg:flex-row  justify-between px-6'>
            <div>
            <h1 className='text-4xl md:flex font-bold px-3 py-3'>This Is Why We Are Best <br /> From Others</h1>
            <p className='text-[#A1A1A1] px-4 pb-10 pt-4'>
            High Definition Video Is Video Of High Resolution And Quality Than Standard <br />Definition.While There's
            Is No Standard Meaning For High Definition.Generally Any<br /> Standard Video Image
            </p>
            <img className='h-[60%] pb-10' src={Webest} alt =""/>
            </div>
            <div className='grid grid-cols-2 gap-2 sm:pt-5 '>
        <img src={Photoone} alt =""/>
        <img src={Phototwo} alt =""/>
        <img src={Photothree} alt =""/>
        <img src={Photofour} alt =""/>
            </div>
        </div>
    </div>
  )
}

export default AboutUsTwo