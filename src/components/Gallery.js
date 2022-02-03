import React from "react";
import { Carousel } from "react-responsive-carousel";

import "../App.css";

export default function Gallery() {
  return (
    <div className="w-full">
      <h2 className="text-white sm:text-7xl text-5xl font-pirata text-center pb-10">Gallery</h2>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
          <img alt="" src="../img/cycle.jpeg" className="" />
        </div>
        <div>
          <img alt="" src="../img/enq.jpeg" />
        </div>
        <div>
          <img alt="" src="../img/final2.jpeg" />
        </div>
        <div>
          <img alt="" src="../img/oreo.jpeg" />
        </div>
      </Carousel>
    </div>
  );
}

{
  /* <div className="w-full sm:h-full" id="gallery">
    <div className="sm:text-7xl text-5xl font-pirata text-center text-white pb-20">Gallery</div>
    <div className="flex flex-row justify-center mx-10 ">
      <div className="slider lazy w-full">
          <button type="button" className="slick-next">
            Next
          </button>
          <div >
            <img
              className="rounded-md px-5"
              data-lazy="../img/cycle.jpeg"
              src=""
              alt="bobi"
            />
          </div>
          <div>
            <img
              className="rounded-md px-5"
              data-lazy="../img/enq.jpeg"
              src=""
              alt="enq"
            />
          </div>
          <div>
            <img
              className=" rounded-md px-5"
              data-lazy="../img/final2.jpeg"
              src=""
              alt="bobi"
            />
          </div>
          <div>
            <img
              className=" rounded-md px-5"
              data-lazy="../img/oreo.jpeg"
              src=""
              alt="bobi"
            />
          </div>
          <button type="button" className="slick-prev">
            Previous
          </button>
        </div>
      </div>
      </div> */
}
