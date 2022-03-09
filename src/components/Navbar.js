import { Fragment, useState } from "react";
import { Disclosure, Dialog, Transition as Thead } from "@headlessui/react";
import { Transition } from "@tailwindui/react";
import "../App.css";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Minting", href: "#mint", current: false },
  { name: "Roadmap", href: "#roadmap", current: false },
  { name: "Gallery", href: "#gallery", current: false },
];
const navigation1 = [
  { name: "Team", href: "#team", current: false },
  { name: "Story", href: "#story", current: false },
  { name: "FAQ", href: "#faq", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Disclosure as="nav" className=" md:w-full w-screen" id="nav">
        {({ open }) => (
          <>
            <div className="px-auto flex">
              <div className="h-full w-full">
                <div className="flex justify-center">
                  <div className="hidden sm:flex md:w-max w-8/12">
                    <div className="flex items-center lg:space-x-4 space-x-1 font-pirata">
                      <Link
                        to="/mintUkr"
                        className="flex justify-start w-full text-[#74acdf] lg:text-4xl px-3 py-2 rounded-md nav-underline "
                      >
                        Mint &nbsp; <p className="text-[#fcd116]">Ukraine</p>
                      </Link>
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
                      <div>
                        <div className=" flex items-center justify-center">
                          <button
                            type="button"
                            onClick={openModal}
                            className="flex items-center lg:space-x-4 space-x-1 font-pirata text-white lg:text-4xl text-sm px-3 py-2 rounded-md nav-underline"
                          >
                            Staking
                          </button>
                        </div>
                        <Thead appear show={isOpen} as={Fragment}>
                          <Dialog
                            as="div"
                            className="fixed inset-0 z-10 overflow-y-auto"
                            onClose={closeModal}
                          >
                            <div className="min-h-screen px-4 text-center">
                              <Thead.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                              >
                                <Dialog.Overlay className="fixed inset-0" />
                              </Thead.Child>

                              {/* This element is to trick the browser into centering the modal contents. */}
                              <span
                                className="inline-block h-screen align-middle"
                                aria-hidden="true"
                              >
                                &#8203;
                              </span>
                              <Thead.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                              >
                                <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                  <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-gray-900"
                                  >
                                    Staking
                                  </Dialog.Title>
                                  <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                      Staking system will come soon.
                                    </p>
                                  </div>

                                  <div className="mt-4">
                                    <button
                                      type="button"
                                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                                      onClick={closeModal}
                                    >
                                      Got it!
                                    </button>
                                  </div>
                                </div>
                              </Thead.Child>
                            </div>
                          </Dialog>
                        </Thead>
                      </div>
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
                    className="fixed right-0 top-0 bottom-0 left-0 bg-neutral-800 text-center origin-top-right z-10"
                    onClick={() => setIsVisible(!isVisible)}
                  >
                    <ul>
                      <li className="text-lg font-pirata">
                        <a className="block px-2 text-white font-pirata flex justify-end">
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
                            href="#about"
                            className="block text-4xl px-2 py-7 text-white font-pirata"
                          >
                            Story
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
