import React from "react";
import sr1 from "../images/sr1.png";
import sr2 from "../images/sr2.png";
import sr3 from "../images/sr3.png";
import sr4 from "../images/sr4.png";
import sr5 from "../images/sr5.png";
import sr6 from "../images/sr6.png";
import sr7 from "../images/sr7.png";
import sr8 from "../images/sr8.png";

const Services = () => {
  return (
    <>
      <div className="text-center mt-52 bg-[#F9F9F9]">
        <h1 className="text-3xl font-bold pt-16">Our Service Offerings</h1>
        <h6 className="text-xl p-6 mb-12 text-slate-600">
          Strategies that Drive Property Market Excellence
        </h6>
        {/* Service Cards */}
        <div className="mx-12 flex flex-wrap justify-center">
          <div className="text-center m-2 h-[239px] w-[297px] px-4 py-6 bg-white flex flex-col items-center shadow-sm rounded-lg">
            <img className="w-18" src={sr1} alt="" />
            <h1 className="text-lg font-bold">Automotive SEO</h1>
            <h6 className="text-sm font-normal">
              Drive Your Success with Automotive SEO: Ignite Online Visibility
              and Outrace the Competition. Accelerate Your Business Growth Today
            </h6>
          </div>
          <div className="text-center m-2 h-[239px] w-[297px] px-4 py-6 bg-white flex flex-col items-center shadow-sm rounded-lg">
            <img className="w-18" src={sr2} alt="" />
            <h1 className="text-lg font-bold">PPC Precision</h1>
            <h6 className="text-sm font-normal">
              Drive Your Success with Automotive SEO: Ignite Online Visibility
              and Outrace the Competition. Accelerate Your Business Growth Today
            </h6>
          </div>
          <div className="text-center m-2 h-[239px] w-[297px] px-4 py-6 bg-white flex flex-col items-center shadow-sm rounded-lg">
            <img className="w-18" src={sr3} alt="" />
            <h1 className="text-lg font-bold">Social Acceleration</h1>
            <h6 className="text-sm font-normal">
              Engage and influence your audience across social media platforms,
              amplifying your brand's presence and connection.
            </h6>
          </div>
          <div className="text-center m-2 h-[239px] w-[297px] px-4 py-6 bg-white flex flex-col items-center shadow-sm rounded-lg">
            <img className="w-18" src={sr4} alt="" />
            <h1 className="text-lg font-bold">Content Excellence</h1>
            <h6 className="text-sm font-normal">
              Craft compelling, automotive-specific content that resonates with
              enthusiasts and drives engagement.
            </h6>
          </div>
          <div className="text-center m-2 h-[239px] w-[297px] px-4 py-6 bg-white flex flex-col items-center shadow-sm rounded-lg">
            <img className="w-18" src={sr5} alt="" />
            <h1 className="text-lg font-bold">Web Design</h1>
            <h6 className="text-sm font-normal">
              Transform visitors into customers with high-performance websites
              designed for seamless user experiences and increased conversions.
            </h6>
          </div>
          <div className="text-center m-2 h-[239px] w-[297px] px-4 py-6 bg-white flex flex-col items-center shadow-sm rounded-lg">
            <img className="w-18" src={sr6} alt="" />
            <h1 className="text-lg font-bold">Data-Driven Insights</h1>
            <h6 className="text-sm font-normal">
              Leverage data to refine your strategies, making informed decisions
              that drive revenue growth.
            </h6>
          </div>
          <div className="text-center m-2 h-[239px] w-[297px] px-4 py-6 bg-white flex flex-col items-center shadow-sm rounded-lg">
            <img className="w-18" src={sr7} alt="" />
            <h1 className="text-lg font-bold">End-To-End Solutions</h1>
            <h6 className="text-sm font-normal">
              From initial awareness to post-purchase loyalty, we offer
              full-funnel solutions that guide customers through every step of
              their journey.
            </h6>
          </div>
          <div className="text-center m-2 h-[239px] w-[297px] px-4 py-6 bg-white flex flex-col items-center shadow-sm rounded-lg">
            <img className="w-18" src={sr8} alt="" />
            <h1 className="text-lg font-bold">Video Marketing</h1>
            <h6 className="text-sm font-normal">
              Unleash the Power of Video Marketing: Captivate, Engage, and
              Elevate Your Brand with Compelling Visual Stories.
            </h6>
          </div>
          <button className="w-[233px] h-[54px] m-16 rounded-full bg-[#0078FF]">
            Get started
          </button>
        </div>
      </div>
    </>
  );
};

export default Services;
