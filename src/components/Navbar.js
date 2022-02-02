import { Fragment, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Transition } from "@tailwindui/react";
import "../App.css";

const navigation = [
  { name: "About", href: "#about", current: true },
  { name: "Minting", href: "#mint", current: false },
  { name: "Roadmap", href: "#roadmap", current: false },
];
const navigation1 = [
  { name: "Gallery", href: "#gallery", current: false },
  { name: "Team", href: "#team", current: false },
  { name: "FAQ", href: "#faq", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Disclosure as="nav" className=" md:w-full w-screen" id="nav">
        {({ open }) => (
          <>
            <div className="md:px-8 px-auto flex">
              <div className="h-full w-full">
                <div className="flex justify-center">
                  <div className="hidden sm:flex md:w-max w-8/12">
                    <div className="flex items-center lg:space-x-4 space-x-1 font-pirata">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "text-white lg:text-4xl"
                              : "text-white lg:text-4xl",
                            "px-3 py-2 rounded-md nav-underline  "
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                      <img
                        className="lg:h-44 h-20 lg:w-44 w-20"
                        src="./img/alb.png"
                        alt="Workflow"
                      />
                      {navigation1.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "text-white lg:text-4xl text-sm"
                              : "text-white lg:text-4xl text-sm ",
                            "px-3 py-2 rounded-md nav-underline"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="sm:hidden flex justify-between pt-3 pr-5">
                  <div className="flex justify-start">
                    <img
                      className="lg:h-44 h-40 lg:w-44 w-40"
                      src="./img/alb.png"
                      alt="Workflow"
                    />
                  </div>
                  <div></div>

                  {/* Mobile menu */}
                  <div className="sm:hidden flex justify-end pr-5">
                    <button
                      className="outline-none"
                      onClick={() => setIsVisible(!isVisible)}
                    >
                      <svg
                        className="w-10 h-10 text-white "
                        x-show="!showMenu"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                      </svg>
                    </button>
                  </div>

                  <Transition
                    show={isVisible}
                    enter="transition ease-out duration-150"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    className="fixed right-0 top-0 bottom-0 left-0 bg-neutral-800 text-center bg-opacity-95 origin-top-right z-10"
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    <ul >
                      <li className="text-lg font-pirata">
                        <a
                          className="block px-2 text-white font-pirata flex justify-end"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-14 w-14 flex pt-6"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      <div className="pt-10">
                      <li className="text-lg font-pirata">
                        <a
                          href="#about"
                          className="block text-4xl px-2 py-7 text-white font-pirata"
                        >
                          About
                        </a>
                      </li>
                      <li className="text-lg font-pirata">
                        <a
                          href="#mint"
                          className="block text-4xl px-2 py-7 text-white font-pirata"
                        >
                          Minting
                        </a>
                      </li>
                      <li className="text-lg font-pirata">
                        <a
                          href="#roadmap"
                          className="block text-4xl px-2 py-7 text-white font-pirata"
                        >
                          Roadmap
                        </a>
                      </li>
                      <li className="text-lg font-pirata">
                        <a
                          href="#gallery"
                          className="block text-4xl px-2 py-7 text-white font-pirata"
                        >
                          Gallery
                        </a>
                      </li>
                      <li className="text-lg font-pirata">
                        <a
                          href="#team"
                          className="block text-4xl px-2 py-7 text-white font-pirata"
                        >
                          Team
                        </a>
                      </li>
                      <li className="text-lg font-pirata">
                        <a
                          href="#faq"
                          className="block text-4xl px-2 py-7 text-white font-pirata"
                        >
                          FAQ
                        </a>
                      </li>
                      </div>
                    </ul>
                  </Transition>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
}
