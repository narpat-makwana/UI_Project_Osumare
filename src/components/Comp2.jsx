import React from "react";
import c1 from "../images/c1.png";
import c2 from "../images/c2.png";
import c3 from "../images/c3.png";
import c4 from "../images/c4.png";
import c_main from "../images/c_main.png";

const Comp2 = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-center pt-20 p-2">
          Navigating Real Estate's Digital Landscape
        </h1>
        <h1 className="text-xl text-slate-600 font-normal text-center ">
          Insights for Real Estate Marketing Advantage
        </h1>
      </div>

      <div className="flex m-20 h-[700px] w-[1200px]">
        <div className="absolute">
          <div className="mt-6 mb-4 border border-slate-100 shadow-md flex w-[586px] h-[130px] rounded-2xl bg-white items-center p-6 space-x-4">
            <img className="w-10 h-10" src={c1} alt="" />
            <p>
              <h1 className="text-2xl font-semibold">Market Trends Analysis</h1>
              <h1 className="text-base font-normal text-slate-600">
                Predictive insights to guide real estate strategies.
              </h1>
            </p>
          </div>
          <div className="mb-4 border border-slate-100 shadow-md flex w-[586px] h-[130px] rounded-2xl bg-white items-center p-6 space-x-4">
            <img className="w-8 h-8" src={c2} alt="" />
            <p>
              <h1 className="text-2xl font-semibold">Targeted Buyer Personal</h1>
              <h1 className="text-base font-normal text-slate-600">
                Understand and connect with your ideal property buyers.
              </h1>
            </p>
          </div>
          <div className="mb-4 border border-slate-100 shadow-md flex w-[586px] h-[130px] rounded-2xl bg-white items-center p-6 space-x-4">
            <img className="w-10 h-10" src={c3} alt="" />
            <p>
              <h1 className="text-2xl font-semibold">Competitor Insights</h1>
              <h1 className="text-base font-normal text-slate-600">
                Stand out in the property market with informed strategies.
              </h1>
            </p>
          </div>
          <div className="mb-4 border border-slate-100 shadow-md flex w-[586px] h-[130px] rounded-2xl bg-white items-center p-6 space-x-4">
            <img className="w-10 h-10" src={c4} alt="" />
            <p>
              <h1 className="text-2xl font-semibold">Visual Content Appeal</h1>
              <h1 className="text-base font-normal text-slate-600">
                Captivate buyers with appealing visuals and immersive
                experiences.
              </h1>
            </p>
          </div>
        </div>

        <div className="mr-20 w-[773px] rounded-3xl">
          <img className="ml-[500px] w-[670px]" src={c_main} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Comp2;
