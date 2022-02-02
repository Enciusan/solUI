import "../App.css";

export default function BackTopButton() {
  return (
    <a href="#nav">     
      <div className="flex relative ">
        <div className="fixed sm:right-10 right-7 bottom-64 ">
          <div className="absolute sm:w-10 w-7 h-60 rounded border-2  ">
            <div className="flex-1 overflow-y-scroll">
              <div className="absolute right-0 text-center sm:mr-4 mr-2 ">
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
        </div>
      </div>
    </a>
  );
}
