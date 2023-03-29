import React from 'react';
import Vector from "../assets/Vector.svg"
import Audio from "../assets/Audioclasses.svg"
import Live from "../assets/Liveclasses.png"
import Recorded from "../assets/Recordedclasses.svg"
import Fifty from "../assets/fiftynotes.svg"
import Techgirl from "../assets/techgirl.svg"
import Computer from "../assets/computer.svg"
import Enrolled from "../assets/EnrolledStudents.png"

function Aboutus() {
  return (
    <div className='bg-[#F8F9FC]  auth-form-container '>
        <div className='p-16 flex gap-16 flex-col space-between lg:flex-row space-between items-left w-screen z-10'>
       <div className=''>

          <img className='px-1 py-2 ' src ={Vector} alt =""/>
        <h1 className='text-4xl md:flex font-bold'>High quality video,audio <br /> & live Classes</h1>
        <p className='text-[#A1A1A1]' >
           High Definition Video Is Video Of High Resolution And Quality Than Standard <br />Definition.While There's
            Is No Standard Meaning For High Definition.Generally Any<br /> Standard Video Image
        </p>
        <button className='px-8 py-3 mt-2 mb-4 text-[#fff] bg-[#004DB3]'>
          view courses
        </button>
        <div className=' grid grid-cols-2 gap-4'>
        
        <img src={Audio} alt='' />
        <img src={Live} alt='' />
        <img src={Recorded} alt='' />
        <img src={Fifty} alt='' />

        </div>
      </div>
       
        <div className=' w-[50vw] md:flex flex-col container h-[100%] mx-auto justify-between '>
          <div className='relative flex-col ml-auto  '>
        <div className="image absolute top-[70px] left-[-130px]">
  
        <img className='giggly' src={Enrolled} alt=''  />
  </div>
     <div className="image h-[81%] w-[40%] md:overflow-h[60vh]">

        <img  className='h-[100%] giggly md:h-30 md:w-30' src={Techgirl} alt='' />
</div>
        <div className="image absolute h-[50%] left-[-25%] top-[45%]">
        <img className='item-center h-[100%] giggly' src={Computer} alt='' />
        </div>
        </div>
        </div>

        </div>
       
       
    </div>
  )
}



export default Aboutus