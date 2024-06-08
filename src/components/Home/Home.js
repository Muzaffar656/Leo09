import React, { useState } from 'react'
import './Home.css'
import huggi from '../../images/leo09-hugiies.svg'
import tata from '../../images/leo09-tata.svg'
import sony from '../../images/leo09-sony.svg'
import start from '../../images/leo09-start.svg'
import bmw from '../../images/leo09-bmw.svg'
import pg from '../../images/leo09-pg.svg'

import animation from '../../images/animation.gif'
import animation2 from '../../images/animation2.gif'
import animation4 from '../../images/animation4.jpg'

import map from '../../images/map.mp4'
import clientImage2 from '../../images/clientImage2.jpg'
import clientImage3 from '../../images/clientImage3.jpg'


import starsImg from '../../images/starsImg.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import table from '../../images/table.svg'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { HiMiniArrowLongRight } from "react-icons/hi2";

import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialDribbble } from "react-icons/sl";
const Home = () => {
  const [showBar, setShowBar] = useState(false)
  const handleshowBar = () => {
    setShowBar(!showBar)
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const data = [
    // {
    //   img: clientImage,
    //   clientTitle: "What Client Say",
    //   clientName: "Kapil Prashad",
    //   CompanyName: "C.T.O. - Payzli",
    //   Description: "Team Leo9 works tirelessly to get deliverables to meet all client needs. Their organization should be trusted because they’ve continued todeliver quality over and over again.",
    //   startImg: starsImg

    // },
    {
      img: clientImage2,
      clientTitle: "What Client Say",
      clientName: "Manoj jay",
      CompanyName: "C.T.O. - Phone Pay",
      Description: "Team Leo9 works tirelessly to get deliverables to meet all client needs. Their organization should be trusted because they’ve continued todeliver quality over and over again.",
      startImg: starsImg

    },
    {
      img: clientImage3,
      clientTitle: "What Client Say",
      clientName: "Anil Kamble",
      CompanyName: "C.T.O. - Google Pay",
      Description: "Team Leo9 works tirelessly to get deliverables to meet all client needs. Their organization should be trusted because they’ve continued todeliver quality over and over again.",
      startImg: starsImg

    }

  ]


  return (


    <section className=' relative sm:top-56 top-40  flex flex-col '>
      <div className='flex gap-4 flex-col sm:container  max-w-4xl px-2 m-auto'>
      
      <div className='text-6xl font-bold main-text'>
        <h1 className='mb-2'>Design</h1>
        <h1 className='mb-2'>Transform</h1>
        <h1>Accelerate</h1>
      </div>

        <div className='sm:text-3xl text-2xl sm:mt-0 mt-4'>
          <p>We Revolutionize User Experience <br />Using Behavioural Science.</p>
        </div>

        {/* Logo Section */}
        <ul className='flex flex-wrap justify-between mt-20 '>
        <li className='px-3 py-6'><img src={huggi} alt="huggis logo" /></li>
        <li className='px-3 py-6'><img src={tata} alt="tata logo" /></li>
        <li className='px-3 py-6'><img src={sony} alt="sony logo" /></li>
        <li className='px-3 py-6'><img src={start} alt="start logo" /></li>
        <li className='px-3 py-6'><img src={bmw} alt="bmw logo" /></li>
        <li className='px-3 py-6'><img src={pg} alt="pg logo" /></li>

        </ul>
        {/* Logo Section  End -------- */}

        {/* Text section */}
        <h1 className='mt-20 sm:mt-28 sm:text-5xl text-4xl leading-tight font-bold'>We are a global creative agency that combines design expertise with technology and intelligence.</h1>
        {/* Text section End---------- */}

        {/* services Colum */}
<div className='text-center sm:text-left'>


        <div className=' sm:mt-40 mt-24  flex flex-col sm:flex-row items-center justify-between '>
          <ul className='flex  flex-col   mt-5 text-2xl gap-4 font-medium'>
            <h2 className=' font-bold text-6xl '>Design</h2>
            <li className='mt-5'>UI DESIGN</li>
            <li>UX DESIGN</li>
            <li>UX Consultancy</li>
            <li>Design System</li>
            <li>Animation</li>
            <li>Illustrations</li>
          </ul>
          <div className='mt-8'>
            <img className=' sm:h-96 h-64 w-image-width sm:w-full' src={animation4} alt="animation" />
          </div>
        </div>

        <div className=' flex-col sm:flex-row mt-6 flex items-center justify-between  '>
          <ul className= ' flex  flex-col  mt-5 text-2xl gap-4 font-medium'>
            <h2 className=' font-bold text-6xl '>Technology</h2>
            <li className='mt-5'>Web Design</li>
            <li>Softwares</li>
            <li>Mobile Apps</li>
            <li>Web Apps</li>
            <li>Front-End</li>
            <li>Back-End</li>

          </ul>
          <div className='mt-8'>
            <img className=' sm:h-96 h-64 w-image-width sm:w-full' src={animation} alt="animation" />
          </div>

        </div>

        <div className='flex-col sm:flex-row  mt-6 flex items-center justify-between'>
          <ul className='flex  flex-col  mt-5 text-2xl gap-4 font-medium'>
            <h2 className=' font-bold text-6xl '>Business</h2>
            <li className='mt-5'>Branding</li>
            <li>Brand Name</li>
            <li>Brand Guidelines</li>
            <li>Design System</li>
            <li>Digital Marketing</li>
            <li>S.E.O.</li>


          </ul>
          <div className='mt-8'>
            <img className=' h-96 w-image-width sm:w-full' src={animation2} alt="animation" />
          </div>
        </div>
        </div>
        {/* services Colum End------- */}

        {/* paragraph */}
        <h1 className=' mt-28 sm:text-5xl text-4xl leading-tight font-bold'>As global leaders in UX UI, technology, and business solutions, we partner with clients to simplify, strengthen, and transform their businesses.</h1>
        {/* paragraph End------------*/}



      </div>
      {/* Images col-3 */}
      <div>
        <section className=' flex flex-col   sm:grid grid-cols-3 gap-5 mt-36 mb-52 px-10  '>

          <div className='red-container  flex flex-col justify-center gap-4  py-36 mt-6 items-center text-center '>
            <h1 className=' text-white text-4xl font-bold ' >RIGI</h1>
            <p className=' text-white text-xl'>Innovated Community Empoverment Website</p>
            {/* <span className=' text-white text-xl'> Website </span> */}
            <ul className='flex items-center text-xl gap-6 text-white font-light'>
              <li>UX-UI</li>
              <li>Web</li>
              <li>Mobile</li>
            </ul>

          </div>


          <div className='purple-container  flex flex-col justify-center gap-4  py-36 mt-6  items-center text-center '>
            <h1 className=' text-white text-4xl font-bold ' >Nirmal Bang</h1>
            <p className=' text-white text-xl'>Engineered Investment Experience</p>
            {/* <span className=' text-white text-xl'> Website </span> */}
            <ul className='flex items-center text-xl gap-6 text-white font-light'>
              <li>UX-UI</li>
              <li>Web</li>
              <li>Mobile</li>
            </ul>

          </div>

          <div className='blue-container  flex flex-col justify-center gap-4   py-36 mt-6  items-center text-center '>
            <h1 className=' text-white text-4xl font-bold ' >BMW</h1>
            <p className=' text-white text-xl'><p>Optimized the effortless on-the-go lifestyle</p></p>
            {/* <span className=' text-white text-xl'> Website </span> */}
            <ul className='flex items-center text-xl gap-6 text-white font-light'>
              <li>UX-UI</li>
              <li>Web</li>
              <li>Mobile</li>
            </ul>

          </div>

        </section>
      </div>
      {/* Images col-3 End---------- */}

      {/* project counter */}

      <div className=' text-center w-full' >

        <h1 className='sm:text-6xl text-4xl  font-bold'>260+ Projects Delivered</h1>
        <h3 className='mb-11 sm:text-6xl text-4xl  font-bold'>and counting more..</h3>
        <video loop className='w-full h-auto' src={map}></video>
        <ul className='flex flex-wrap gap-12 container max-w-6xl m-auto justify-center sm:text-5xl  text-4xl mt-11 font-bold'>
          <li>Foodtech</li>
          <li>Fintech</li>
          <li>Healthtech</li>
          <li>Ai Bots</li>
        </ul>
        <div className=' m-auto border w-2/3  my-10'></div>
        <ul className='flex flex-wrap gap-12 container max-w-6xl m-auto justify-center sm:text-5xl  text-4xl mt-11 font-bold'>
          <li>Traveltech</li>
          <li>ECom</li>
          <li>Realtech</li>
          <li>Edtech</li>
        </ul>
      </div>

      {/* project counter End-----------*/}

      {/* Founder details */}

      <div className='mb-11'>
        <div className='flex flex-col sm:flex-row justify-between mt-28  container max-w-6xl m-auto border p-11 rounded-xl '>

          <div className='font-bold  gap-2 text-4xl flex flex-col'>
            <h1>Meet</h1>
            <h1>The</h1>
            <h1>Founder</h1>
          </div>

          <div className='mt-5'>
            <div className='gap-6 mb-6 rounded-xl flex '>
              <div className=' bg-red-500 w-6 h-6 rounded-xl'></div>
              <div className=' bg-fuchsia-700 w-6 h-6 rounded-xl'></div>
              <div className=' bg-yellow-700 w-6 h-6 rounded-xl'></div>

            </div>
            <h1 className='font-bold text-4xl mb-6'>Alfaiz Khan</h1>
            <h3 className='text-xl font-semibold'>Founder, Head of UX at Leo9 Studio.</h3>
            <h3 className='text-xl font-semibold'>Behavioral science and Neuromarketing expert.</h3>
          </div>

        </div>
      </div>

      {/* Founde details End--------- */}

      {/* client Experince  */}

      <div className='mt-12'>

        <div className="container max-w-6xl  px-10  py-12  ">
          <Slider {...settings}>
            {
              data.map((el, index) => {
                return (
                  <div key={index} className="bg-client    rounded-md  py-12 h-full " >

                    <div className='flex justify-between m-auto w-4/5 items-center flex-col sm:flex-row '>

                      <div className=' flex flex-col justify-center text-center'>
                        <div className=' w-20 h-20 ml-auto mr-auto'>

                          <img className=' rounded-full h-full w-full' src={el.img} alt="clientImage" />
                        </div>
                        <div className='mt-7'>
                          <h4 className=' text-xl font-bold mb-2'>{el.clientName}</h4>
                          <p className=' font-normal text-xl'>{el.CompanyName}</p>
                        </div>
                      </div>
                      <div className=' w-3/5'>
                        <h1 className=' text-2xl font-bold'>{el.clientTitle}</h1>
                        <img src={el.startImg} alt="starsImg" className='mt-5 h-8' />
                        <p className='sm:text-2xl font-normal sm:leading-9 leading-7 mt-5 sm:mt-6'>{el.Description}</p>
                      </div>
                    </div>

                  </div>
                )
              })
            }
          </Slider>
        </div>


      </div>
      {/* client Experince End------------- */}
      {/* DropDownText */}

      <div className='mt-20'>
        <div className='container flex flex-col sm:flex-row m-auto max-w-6xl items-center justify-between'>
          <div>

            <div className='flex '>
              <button className=' mr-8 h-10' onClick={handleshowBar}>{showBar ? <FaPlus /> : <FaMinus />}</button>

              <h1 className='text-3xl font-extrabold'>How To Enhance Motivation <br /> for Better Business Leads?</h1>
            </div>
            <div className={` ${showBar && 'hidden'} ml-16 `}>
              <p className=' text-2xl font-semibold mt-8 mb-8'>Read how businessmen must use UX <br /> design and enhancement of motivation <br /> for better business leads. Reveal the <br /> secret now!</p>
              <a href="/" className='mt-12 text-red-500 text-xl flex items-center gap-3'>Read More <HiMiniArrowLongRight /> </a>
            </div>
          </div>



          <div className='chairImage'>
            <img src={table} alt="table" />
          </div>

        </div>

      </div>

      {/* DropDownText End-------------- */}

      {/* color container */}
      <div className='mt-24 rounded-sm liner-gradient' >
        <div className=' container m-auto h-96 flex items-center justify-center text-center leading-6'>
            <h1 className='text-white font-bold sm:text-6xl text-4xl'>Let’s create a measurable<br />
impact on your business.</h1>

        </div>
      </div>
      {/* color container End---------- */}
  
          
    </section>

  )
}

export default Home