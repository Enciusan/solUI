import React from "react";

import "../App.css";

export default function Roadmap() {
  return (
    <div className="w-full grid justify-center rounded-3xl" id="roadmap">
      <h2 className="text-white lg:text-7xl text-5xl font-pirata text-center ">
        ROADMAP
      </h2>
      <div className="pt-10 lg:mx-7 mx-16 hover:mx-0">
        <img
          className="sm:block hidden rounded-lg shadow-2xl shadow-[#2ea297] h-auto w-auto"
          src="../img/roadmap.jpg"
          alt="road"
        />
        {/* <a href="http://localhost:3000/img/roadmap.jpg" target="_blank"> */}
          <img
            className="block sm:hidden rounded-lg shadow-2xl shadow-black hover:z-40 hover:w-screen hover:h-full"
            src="../img/roadmap.jpg"
            alt="roadmap"
          />
        {/* </a> */}
      </div>
    </div>
  );
}
