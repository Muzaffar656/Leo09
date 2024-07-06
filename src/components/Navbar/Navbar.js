import React from 'react'
import './Navbar.css'
import logo from '../../images/leo09_logo.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5"
import { Link } from 'react-router-dom';
const Navbar = () => {
  const handleNavbar= ()=>{
    let ul = document.querySelector('.mobilenavbar')
    ul.style.right = '0'
  }
  const handlerMobile = ()=>{
    let item = document.querySelector(".mobilenavbar")
    item.style.right = "-345px"
  }
  return (
    
    <header className=' z-10 bg-white  fixed right-0   left-0  top-0 sm:w-full  '>
      <div className="  sm:w-930 sm:h-70  px-4  h-m-60 flex items-center justify-between m-auto   ">
        <div className="logo  h-37 w-90 w-100">
          <a href="/"><img className='w-full align-middle' src={logo} alt="logo-img" /></a>
        </div>

        <ul className="hidden sm:flex text-black navigation">
          <li className='px-5'><a href="/work" className='text-black text-14 hover:text-red-500' >Work</a></li>
          <li className='px-5'><a href="/Services" className='text-black text-14 hover:text-red-500'>Services</a></li>
          <li className='px-5'><a href="/Clients" className='text-black text-14 hover:text-red-500'>Clients</a></li>
          <li className='px-5'><a href="/About" className=' text-black text-14 hover:text-red-500'>About</a></li>
          <li className='px-5'><a href="/Knowledge" className='text-black text-14 hover:text-red-500'>Knowledge</a></li>
          <li className='px-5 pr-5'><Link to={"/contact"} className='bg-black px-14 py-4 text-white rounded-md'>Contact</Link></li>
        </ul>

        <ul style={{boxShadow:"0 0 20px rgba(0,0,0,0.1)"}} className='mobilenavbar h-screen absolute bg-white mobile z-20  sm:hidden  flex flex-col rights   w-96 top-0  px-10 '>
        <div className=' absolute top-3 right-2'>
        <IoClose className='text-4xl cursor-pointer' onClick={handlerMobile} />
        </div>
          <li className=' text-red-500 mb-10 font-bold text-2xl text-left mt-10'><a href="/work">Work</a></li>
          <li className='mb-10 font-bold text-2xl text-left'><a href="/work">Services</a></li>
          <li className='mb-10 font-bold text-2xl text-left'><a href="/work">Client</a></li>
          <li className='mb-10 font-bold text-2xl text-left'><a href="/work">About</a></li>
          <li className='mb-10 font-bold text-2xl text-left'><a href="/work">Knowledge</a></li>
          <ul className='mt-20'>
              <li><a href="/leo09" className=' underline text-blue-600'>info@leo9studio.com</a></li>
              <li className='mt-8'><a className='font-bold text-xl'  href="number"><strong className='font-bold text-gray-400'>IND :</strong> <br />
             +91  9179638187 <br />
             +91  8602122252
              </a></li>
              <li className='mt-8'><a className='font-bold text-xl'  href="number"><strong className='font-bold text-gray-400'>USA :</strong> <br />
              +1 (802) 347-3690
              </a></li>
          </ul>
              <Link to={"/contact"} className=' border text-center font-bold text-2xl py-3 border-gray-950 rounded-sm mt-4 hover:bg-black hover:text-white hover:border-gray-100 w-full '>Contact</Link>
        </ul>

        <div className='sm:hidden w-10 h-10 '>
        <RxHamburgerMenu onClick={handleNavbar} className='w-full relative h-full font-extrabold cursor-pointer' />
        </div>

      </div>
    </header>

  )
}

export default Navbar
