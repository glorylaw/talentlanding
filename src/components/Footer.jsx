import React from 'react'
import Facebook from "../assets/Facebook.png"


function Footer() {
  return (
    <div className='bg-[#000F24]'>
        <div className=' flex justify-evenly text-[#ffffff] pt-32 pb-32  px-3  '>
            <div>
            <img  className='pt-7' src={Facebook} alt=''/>
            </div>

            <div className=''>
            <ul>
            <li className='text-2xl font-extrabold'>Useful links</li>
                <li>Home</li>
                <li>About Us</li>
                <li>Our Course</li>
                <li>Testimonial</li>
                <li>Our Community</li>
            </ul>
         
            </div>

            <div>
         
            <ul>
            <li className='text-2xl font-extrabold'>Community</li>
                <li>Help Center</li>
                <li>Partners</li>
                <li>Suggestion</li>
                <li>Blog</li>
                <li>News Letter</li>
            </ul>
            </div>

            <div className='flex-col sm:flex'>
                <ul>
                <li className='text-2xl font-extrabold'>Subscribe</li></ul>
                <div className='gap-0'>
            <form  className='flex space-x-0  lg:flex-row'>
          <input
            className=' h-54 w-full rounded-sm font-body text-sm text-[#424141] px-8 py-3 mt-2 mb-4'
            type='email'
            placeholder='nft123@gmail.com'
            name="email"
          />
          <button className=' bg-[#004DB3] rounded-sm  px-8 py-3 mt-2 mb-4 lg:max-w-[150px] lg:ml-4 h-54 font-body font-semibold text-sm  w-full flex items-center justify-center  text-white'>
            Send Message
          </button>
        </form>
        </div>
            </div>
        </div>
    </div>
  )
}

export default Footer