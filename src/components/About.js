import React, { useState, useEffect } from "react";
import "../App.css";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import SmoothList from "react-smooth-list";

export default function About() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  console.log(offset);

  return (
    <div
      className="flex justify-center w-3/4 h-full bg-gradient-to-b from-[#a2cee8] to-[#a6b9fe] rounded-3xl bg-opacity-25 mx-auto"
      id="story"
    >
      <div className="text-white pb-10 ">
        <h2 className="sm:text-7xl text-5xl font-pirata text-center pt-10">
          STORY
        </h2>
          <SmoothList >
            <div className="flex justify-start mt-2 font-germania sm:text-xl text-md w-8/12 text-start mx-auto mt-12">
            &nbsp;&nbsp;&nbsp;The wind blew the powdery fresh snow across the open white field
              of the North Pole as Sai watched for signs of approaching
              predators. His hair rustled as the crisp air picked up and changed
              direction, bringing the scent of humans into his nose. They are
              far away, Sai thinks to himself, going back inside to warn the
              others.
            </div>
          </SmoothList>

        {/* {offset >= 740 && ( */}
          <SmoothList >
            <div className="flex justify-center mt-2 font-germania sm:text-xl text-md w-8/12 text-start mx-auto">
            &nbsp;&nbsp;&nbsp;His den rests at the base of a cliff with a large series of snow
              covered rocks to hide the entrance. We should be safe&hellip;
              Sai&rsquo;s family consists of Mae, his partner, their two
              pups,Tiki and Pon. Sai knows of several other fox family dens
              located near them, but they usually keep to themselves. Sometimes
              he hunts with a few of the other males when prey is hard to find.
            </div>
          </SmoothList>
        {/* )} */}

        {/* {offset >= 740 && ( */}
          <SmoothList >
            <div className="flex justify-center mt-2 font-germania sm:text-xl text-md w-8/12 text-start mx-auto">
            &nbsp;&nbsp;&nbsp;&ldquo;Man is near. I must tell the others.&rdquo; Sai informs Mae
              as he leaves again, her and the pups whining with worry. Many
              arctic foxes have been hunted and killed in the last few weeks,
              leading the families to be on high alert.
            </div>
          </SmoothList>
        {/* )} */}

        {/* <div className={isCollapsed && "md:grid hidden"}> */}
          {/* {offset >= 1000 && ( */}
            <SmoothList>
              <div className="flex justify-center mt-2 font-germania sm:text-xl text-md w-8/12 text-start mx-auto">
              &nbsp;&nbsp;&nbsp;The wind has died down, no longer whipping snow into Sai&rsquo;s
                eyes. The view is clear and he spots several dark figures in the
                distance, slowly growing closer. Undoubtedly Man. Hunters of
                their kind. Killing them for their fur, reducing their numbers
                for vanity. We&rsquo;ll show them. Sai plans with the other
                foxes, knowing this is their only chance for survival.
              </div>
            </SmoothList>
          {/* )} */}

          {/* {offset >= 1000 && ( */}
            <SmoothList>
              <div className="flex justify-center mt-2 font-germania sm:text-xl text-md w-8/12 text-start mx-auto">
              &nbsp;&nbsp;&nbsp;The foxes know the land best and they blend in with the snow and
                the rocks easily. They&rsquo;re ready and they have their
                numbers. Sai and the others decide together their strategy of
                attack. The humans were smart too and had weapons and nets,
                meaning the foxes must be careful.
              </div>
            </SmoothList>
          {/* )} */}

          {/* {offset >= 1000 && ( */}
            <SmoothList >
              <div className="flex justify-center mt-2 font-germania sm:text-xl text-md w-8/12 text-start mx-auto">
              &nbsp;&nbsp;&nbsp;They hid, males, females, old and adolescent, all of them
                prepared and in position. Some dug holes and stayed below the
                snow, others hid in caves or behind rocks. The humans would
                never expect such a strategic maneuver.
              </div>
            </SmoothList>
          {/* )} */}

          {/* {offset >= 1200 && ( */}
            <SmoothList >
              <div className="flex justify-center mt-2 font-germania sm:text-xl text-md w-8/12 text-start mx-auto">
              &nbsp;&nbsp;&nbsp;The wind changed again, bringing the scent of human their
                direction again. This time much stronger than before.
                They&rsquo;re getting close. The sound of their boots crunching
                the snow as they walked across the open plain towards the foxes
                dens grew louder. Once the men had passed the first den the
                foxes would attack.
              </div>
            </SmoothList>
          {/* )} */}

          {/* {offset >= 1200 && ( */}
            <SmoothList >
              <div className="flex justify-center mt-2 font-germania sm:text-xl text-md w-8/12 text-start mx-auto">
              &nbsp;&nbsp;&nbsp;When the moment came, the others were scared. No one moved. Sai
                knew he had to be the first, so he leaped out of the snow and
                latched onto the thick gloves on the nearest man&rsquo;s hand.
                He yells out, grabbing Sai by the scruff. He thought he was
                dead. But in that moment of bravery, dozens of arctic foxes
                erupted from their hiding spots, biting, shouting and chasing
                the hunters.
              </div>
            </SmoothList>
          {/* )} */}

          {/* {offset >= 1200 && ( */}
            <SmoothList>
              <div className="flex justify-center mt-2 font-germania sm:text-xl text-md w-8/12 text-start mx-auto">
              &nbsp;&nbsp;&nbsp;The men were dancing and jumping around frantically, screaming
                at the foxes and each other. Unsure of what to do, they did what
                seemed best and ran, quickly disappearing from sight as the snow
                swallowed them up.
              </div>
            </SmoothList>
          {/* )} */}

          {/* {offset >= 1200 && ( */}
            <SmoothList>
              <div className="flex justify-center mt-2 font-germania sm:text-xl text-md w-8/12 text-start mx-auto">
              &nbsp;&nbsp;&nbsp;The foxes celebrated! They have won this battle, but would there
                be a war? Sai and his band of arctic soldiers will be prepared
                for the next time that any man decides to hunt them. After all,
                the North Pole doesn&rsquo;t just belong to humans!
              </div>
            </SmoothList>
          {/* )} */}

        </div>
        <div className="md:hidden flex justify-center mt-10">
          {isCollapsed ? (
            <button
              className="transition duration-500 transform px-6 py-2 m-4 inline bg-[#005650] bg-opacity-70 animate-bounce hover:bg-indigo-400 hover:border-yellow-500 hover:text-white hover:opacity-50 hover:shadow-md hover:scale-125"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <FiArrowDown />
            </button>
          ) : (
            <button
              className="transition duration-500 transform px-6 py-2 m-4 inline bg-[#005650] bg-opacity-70 animate-bounce hover:bg-indigo-400 hover:border-yellow-500 hover:text-white hover:opacity-50 hover:shadow-md hover:scale-125"
              onClick={() => setIsCollapsed(!isCollapsed)}
            >
              <FiArrowUp />
            </button>
          )}
        </div>
      </div>
    // </div>
  );
}
