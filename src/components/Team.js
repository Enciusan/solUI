import "../App.css";
import { SiTwitter, SiLinkedin } from "react-icons/si";

export default function Team() {
  return (
    <div className="flex justify-center w-3/4 h-full bg-gradient-to-b from-[#a2cee8] to-[#a6b9fe] rounded-3xl bg-opacity-25 mx-auto">
      <div
        className="sm:mx-auto py-4 rounded-3xl sm:w-10/12 w-full sm:h-full h-full"
        id="team"
      >
        <h2 className="text-white sm:text-7xl text-5xl font-pirata text-center">
          Team
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-10 justify-items-center pt-20 sm:mx-0 mx-20">
          <div className="sm:w-60 w-full h-full border-2 border-[#a2cee8] shadow-md shadow-[#a2cee8] rounded-lg bg-gradient-to-t from-[#a2cee8]">
            <img
              className="shadow-lg shadow-[#a2cee8] rounded-md"
              src="../img/1.jpg"
              alt="bobi"
            />
            <h1 className="text-white sm:text-4xl text-2xl font-germania text-center pt-10">
              BOGDAN
            </h1>
            <div className="flex flex-row justify-center pl-4 text-white text-xl font-germania text-center pt-2">
              3D ARTIST
              <a
                href="https://twitter.com/by_andreibogdan"
                className="pl-2 pt-1"
                target="_blank"
              >
                <SiTwitter />
              </a>
            </div>
          </div>

          <div className="sm:w-60 w-full h-full border-2 border-[#a2cee8] shadow-md shadow-[#a2cee8] rounded-lg bg-gradient-to-t from-[#a2cee8] ">
            <img
              className="shadow-lg shadow-[#a2cee8] rounded-md"
              src="../img/2.jpg"
              alt="enq"
            />
            <h1 className="text-white sm:text-4xl text-2xl font-germania text-center pt-10">
              ALEX
            </h1>
            <p className="flex flex-row text-white text-xl font-germania text-center pt-2 justify-center pl-3">
              DEVELOPER
              <a
                href="https://www.linkedin.com/in/alexandru-enciulescu-8834561b4/"
                className="pl-2 pt-1"
                target="_blank"
              >
                <SiLinkedin />
              </a>
            </p>
          </div>

          <div className="sm:w-60 w-full h-full border-2 border-[#a2cee8] shadow-md shadow-[#a2cee8] rounded-lg bg-gradient-to-t from-[#a2cee8] ">
            <img
              className="shadow-lg shadow-[#a2cee8] rounded-md"
              src="../img/2.jpg"
              alt="enq"
            />
            <h1 className="text-white sm:text-4xl text-2xl font-germania text-center pt-10">
              DINU
            </h1>
            <p className="flex flex-row text-white text-xl font-germania text-center pt-2 justify-center pl-3">
              COMMUNITY
              <a
                href="https://www.linkedin.com/in/alexandru-enciulescu-8834561b4/"
                className="pl-2 pt-1"
                target="_blank"
              >
                <SiLinkedin />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
