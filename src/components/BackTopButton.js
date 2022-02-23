import "../App.css";

import { CgArrowUpR } from "react-icons/cg";

export default function BackTopButton() {
  return (
    <a href="#nav">     
      <div className="flex">
        <div className="fixed right-1 sm:bottom-1 bottom-5">
          <div className="sm:block hidden sm:w-10 w-5 rounded border-2 border-[#a2cee8]">
            <div className="flex justify-center">
              <div className="flex sm:block hidden text-center">
                <div className="text-white text-sm font-germania">
                  <p>B</p>
                  <p>a</p>
                  <p>c</p>
                  <p>k</p>
                </div>
                <p className="text-[#a6b9fe]"> - </p>
                <div className="text-white text-sm font-germania">
                  <p>t</p>
                  <p>o</p>
                </div>
                <p className="text-[#a6b9fe]"> - </p>
                <div className="text-white text-sm font-germania">
                  <p>t</p>
                  <p>o</p>
                  <p>p</p>
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE BACK TO TOP */}
          <div className="sm:hidden flex">
          <CgArrowUpR className="h-10 w-10 text-[#a2cee8]"/>
          </div>

        </div>
      </div>
    </a>
  );
}
