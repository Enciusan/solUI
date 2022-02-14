import React from "react";
import { Link } from "react-router-dom";
import Mint from "../pages/mint";

import "../App.css";

export default function MintCard() {
  return (
    <div
      className="sm:w-full w-full sm:h-full lg:mx-auto px-10 rounded-3xl"
      id="mint"
    >
      <h2 className="text-white lg:text-7xl text-5xl font-pirata text-center ">
        MINT
      </h2>
      <div className="grid xl:grid-cols-2 grid-cols-1">
        <img
          className="xl:flex hidden w-6/12 h-6/12 ml-20 md:my-28 my-60 rounded-lg "
          src="../img/1fb1.png"
          alt="fox"
        />
        <div className="w-full h-full px-3 mt-5">
          <div className="flex flex-col text-white sm:text-4xl text-2xl ml-10 mt-20 font-germania text-start">
            Date
            <div className="w-full px-2 h-full text-start pt-3 sm:text-2xl text-lg font-germania">
              Stay tuned. The mint date will be announced{" "}
              <span className="underline underline-offset-1">SOON</span>.
            </div>
          </div>
          <div className="flex flex-col text-white sm:text-4xl text-2xl ml-10 mt-20 font-germania text-start">
            Price
            <div className="w-full px-2 h-full text-start pt-3 sm:text-2xl text-lg font-germania">
              TBA
            </div>
          </div>
          <div className="flex flex-col text-white sm:text-4xl text-2xl ml-10 mt-20 font-germania text-start">
            Where
            <div className="flex w-full px-2 h-full text-start pt-3 sm:text-2xl text-lg font-germania">
              {" "}
              TBA
              {/* This will be the button that will redirect to the mint page on the mint date. */}
              {/* <Link href='/Mint'>Mint</Link> */}
            </div>
            {/* <button className="h-10 w-2/4 border-[#2ea297] rounded-md border-md bg-[#2ea297] bg-opacity-50 hover:bg-opacity-100 ml mt-2" disabled>Mint</button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
