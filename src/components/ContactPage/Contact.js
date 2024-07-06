import React from "react";
import { Helmet } from "react-helmet";
import massage from "./../../images/message.jpg";
import "./Contact.css";
import india from "./../../images/indiagate.svg";
import usa from "./../../images/usa.svg";

const Contact = () => {
  const d = new Date();
  let text = d.toLocaleTimeString();
  return (
    <>
      <Helmet>
        <title>Contact - US</title>
      </Helmet>
      <div className="relative top-24 w-full h-full">
        <div className="heading-container">
          <div className="flex justify-between items-center">
            <div className="left my-10 sm:my-0">
              <h1 className="sm:text-6xl text-5xl font-bold leading-15 sm:leading-14">Let's</h1>
              <h1 className="sm:text-6xl text-5xl font-bold leading-15 sm:leading-14">Create</h1>
              <h1 className="sm:text-6xl text-5xl font-bold leading-15 sm:leading-14">Experiences!</h1>
              <h4 className="mt-5 text-2xl font-bold">Let's talk.</h4>
            </div>
            <div className="right hidden sm:flex">
              <div>
                <img src={massage} alt="imageMassage" />
              </div>
            </div>
          </div>
          <div className="contact-form flex flex-col sm:flex-row justify-between ">
            <form className="">
              <div className="mt-8">
                <label className="font-bold text-3xl mr-6">Hi! I am</label>
                <input type="text" placeholder="eg.Andy" />
              </div>
              <div className="mt-8">
                <label className="font-bold text-3xl mr-6">Reach me at</label>
                <input type="text" placeholder="eg.hello@gmail.com" />
              </div>
              <div className="mt-8">
                <label className="font-bold text-3xl mr-6">Country</label>
                <input type="text" placeholder="eg.India" />
              </div>
              <div className="mt-8">
                <label className="font-bold text-3xl mr-6">Mobile No.</label>
                <input type="number" placeholder="eg.+91" autoComplete="off" />
              </div>
              <div className="mt-8">
                <label className="font-bold text-3xl mr-6">Company Name</label>
                <input type="text" placeholder="eg.leo09" />
              </div>
              <div className="flex gap-5 mt-6 flex-wrap">
                <button className="servie-button">UX-UI</button>
                <button className="servie-button">Mobile Apps</button>
                <button className="servie-button">Web Tech</button>
                <button className="servie-button">SEO</button>
                <button className="servie-button">SMM</button>
                <button className="servie-button">Branding</button>
                <button className="servie-button">Other</button>
              </div>
              <div className="flex flex-col mt-7">
                <label className="font-bold text-3xl mr-6 mb-8">Comments</label>
                <input type="text" />
              </div>
              <button className="submit-button">Send</button>
            </form>

            <div className="contacts">
              <ul>
                <li>
                  <a href="/leo09" className=" underline text-blue-600">
                    info@leo9studio.com
                  </a>
                </li>
                <li className="mt-8">
                  <a className="font-bold text-xl" href="number">
                    <strong className="font-bold text-gray-400">IND :</strong>{" "}
                    <br />
                    +91 9179638187 <br />
                    +91 8602122252
                  </a>
                </li>
                <li className="mt-8">
                  <a className="font-bold text-xl" href="number">
                    <strong className="font-bold text-gray-400">USA :</strong>{" "}
                    <br />
                    +1 (802) 347-3690
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="time-section mt-20">
            <div className="flex flex-col sm:flex-row justify-between items-center">






              <div className="left-india flex flex-col sm:pr-20 ">
              <div className="flex india-timeZone items-center ">
            

              <div className="time-component mr-32">
                  <h1 className="font-bold sm:text-5xl text-4xl" >India</h1>
                  <h2 className="font-semibold sm:text-3xl text-2xl mt-3">{text}</h2>
                </div>

                <div className="indiaImage ">
                  <div>
                    <img style={{height:"88px"}} src={india} alt="indiagateImage" />
                  </div>
                </div>

              </div>

                <div className="flex flex-col mt-10">
                  <p>Office No.202, 2nd Floor, Techno Park, Eksar, Link Road,
                  Borivali (W), Mumbai: 400 092.</p>
                  <p className="mt-10">44, 2nd floor, 2nd Main Road,3rd Cross Guru
                  Raghavendra Nagar, JP Nagar 7th Phase Bangalore, Karnataka 560078</p>
                </div>
              </div>








           
              <div className="right-usa flex flex-col sm:pl-20 mb-24 ">
              <div className="flex india-timeZone items-center ">
            

              <div className="time-component mr-32">
                  <h1 className="font-bold sm:text-5xl text-4xl">USA</h1>
                  <h2 className="font-semibold sm:text-3xl text-2xl mt-3">{text}</h2>
                </div>

                <div className="indiaImage ">
                  <div>
                    <img style={{height:"88px"}} src={usa} alt="usaImage" />
                  </div>
                </div>

              </div>

                <div className="flex flex-col mt-10">
                  <p>Office No.202, 2nd Floor, Techno Park, Eksar, Link Road,
                  Borivali (W), Mumbai: 400 092.</p>
                 
                </div>
              </div>











            </div>

          </div>


        </div>
      </div>
    </>
  );
};

export default Contact;
