import React from "react";
import "./Work.css";
const Work = () => {
  return (
    <div className="relative top-52">
      <div className="work-container">
        <div>
          <h1 className="font-bold text-3xl work">WORK</h1>
          <h2 className="font-bold mt-10 work-title">
            We Have <br /> Designed Experiences <br /> For Over 260 Projects.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 grid-cols-1  gap-5 mt-20 mb-20">
          <div>
            <div>
              <h1 className="font-bold text-black text-4xl mb-8">RIGI</h1>
              <img
                className="rounded-sm  w-96 sm:w-full"
                src="https://ik.imagekit.io/2eribsa8w/case-study/rigi/rigi_ux_ui_development_consultant_leo9_studio.webp"
                alt="img"
              />
              <div className="flex sm:flex-row flex-col sm:justify-between mt-6 mb-4">
                <p className="service-tag font-semibold">
                  {" "}
                  Boosted Packaged Food Experience{" "}
                </p>
                <ul className="flex service sm:justify-evenly gap-4 text-gray-400   service-tag font-semibold">
                  <li>UI-UX</li>
                  <li>Web</li>
                  <li>Mobile</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div>
              <h1 className="font-bold text-black text-4xl mb-8">RIGI</h1>
              <img
                className=" w-96 sm:w-full rounded-sm"
                src="https://leo9studio.com/img/alphabee_ux_consultant_leo9_studio.jpg"
                alt="img"
              />
              <div className="flex sm:flex-row flex-col sm:justify-between mt-6 mb-4">
                <p className="service-tag font-semibold">
                  {" "}
                  Boosted Packaged Food Experience{" "}
                </p>
                <ul className="flex service sm:justify-evenly gap-4 text-gray-400   service-tag font-semibold">
                  <li>UI-UX</li>
                  <li>Web</li>
                  <li>Mobile</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className="font-bold text-black text-4xl mb-8">RIGI</h1>
              <img
                className=" w-96 sm:w-full rounded-sm"
                src="https://leo9studio.com/img/sps_canada_ux_design_agency_leo9_studio.jpg"
                alt="img"
              />
              <div className="flex sm:flex-row flex-col sm:justify-between mt-6 mb-4">
                <p className="service-tag font-semibold">
                  {" "}
                  Boosted Packaged Food Experience{" "}
                </p>
                <ul className="flex service sm:justify-evenly gap-4 text-gray-400   service-tag font-semibold">
                  <li>UI-UX</li>
                  <li>Web</li>
                  <li>Mobile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 rounded-sm liner-gradient">
        <div className=" container m-auto h-96 flex items-center justify-center text-center leading-6">
          <h1 className="text-white font-bold sm:text-6xl text-4xl">
            Let’s create a measurable
            <br />
            impact on your business.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Work;
