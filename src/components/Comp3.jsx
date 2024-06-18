import React from "react";
import d_main from "../images/bro.png";
import d1 from "../images/d1.png";
import d2 from "../images/d2.png";
import d3 from "../images/d3.png";
import d4 from "../images/d4.png";
import e1 from "../images/e1.png";
import e2 from "../images/e2.png";
import e3 from "../images/e3.png";
import e4 from "../images/e4.png";
const Comp3 = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center p-2">
          Driving Property Inquiries to Conversions
        </h1>
        <h1 className="text-xl text-slate-600 font-normal text-center ">
          Streamlined Strategies for Real Estate Success
        </h1>
      </div>
      <div className="flex w-[1280px] m-8 h-[400px] space-x-20">
        <div>
          <img src={d_main} alt="" />
        </div>
        <div className="w-[612px] h-[373px]">
          <h1 className="text-3xl font-bold pt-20 p-2">
            Optimized Path to Property Purchase
          </h1>
          <h1 className="text-xl text-slate-600 font-normal">
            In the dynamic realm of real estate, the journey from a property
            inquiry to a successful conversion demands a well-crafted approach.
            At Osumare, we specialize in guiding potential buyers through this
            journey seamlessly, maximizing inquiries-turned-conversions with
            expert strategies.
          </h1>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold py-14 p-2 text-center">
          Optimized Path to Property Purchase
        </h1>
        <div className="flex flex-wrap mx-8">
          <div className="h-[453px] w-[610px] m-4 flex flex-col items-center text-center p-4 space-y-8">
            <img src={d1} alt="" />
            <h1 className="text-2xl font-bold">Call-to-Action Optimization</h1>
            <h6 className="text-2xl font-normal text-slate-600">
              Our carefully crafted CTAs guide potential buyers through the
              property journey, enhancing engagement and conversion rates.
            </h6>
          </div>
          <div className="h-[453px] w-[610px] m-4 flex flex-col items-center text-center p-4 space-y-8">
            <img className="m-8" src={d2} alt="" />
            <h1 className="text-2xl font-bold">Landing Page Efficiency</h1>
            <h6 className="text-2xl font-normal text-slate-600">
              Tailored landing pages are designed for maximum property lead
              conversion. They provide seamless user experiences and clear
              pathways for inquiry submission.
            </h6>
          </div>
          <div className="h-[453px] w-[610px] m-4 flex flex-col items-center text-center p-4 space-y-8">
            <img src={d3} alt="" />
            <h1 className="text-2xl font-bold">Social Proof Utilization</h1>
            <h6 className="text-2xl font-normal text-slate-600">
              Leverage the power of testimonials and success stories from
              satisfied buyers to build trust and credibility, encouraging
              hesitant prospects to take action
            </h6>
          </div>
          <div className="h-[453px] w-[610px] m-4 flex flex-col items-center text-center p-4 space-y-8">
            <img src={d4} alt="" />
            <h1 className="text-2xl font-bold">Mobile-Friendly Experience</h1>
            <h6 className="text-2xl font-normal text-slate-600">
              With a responsive design approach, our strategies ensure a
              seamless browsing experience across all devices. This
              responsiveness enhances engagement and conversions by
              accommodating the preferences of on-the-go property seekers.
            </h6>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold py-14 p-2 text-center">
          Our Expertise in Action
        </h1>
        <div className="flex flex-wrap mx-8">
          <div className="h-[453px] w-[610px] m-4 flex flex-col items-center text-center p-4 space-y-8">
            <img src={e1} alt="" />
            <h1 className="text-2xl font-bold">Effective CTAs</h1>
            <h6 className="text-2xl font-normal text-slate-600">
              See how our strategic CTAs drove a significant increase in
              property inquiries and accelerated sales for a real estate agency.
            </h6>
          </div>
          <div className="h-[453px] w-[610px] m-4 flex flex-col items-center text-center p-4 space-y-8">
            <img className="m-8" src={e2} alt="" />
            <h1 className="text-2xl font-bold">
              Conversion-Optimized Landing Pages
            </h1>
            <h6 className="text-2xl font-normal text-slate-600">
              Explore a case study where our landing page optimization increased
              property lead conversion rates by 30%
            </h6>
          </div>
          <div className="h-[453px] w-[610px] m-4 flex flex-col items-center text-center p-4 space-y-8">
            <img src={e3} alt="" />
            <h1 className="text-2xl font-bold">
              Trust Building with Social Proof
            </h1>
            <h6 className="text-2xl font-normal text-slate-600">
              Discover how leveraging client testimonials boosted buyer
              confidence, leading to higher conversion rates for a property
              development project
            </h6>
          </div>
          <div className="h-[453px] w-[610px] m-4 flex flex-col items-center text-center p-4 space-y-8">
            <img src={e4} alt="" />
            <h1 className="text-2xl font-bold">Mobile-First Success</h1>
            <h6 className="text-2xl font-normal text-slate-600">
              Learn how our mobile-responsive design approach resulted in a 25%
              increase in inquiries from mobile users for a real estate agency.
            </h6>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Comp3;
