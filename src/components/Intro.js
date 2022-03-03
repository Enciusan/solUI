import { SiTwitter, SiDiscord } from "react-icons/si";
import "../App.css";

export default function Intro() {
  return (
    <div className="md:grid md:grid-cols-1 w-full h-max text-white rounded-l-lg font-germania md:ml-10">
      
      {/* <picture>
        <source srcSet="../img/5-fb1.webp" type="image/webp" />
        <img
          className="xl:flex hidden w-8/12 ml-40 rounded-[90px] "
          src="../img/5 fb1.png"
          alt="fox"
        />
      </picture> */}
      {/* <picture>
        <source srcSet="../img/5-fb1.webp" type="image/webp" /> */}
        {/* <img
          className="xl:flex hidden w-8/12 rounded-[90px] "
          src="../img/8fb1.png"
          alt="fox"
        /> */}
      {/* </picture> */}
      <div className="pt-14">
        <div className="flex flex-column sm:justify-center justify-center sm:text-5xl text-3xl">
          WELCOME TO THE
        </div>
        <div className="flex sm:justify-center justify-center pt-2 sm:text-7xl text-4xl">
          NONAME FOXESCLUB
        </div>
        <div className="flex sm:flex-row flex-col sm:justify-center justify-center mt-2 pr-7">
          <div className="flex flex-row px-8">
            <a
              href="https://twitter.com/NNFoxesclub"
              className="flex justify-between border-2 shadow-sm shadow-gray-200 rounded-md sm:mt-0 mt-10 sm:mx-0 mx-auto w-60 h-16 bg-gray-200"
              target="_blank"
            >
              <SiTwitter className="translate-x-3 translate-y-4 h-8 w-8 z-0 text-black" />
              <div className="flex justify-center pt-4 text-xl tracking-normal text-black font-roboto font-bold">
                Join our twitter
              </div>
              <div></div>
            </a>
          </div>

          <div className="flex">
            <a
              href="https://discord.gg/x3SFme3kH5"
              className="flex justify-between border-2 shadow-sm shadow-white rounded-md sm:mt-0 mt-10 sm:mx-0 mx-auto w-60 h-16 bg-gray-200"
              target="_blank"
            >
              <SiDiscord className="translate-x-3 translate-y-4 h-8 w-8 z-0 text-black" />
              <div className="flex justify-center pt-4 text-xl tracking-normal text-black font-roboto font-bold">
                Join our discord
              </div>
              <div></div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
