import React from "react";

import "../App.css";

export default function Roadmap() {
  return (
    <div className="w-full h-full px-8 rounded-3xl" id="roadmap">
      <h2 className="text-white lg:text-7xl text-5xl font-pirata text-center ">
        ROADMAP
      </h2>
      <div className="pt-10 lg:mx-7 ">
        <img
          class="sm:block hidden rounded-lg shadow-2xl shadow-black"
          src="../img/roadmap.jpg"
          alt="road"
        />
        <a href="http://localhost:3000/img/roadmap.jpg" target="_blank">
          <img
            class="block sm:hidden rounded-lg shadow-2xl shadow-black"
            src="../img/roadmap.jpg"
            alt="roadmap"
          />
        </a>
      </div>
    </div>
  );
}
