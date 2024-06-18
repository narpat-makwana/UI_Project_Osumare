import React from "react";

const Comp4 = () => {
  return (
    <div className="flex justify-between overflow-hidden">
      <div className="gradient-box-blue"></div>
      <div className="gradient-box-red"></div>
      <div className="absolute w-[579px] h-[275px] space-y-6 flex flex-col items-center text-center ml-[410px] mt-[200px]">
        <h1 className="text-3xl font-bold pt-20 ">Your Peace of Mind</h1>
        <h1 className="text-xl text-slate-600 font-normal">
          Through our conversion-focused strategies, we ensure that property
          seekers are not just visitors, but engaged prospects ready to make
          their next move in the real estate market.
        </h1>
        <button className="w-[200px] h-[54px] py-2 rounded-full bg-[#0078FF]">
          Get started
        </button>
      </div>
    </div>
  );
};

export default Comp4;
