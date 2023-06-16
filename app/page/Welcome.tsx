import React from "react";
import { FaPhone } from "react-icons/fa";

export default function Welcome() {
  return (
    <section className="relative mx-[135px] my-8 border-inherit">
      <div className="grid grid-cols-2 gap-10 py-3">
        <div>
          <h2 className="text-primary pb-4 mt-12 text-[19px] font-semibold">Hai, Selamat Datang</h2>
          <h1 className="font-bold text-[54px]">Selamat melihat-lihat website gabut saya</h1>
          <p className="pt-8 text-[17px] font-medium text-[#7a7a7a]">Website ini dibuat dengan full tailwind-css dan dengan framework next js</p>
          <div className="pt-12 inline-flex items-center space-x-9">
            <div className="flex">
              <a href="" className="btn">
                Berikan Saran
              </a>
            </div>
            <div className="inline">
              <h5 className="text-primary text-center">Call Us</h5>
              <h6 className="flex ">
                <FaPhone /> 083837189468
              </h6>
            </div>
          </div>
        </div>
        <div className="m-auto">
          <img src="dimas2.png" className="bg-cover" alt="" />
        </div>
      </div>
    </section>
  );
}
