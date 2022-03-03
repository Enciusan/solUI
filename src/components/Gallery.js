import React from "react";
import { Carousel } from "react-responsive-carousel";

import "../App.css";

export default function Gallery() {
  return (
    <div className="flex justify-center w-3/4 h-full bg-gradient-to-tr from-[#a6b9fe] via-[#b9b0e9] to-pink-300 rounded-3xl bg-opacity-25 mx-auto">
      <div className="container mx-auto" id="gallery">
        <div className="sm:w-9/12 w-full mx-auto">
          <h2 className="text-white sm:text-7xl text-5xl font-pirata text-center pb-10 pt-10">
            GALLERY
          </h2>
          <Carousel autoPlay infiniteLoop showStatus={false} >
            <div>
              <img alt="" src="../img/1.jpg" className="h-auto w-auto" />
            </div>
            <div>
              <img alt="" src="../img/Enciu.jpg" className="h-auto w-auto" />
            </div>
            <div>
              <img alt="" src="../img/11.jpg" className="h-auto w-auto" />
            </div>
            <div>
              <img alt="" src="../img/12.jpg" className="h-auto w-auto" />
            </div>
            <div>
              <img alt="" src="../img/5.jpg" className="h-auto w-auto" />
            </div>
            <div>
              <img alt="" src="../img/6.jpg" className="h-auto w-auto" />
            </div>
            <div>
              <img alt="" src="../img/7.jpg" className="h-auto w-auto" />
            </div>
            <div>
              <img alt="" src="../img/8.jpg" className="h-auto w-auto" />
            </div>
            {/* <div>
          <img alt="" src="../img/8.jpg" className="h-auto w-auto"/>
        </div> */}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
