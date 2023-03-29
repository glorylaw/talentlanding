import React from 'react'
import Grouppics from "../assets/Grouppics.svg"


function Community() {
  return (
    <div className='bg-[#004DB3]'>
    <div className='text-[#ffffff] px-32'>
        <p className=' text-center pt-4'> JOIN COMMUNITY</p>
        <h1 className='text-4xl  font-bold text-center '>Are You Ready To Connect With The Future <br/> Of The Tech World</h1>
        <p className='text-center pt-4'>Meet Up With The Future Tech Stars And Grow Together</p>
    </div>
    <div>
        <img className='item-center px-32' src={Grouppics} alt=""/>
    </div>
    <div className=' text-center pb-10 pt-10'>
           <button className='px-8 py-3 mt-2 mb-4 text-[#004DB3] bg-[#ffffff]  text-center justify-center'>Join Our Community</button>
           </div>
    </div>
  )
}

export default Community