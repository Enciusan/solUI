import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

import "../App.css";

export default function FAQ() {
  return (
    <div className="flex justify-center w-3/4 h-full bg-gradient-to-tr from-[#a6b9fe] via-[#b9b0e9] to-pink-300 rounded-3xl bg-opacity-25 mx-auto mt-5">
      <div className="sm:w-full px-4 " id="faq">
        <div className="flex justify-center md:mb-16 my-6 text-white sm:text-7xl text-5xl font-pirata text-center">
          FAQ
        </div>
        <div className="sm:w-7/12 p-2 mx-auto bg-gradient-to-l from-[#a6b9fe] to-[#b9b0e9] rounded-2xl mb-10">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-germania text-left text-white bg-gradient-to-r from-[#a6b9fe] via-[#b9b0e9] to-pink-300 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>WHAT BLOCKCHAIN IS THE PROJECT HOSTED ON?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg font-germania text-white">
                  The NoName FoxesClub is on the Solana blockchain.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-germania text-left text-white bg-gradient-to-r from-[#a6b9fe] via-[#b9b0e9] to-pink-300 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>IS THERE A WHITELIST?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg font-germania text-white">
                  Yes, join out Discord to learn more about how to be
                  whitelisted.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-germania text-left text-white bg-gradient-to-r from-[#a6b9fe] via-[#b9b0e9] to-pink-300 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>HOW TO MINT?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg font-germania text-white">
                  We will announce where our launch will take place. Stay tuned in our <span className="underline underline-offset-1">Discord</span>.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-germania text-left text-white bg-gradient-to-r from-[#a6b9fe] via-[#b9b0e9] to-pink-300 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>HOW MUCH FOR AN NFT?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg font-germania text-white">
                  TBA
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="mt-2 ">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-germania text-left text-white bg-gradient-to-r from-[#a6b9fe] via-[#b9b0e9] to-pink-300 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>HOW MANY FOXES ARE THERE?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-white`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-lg font-germania text-white">
                  There will be 2555 unique *male* foxes looking for their
                  owner.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
}
