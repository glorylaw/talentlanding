import React,{useState} from 'react'
import{MenuIcon,XIcon} from "@heroicons/react/outline"
import Techtime from "../assets/techtime.svg"

import { Link,} from 'react-scroll'

function Navbar() {
  const[nav, setNav] = useState(false)
  const handleClick = ()=> setNav(!nav)
  const handleClose = ()=> setNav(!nav)
  return (
    <div className='w-screen h-[80px] z-10 bg-[#004DB3] fixed drop-shadow-lg'>
      <div className='px-2 flex justify-between item-center w-full h-full'>
    <div className='flex item-center'>
      <img className=' h-[7vh] pt-[15px] ' src={Techtime} alt=''/>
    <ul className='pl-[200px] hidden md:flex text-white cursor-pointer '>
    <li ><Link  to="home" smooth={true} duration={500}>Home</Link></li>
    <li><Link  to="aboutus" smooth={true} offset={-200} duration={500}>About Us</Link></li>
    <li><Link  to="courses" smooth={true} offset={-50} duration={500}>Courses</Link></li>
    <li><Link  to="testimonial" smooth={true} offset={-100} duration={500}>Testimonials</Link></li>
    <li><Link  to="community" smooth={true} offset={-50} duration={500}>Community</Link></li>
    
    </ul>
    </div>
    <div className='hidden md:flex pr-4'>
    <button className='px-8 py-3 mt-2 mb-4'>Enroll Now</button>
    </div>
    <div className='md:hidden' onClick={handleClick}>
      {!nav ? <MenuIcon className='w-5 pt-5 text-white'/>:<XIcon className='w-5 pt-5 text-white'/>}
     
    </div>
      </div>
      <ul className={!nav ? 'hidden':'absolute bg-[#004DB3] w-full px-8 text-white cursor-pointer'}>
      <li className='border-b-2 border-white w-full'><Link onClick={handleClose}  to="home" smooth={true}  duration={500}>Home</Link></li>
      <li className='border-b-2 border-white w-full'><Link onClick={handleClose} to="aboutus" smooth={true} offset={-200} duration={500}>About Us</Link></li>
      <li className='border-b-2 border-white w-full'><Link onClick={handleClose}  to="courses" smooth={true} offset={-50} duration={500}>Courses</Link></li>
      <li className='border-b-2 border-white w-full'><Link onClick={handleClose}  to="testimonial" smooth={true} offset={-100} duration={500}>Testimonials</Link></li>
      <li className='border-b-2 border-white w-full'><Link onClick={handleClose}  to="community" smooth={true} offset={-50} duration={500}>Community</Link></li>
      <div>
        <button className='px-8 py-3 mt-2 mb-4'>Enroll Now</button>
      </div>
      </ul>
        
    </div>
  )
}

export default Navbar