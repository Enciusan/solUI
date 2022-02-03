import "../App.css";

import { CgArrowUpR } from "react-icons/cg";

export default function BackTopButton() {
  return (
    <a href="#nav">     
      <div className="flex">
        <div className="fixed right-0 sm:bottom-1 bottom-5">
          <div className="sm:block hidden sm:w-10 w-5 rounded border-2">
            <div className="flex justify-center">
              <div className="flex sm:block hidden text-center mr-0">
                <div className=" text-white text-sm font-germania">
                  <p>B</p>
                  <p>a</p>
                  <p>c</p>
                  <p>k</p>
                </div>
                <p className="text-[#192152]"> - </p>
                <div className="text-white text-sm font-germania">
                  <p>t</p>
                  <p>o</p>
                </div>
                <p className="text-neutral-900"> - </p>
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
          <CgArrowUpR className="h-10 w-10 text-white"/>
          </div>

        </div>
      </div>
    </a>
  );
}
