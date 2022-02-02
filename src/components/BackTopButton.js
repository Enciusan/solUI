import "../App.css";

export default function BackTopButton() {
  return (
    <a href="#nav">     
      <div className="flex">
        <div className="fixed sm:right-0 -right-4 sm:bottom-1 bottom-5">
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
          <img src="https://img.icons8.com/external-kiranshastry-solid-kiranshastry/64/000000/external-up-arrow-miscellaneous-kiranshastry-solid-kiranshastry.png"/>
          </div>

        </div>
      </div>
    </a>
  );
}
