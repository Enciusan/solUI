import "../App.css";

export default function Intro() {
  return (
    <div className="w-full h-max text-white rounded-l-lg font-germania sm:pr-20 pr-0">
      <div className="flex flex-column sm:justify-end justify-center sm:pr-6 pl-0 text-3xl">
        WELCOME TO THE
      </div>
      <div className="flex sm:justify-end justify-center pt-2 sm:pl-0 pl-0 sm:text-5xl text-4xl">
        NONAME FOXESCLUB
      </div>
      <div className="flex sm:flex-row flex-col sm:justify-end justify-center mt-14">
        <div className="flex flex-row sm:px-5 px-3">
          <a
            href="https://twitter.com/NNFoxesclub"
            className="flex justify-between border-2 shadow shadow-white rounded-md inset-x-36 sm:mt-0 mt-10 sm:mx-0 mx-auto w-60 h-16"
          >
            <img
              className="translate-x-3 translate-y-4 h-8 w-8 z-0"
              src="https://img.icons8.com/ios-glyphs/28/000000/twitter--v2.png"
              alt="twitter"
            />
            <div className="flex justify-center pt-5">
              Join our twitter
            </div>
            <div></div>
          </a>
        </div>

        <div className="flex">
          <a
            href="https://discord.gg/x3SFme3kH5"
            className="flex justify-between border-2 shadow shadow-white rounded-md inset-x-36 sm:mt-0 mt-10 sm:mx-0 mx-auto w-60 h-16"
          >
            <img
              className="translate-x-3 translate-y-4 h-8 w-8 z-0" 
              src="https://img.icons8.com/ios-filled/28/000000/discord--v2.png"
              alt="discord"
            />
            <div className="flex justify-center pt-5">
              Join our twitter
            </div>
            <div></div>
          </a>
        </div>
      </div>
    </div>
  );
}
