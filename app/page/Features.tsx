import React from "react";

export default function Features() {
  return (
    <section>
      <a className="group text-pink-500 transition-all duration-300 ease-in-out" href="#">
        <span className="bg-left-bottom bg-gradient-to-r from-pink-500 to-pink-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
          This text gets 'underlined' on hover
        </span>
      </a>
    </section>
  );
}
