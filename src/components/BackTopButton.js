import "../App.css";

export default function BackTopButton() {
  return (
    <a href="#nav">     
      <div className="flex relative ">
        <div className="fixed right-10 bottom-64 ">
          <div className="absolute w-10 h-60 rounded border-2  ">
            <div className="flex-1 overflow-y-scroll">
              <div className="absolute right-0 text-center mr-4 ">
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
