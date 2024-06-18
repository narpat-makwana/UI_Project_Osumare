import React from "react";
import Header_IMG from "../images/Header_image.png";
import Cuate from "../images/cuate.png";

const Body = () => {
  return (
    <>
      <div className="ml-80 h-64 w-6/12 flex flex-col mt-20 items-center text-center bg-opacity-80">
        <h2 className="text-4xl m-1 p-2">
          Elevate{" "}
          <span className="font-bold text-blue-500">Real Estate Success</span>{" "}
          with Osumare's Digital Expertise
        </h2>
        <h6 className="font-normal m-2 p-2 text-slate-500">
          Tailored Solutions for Thriving in the Digital Real Estate Landscape
        </h6>
        <button className="m-2 p-1 w-48 md:w-96 h-12 bg-blue-500 text-white font-semibold rounded-full">
          Get Started
        </button>
      </div>
      <div>
        <img
          className="mx-auto h-[438px] mt-64"
          src={Header_IMG}
          alt="headerImg"
        />
      </div>
      <div>
        <h1 className="text-3xl text-center font-semibold m-4 p-4 mt-24">
          Real Estate Focused Digital Mastery
        </h1>
        <div className="flex">
          <div className="w-2/4 ml-16">
            <img src={Cuate} alt="" />
          </div>
          <div className="w-2/4 mr-16 p-2">
            <h1 className="text-3xl mb-6 m-4 font-semibold">Unlock the Potential of Digital Real Estate Excellence</h1>
            <h6 className="m-4 mb-6 text-lg text-slate-600">
              At Osumare, we understand that the real estate landscape demands a
              digital presence that aligns with the intricacies of property
              marketing. Our range of specialized services is meticulously
              designed to catapult your brand's success in the ever-evolving
              digital property market.
            </h6>
            <button className="m-4 p-2 w-44 bg-blue-500 rounded-full">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Body;
