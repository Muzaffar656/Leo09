import React from 'react'
import './About.css'
import img1 from "../../images/typography_ios_app_development_leo9_studio.svg"
import img2 from "../../images/room_ios_app_development.png"

const About = () => {
  return (
    <div className='mt-32'>
        <div className="w-930 m-auto">
            <div className="heaing text-center">
                <h5 className='font-bold text-red-500 text-2xl'>About Us</h5>
                <p className='font-bold sm:text-4xl mt-8'>We, at Leo9 Studio, apply neuromarketing <br />
and behavioral science to design, digitize <br />
and grow your business.</p>
            </div>
            <div className='flex absolute screen'>
                <img className='screen-img' src={img1} alt="1" />
                <img className='screen-img' src={img2} alt="1" />

            </div>
            <div className=' mt-80'>
                <h5 className='about font-bold text-2xl'>About Us</h5>
                <p className='sm:text-4xl font-normal mb-5 mt-10'>At the intersection of art, technology and business, we create design solutions geared toward business success.</p>
                <p className='sm:text-4xl font-normal mb-5 mt-8'>Since 2012, we have been global leaders in design technology. Our services range from experience designing, identity development, product strategy, branding, user experience design, user interface design, technology development to digital marketing and SEO.</p>
            </div>
        </div>
        <div className='mt-24 rounded-sm liner-gradient' >
        <div className=' container m-auto h-96 flex items-center justify-center text-center leading-6'>
            <h1 className='text-white font-bold sm:text-6xl text-4xl'>Let’s create a measurable<br />
impact on your business.</h1>

        </div>
      </div>
    </div>
  )
}

export default About