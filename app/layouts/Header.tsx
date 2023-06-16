import React from "react";

export default function Header() {
  return (
    <header className="relative w-full">
      <div className="bg-slate-500 flex flex-row justify-between items-center py-5 px-[150px]">
        <div className="w-24 z-40">
          <img src="logo-dimas.png" alt="" />
        </div>
        <div>
          <ul className="flex flex-row items-start">
            <li className="leading-5 p-[15px]">
              <a href="/" className=" group transition-all duration-300 ease-in-out">
                <span className="font-semibold text-white hover:text-blue-800 bg-left-bottom bg-gradient-to-r from-blue-800 to-blue-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">
                  Home
                </span>
              </a>
            </li>
            <li className="leading-5 p-[15px]">
              <a href="/" className=" group transition-all duration-300 ease-in-out">
                <span className="font-semibold text-white hover:text-blue-800 bg-left-bottom bg-gradient-to-r from-blue-800 to-blue-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">
                  Profil
                </span>
              </a>
            </li>
            <li className="leading-5 p-[15px]">
              <a href="/" className=" group transition-all duration-300 ease-in-out">
                <span className="font-semibold text-white hover:text-blue-800 bg-left-bottom bg-gradient-to-r from-blue-800 to-blue-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">
                  Layanan
                </span>
              </a>
            </li>
            <li className="leading-5 p-[15px]">
              <a href="/" className=" group transition-all duration-300 ease-in-out">
                <span className="font-semibold text-white hover:text-blue-800 bg-left-bottom bg-gradient-to-r from-blue-800 to-blue-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">
                  Blog
                </span>
              </a>
            </li>
            <li className="leading-5 p-[15px]">
              <a href="/" className=" group transition-all duration-300 ease-in-out">
                <span className="font-semibold text-white hover:text-blue-800 bg-left-bottom bg-gradient-to-r from-blue-800 to-blue-800 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out ">
                  Kontak
                </span>
              </a>
            </li>
            <li className="leading-5 p-[15px]">
              <a href="/" className="btn">
                Konsultasi
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
