import React from "react";

export default function Welcome() {
  return (
    <section className="relative mx-[135px] my-1 border-inherit">
      <div className="flex flex-row items-center justify-between py-1 px-6 space-x-24">
        <div className="w-full">
          <h2 className="text-[#06258B] pb-4 mt-12 text-[19px] font-semibold">
            Your Website From Start Up
          </h2>
          <h1 className="font-bold text-[54px]">
            For Development IT Solutions
          </h1>
          <p className="pt-8 text-[17px] font-medium text-[#7a7a7a]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
          <div className="pt-12 inline-flex">
            <div className="flex">
              <a href="" className="btn">
                Get A Quote
              </a>
            </div>
            <div className="inline">
              <h5 className="">Call Us</h5>
              <h6>0086764</h6>
            </div>
          </div>
        </div>
        <img src="home.png" className="bg-cover" alt="" />
      </div>
    </section>
  );
}
