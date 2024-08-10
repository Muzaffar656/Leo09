import React from "react";
import "./Clients.css";
import tata from "../../images/tata.png";
import sony from "../../images/sony.png";
import bmw from "../../images/bmw.png";
import crmnext from "../../images/crmnetx.png";
import godreg from "../../images/godrej.png";
import icici from "../../images/icici.png";
import lakeme from "../../images/lakeme.png";
import tikona from "../../images/tikona.png";
import colgate from "../../images/colgate.png";
import car from "../../images/car.svg";
import capital from "../../images/capital.svg";
import calander from "../../images/calander.svg";
import ecommerce from "../../images/ecommerce.svg";
import energy from "../../images/energy.svg";
import food from "../../images/food.svg";
import education from "../../images/education.svg";
import hospatal from "../../images/education.svg";
import health from "../../images/health.svg";



import clientImage2 from '../../images/clientImage2.jpg'

const Clients = () => {
  return (
    <div className="mt-24">
      <div className="w-930 m-auto">
        <div className="heading-section sm:text-center">
          <h1 className="font-bold text-red-500 text-xl">Clients</h1>
          <h6 className="mt-4 text-gray-400 text-xl">Home Clients</h6>
          <p
            className="font-bold sm:text-5xl my-10"
            style={{ lineHeight: "1.3" }}
          >
We make happy clients by <br /> interconnecting technology <br />
            with business & art.
          </p>
          <div className=" sm:m-auto sm:w-2/4 w-1/3">
            <img
              src="https://leo9studio.com/img/banner_ux_design_leo9_studio.png"
              alt="img"
            />
          </div>
        </div>
        <div className="logo-part mt-16">
        <h1 className="font-bold  p-8 text-red-500 text-xl text-center sm:w-full w-1/3 ">Clients</h1>

          <ul className="flex flex-wrap sm:flex-row felx-col">
            <li className=" w-1/3 p-8" >
              <img className=" h-20"src={bmw} alt="img" />
            </li>
            <li className=" w-1/3 p-8" >
              <img className=" h-20" src={tata} alt="img" />
            </li>
            <li className=" w-1/3" >
              <img className=" h- p-820" src={sony} alt="img" />
            </li>

            <li className=" w-1/3 p-8" >
              <img className=" h-20" src={lakeme} alt="img" />
            </li>
            <li className=" w-1/3 p-8" >
              <img className=" h-20"  src={tikona} alt="img" />
            </li>
            <li className=" w-1/3 p-8">
              <img className=" h-20" src={godreg} alt="img" />
            </li>
            <li className=" w-1/3 p-8">
              <img className=" h-20" src={icici} alt="img" />
            </li>
            <li className=" w-1/3 p-8">
              <img className=" h-20" src={crmnext} alt="img" />
            </li>
            <li className=" w-1/3 p-8">
              <img className=" h-20" src={colgate} alt="img" />
            </li>

          </ul>
        </div>
        <div className="testimonals mt-24">
          <div className="text-center sm:w-full w-1/3">
            <h5 className="text-red-500 font-bold text-xl">TESTIMONIALS</h5>
            <h1 style={{lineHeight:"1.3"}} className="font-bold mt-5 text-4xl">Happy clients with 760+ <br />
            successful Projects</h1>
          </div>
          <div>
            <p className=" font-medium sm:text-5xl text-3xl mt-20 sm:w-full w-1/3" style={{lineHeight:"55px"}}>Leo9 Studio is one of the few Design agencies that understand the financial services industry's inner workings. They're an incredible agency that “knows it”. The team Leo9 is killing it and bringing UI/UX Designs to the forefront of a whole industry's digital transformation.</p>
            <div className=' flex flex-col justify-center  mt-8'>
                        <div className=' w-20 h-20'>

                          <img className=' rounded-full h-full w-full' src={clientImage2} alt="clientImage" />
                        </div>
                        <div className='mt-7'>
                          <h4 className=' text-xl font-bold mb-2'>Anil Kamble</h4>
                          <p className=' font-normal text-xl'>C.T.O. - Phone Pay</p>
                        </div>
                      </div>
          </div>
        </div>
        <div className="domains mt-16 m-auto">
        <h1 className="font-bold  p-8 text-red-500 text-xl text-center sm:w-full w-1/3 ">Clients</h1>

          <ul className="flex flex-wrap svgss sm:flex-row flex-col">
            <li className=" w-1/3 p-8" >
              <img className=" h-20"src={car} alt="img" />
            </li>
            <li className=" w-1/3 p-8" >
              <img className=" h-20" src={calander} alt="img" />
            </li>
            <li className=" w-1/3" >
              <img className=" h- p-820" src={capital} alt="img" />
            </li>

            <li className=" w-1/3 p-8" >
              <img className=" h-20" src={ecommerce} alt="img" />
            </li>
            <li className=" w-1/3 p-8" >
              <img className=" h-20"  src={hospatal} alt="img" />
            </li>
            <li className=" w-1/3 p-8">
              <img className=" h-20" src={health} alt="img" />
            </li>
            <li className=" w-1/3 p-8">
              <img className=" h-20" src={food} alt="img" />
            </li>
            <li className=" w-1/3 p-8">
              <img className=" h-20" src={energy} alt="img" />
            </li>
            <li className=" w-1/3 p-8">
              <img className=" h-20" src={education} alt="img" />
            </li>

          </ul>
        </div>
        
      </div>
      <div className='mt-24 rounded-sm liner-gradient' >
        <div className=' container m-auto h-96 flex items-center justify-center text-center leading-6'>
            <h1 className='text-white font-bold sm:text-6xl text-4xl'>Let’s create a measurable<br />
impact on your business.</h1>

        </div>
      </div>
    </div>
  );
};

export default Clients;
