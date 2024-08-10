import React from "react";
import "./footer.css";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialDribbble } from "react-icons/sl";
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className=" mt-20 sm:text-left text-center relative top-44">
      <div className="container m-auto flex flex-col sm:flex-row gap-24">
        <div>
          <h4 className="text-3xl font-bold ">
            Leo9 <br /> Studio
          </h4>
          <ul className="flex h-9 mt-4 justify-center sm:justify-normal ">
            <li className="mr-6">
            <a href="https://www.facebook.com/leo9studio" target="_blank"><SlSocialFacebook /></a>  
            </li>
            <li className="mr-6">
             <a href="https://www.linkedin.com/company/leo9-studio" target="_blank"> <SlSocialLinkedin /></a>
            </li>
            <li className="mr-6">
            <a href="https://www.instagram.com/leo9studio.uiux/" target="_blank">  <SlSocialInstagram /></a>
            </li>
            <li className="mr-6">
            <a href="https://www.dribbble.com/Leo9" target="_blank">  <SlSocialDribbble /></a>
            </li>
          </ul>
          <div className="text-xl font-medium">
            © Leo9Studio. <br /> All rights reserved 2023
          </div>
        </div>
        <div>
          <h4 className="text-2xl font-bold ">Services</h4>
          <ul className="mt-3">
            <li className="text-xl font-normal mb-3 ">Designs</li>
            <li className="text-xl font-normal mb-3">Technology</li>
            <li className="text-xl font-normal mb-3">Neuromarketing</li>
            <li className="text-xl font-normal mb-3">Digital Marketing</li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-bold ">About</h4>
          <ul className="mt-3">
            <li className="text-xl font-normal mb-3 "><Link to={'/about'}>About Us</Link></li>
            <li className="text-xl font-normal mb-3">Team</li>
            <li className="text-xl font-normal mb-3">Career</li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-bold ">Quick Links</h4>
          <ul className="mt-3">
            <li className="text-xl font-normal mb-3 ">Work</li>
            <li className="text-xl font-normal mb-3">Client</li>
            <li className="text-xl font-normal mb-3">Blog</li>
            <li className="text-xl font-normal mb-3">Reach Us</li>
          </ul>
        </div>
        <div>
          <h4 className="text-2xl font-bold ">Quick Links</h4>
          <ul className="mt-3">
            <li className="text-xl font-normal mb-3 ">Privacy Policy</li>
            <li className="text-xl font-normal mb-3">Terms of use</li>
            <li className="text-xl font-normal mb-3">Site Map</li>
            <li className="text-xl font-normal mb-3">Refund Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
