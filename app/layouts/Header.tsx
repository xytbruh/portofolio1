import React from "react";

export default function Header() {
  return (
    <header className=" w-full">
      <div className="bg-[#F2F8FC] flex flex-row justify-between items-center py-5 px-[150px]">
        <div>Logo</div>
        <div>
          <ul className="flex flex-row items-start">
            <li className="leading-5 p-[15px]">
              <a href="/" className="hover:text-[#1051B8;]">
                Home
              </a>
            </li>
            <li className="leading-5 p-[15px]">
              <a href="/" className="hover:text-[#1051B8;]">
                Profil
              </a>
            </li>
            <li className="leading-5 p-[15px]">
              <a href="/" className="hover:text-[#1051B8;]">
                Layanan
              </a>
            </li>
            <li className="leading-5 p-[15px]">
              <a href="/" className="hover:text-[#1051B8;]">
                Blog
              </a>
            </li>
            <li className="leading-5 p-[15px]">
              <a href="/" className="hover:text-[#1051B8;]">
                Kontak
              </a>
            </li>
            <li className="leading-5 p-[15px]">
              <a
                href="/"
                className="btn"
              >
                Konsultasi
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
