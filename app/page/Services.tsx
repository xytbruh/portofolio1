import React from "react";
import { FaChevronDown, FaPager } from "react-icons/fa";

export default function Services() {
  return (
    <section className="mx-[135px] my-[100px] items-center">
      <h2 className="text-primary text-center font-semibold text-[16px] leading-4">Our Services</h2>
      <h2 className="text-center text-[41px] font-extrabold pb-4">Features We Provide</h2>
      <div className="px-[160px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          <div className=" bg-pink-200 rounded-md inline-flex px-10 py-12 space-x-4">
            <div className="text-[30px]">
              <FaPager />
            </div>
            <div className="inline-block">
              <h5 className="font-semibold text-lg">Web Development</h5>
              <p className="text-[#656565] text-lg">Phasellus magna erat, consectetur nec faucibus at, mollis vitae mauris. Web Development</p>
            </div>
          </div>
          <div className=" bg-blue-200 rounded-md inline-flex px-10 py-12 space-x-4">
            <div className="text-[30px]">
              <FaPager />
            </div>
            <div className="inline-block">
              <h5 className="font-semibold text-lg">Web Development</h5>
              <p className="text-[#656565] text-lg">Phasellus magna erat, consectetur nec faucibus at, mollis vitae mauris. Web Development</p>
            </div>
          </div>
          <div className=" bg-pink-200 rounded-md inline-flex px-10 py-12 space-x-4">
            <div className="text-[30px]">
              <FaPager />
            </div>
            <div className="inline-block">
              <h5 className="font-semibold text-lg">Web Development</h5>
              <p className="text-[#656565] text-lg">Phasellus magna erat, consectetur nec faucibus at, mollis vitae mauris. Web Development</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 px-[160px] py-28">
        <div>
          <img src="services.png" alt="" />
        </div>
        <div className="px-8 space-y-4">
          <h6 className="font-semibold text-lg text-primary">Technology Solution</h6>
          <h2 className="font-bold text-5xl">Utalize your time at maximum efficiency</h2>
          <p className="font-normal text-lg text-[#7a7a7a]">
            Nulla eleifend, lectus eu gravida facilisis, ipsum metus faucibus eros, vitae vulputate nibh libero ac metus.
          </p>
          <ul className="space-y-5 pt-4">
            <li className="flex items-center">
              <FaChevronDown className="bg-red-600 text-white text-lg rounded-full p-[2px] mr-6" /> Business & Consulting Agency
            </li>
            <li className="flex items-center">
              <FaChevronDown className="bg-red-600 text-white text-lg rounded-full p-[2px] mr-6" /> Business & Consulting Agency
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
