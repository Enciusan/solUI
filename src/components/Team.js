import "../App.css";
import { SiTwitter, SiLinkedin } from "react-icons/si";

export default function Team() {
  return (
    <div className="flex justify-center w-3/4 h-full bg-gradient-to-tr from-[#a6b9fe] via-[#b9b0e9] to-pink-300 rounded-3xl bg-opacity-25 mx-auto">
      <div
        className="sm:mx-auto py-4 rounded-3xl sm:w-10/12 w-full sm:h-full h-full"
        id="team"
      >
        <h2 className="text-white sm:text-7xl text-5xl font-pirata text-center">
          Team
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-10 justify-items-center pt-20 mb-10 sm:mx-0 mx-20">
          <div className="sm:w-60 w-full h-full border-2 border-pink-300 shadow-md shadow-pink-300 rounded-lg bg-gradient-to-br from-[#a6b9fe] via-[#b9b0e9] to-pink-300">
            <img
              className="shadow-lg shadow-pink-300 rounded-md"
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
                rel="noreferrer"
              >
                <SiTwitter />
              </a>
            </div>
          </div>

          <div className="sm:w-60 w-full h-full border-2 border-pink-300 shadow-md shadow-pink-300 rounded-lg bg-gradient-to-br from-[#a6b9fe] via-[#b9b0e9] to-pink-300 ">
            <img
              className="shadow-lg shadow-pink-300 rounded-md"
              src="../img/enciu.jpg"
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
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
            </p>
          </div>

          <div className="sm:w-60 w-full h-full border-2 border-pink-300 shadow-md shadow-pink-300 rounded-lg bg-gradient-to-br from-[#a6b9fe] via-[#b9b0e9] to-pink-300 ">
            <img
              className="shadow-lg shadow-pink-300 rounded-md"
              src="../img/Dinu.jpg"
              alt="enq"
            />
            <h1 className="text-white sm:text-4xl text-2xl font-germania text-center pt-10">
              DINU
            </h1>
            <p className="flex flex-row text-white text-xl font-germania text-center pt-2 justify-center pl-3">
              COMMUNITY
              <a
                href="https://www.linkedin.com/in/dinu-todearscu-9886411b8/"
                className="pl-2 pt-1"
                target="_blank"
                rel="noreferrer"
              >
                <SiLinkedin />
              </a>
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-10 justify-items-center pt-20 mb-10 sm:mx-0 mx-20">
          <div className="sm:w-60 w-full h-full border-2 border-pink-300 shadow-md shadow-pink-300 rounded-lg bg-gradient-to-br from-[#a6b9fe] via-[#b9b0e9] to-pink-300">
          <img
              className="shadow-lg shadow-pink-300 rounded-md"
              src="../img/Toma.jpg"
              alt="bobi"
            />
            <h1 className="text-white sm:text-4xl text-2xl font-germania text-center pt-10">
              TOMA
            </h1>
            <div className="flex flex-row justify-center pl-4 text-white text-xl font-germania text-center pt-2">
              Social Media Marketing
              <a
                href="https://twitter.com/godfatherofcopy"
                className="pl-2 pt-1"
                target="_blank"
              >
                <SiTwitter />
              </a>
            </div>
          </div>
          <div className="sm:w-60 w-full h-full border-2 border-pink-300 shadow-md shadow-pink-300 rounded-lg bg-gradient-to-br from-[#a6b9fe] via-[#b9b0e9] to-pink-300">
          <img
              className="shadow-lg shadow-pink-300 rounded-md"
              src="../img/Andrei.jpg"
              alt="bobi"
            />
            <h1 className="text-white sm:text-4xl text-2xl font-germania text-center pt-10">
              ANDREI
            </h1>
            <div className="flex flex-row justify-center pl-4 text-white text-xl font-germania text-center pt-2">
            Social Media Marketing
              <a
                href="https://www.linkedin.com/in/andrei-marin-1649ab21a/"
                className="pl-2 pt-1"
                target="_blank"
              >
              <SiLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
