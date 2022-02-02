import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

import "../App.css";

export default function FAQ() {
  return (
    <div className="sm:w-full px-4 pt-8" id="faq">
      <div className="flex justify-center md:mb-16 my-6 text-white sm:text-7xl text-5xl font-pirata text-center">
        FAQ
      </div>
      <div className="sm:w-5/12 p-2 mx-auto bg-[#192152] rounded-2xl">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-germania text-left text-white bg-[#192152] rounded-lg hover:bg-sky-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md font-germania text-white">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-xl font-germania text-left text-white bg-[#192152] rounded-lg hover:bg-sky-700 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>Do you offer technical support?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "transform rotate-180" : ""
                  } w-5 h-5 text-white`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-md font-germania text-white">
                No.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}
