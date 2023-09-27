import React from "react";
import { greatVibes } from "../styles/fonts";
import { FaHeart } from "react-icons/fa6";

type Props = {};

const Event = (props: Props) => {
  return (
    <div className="flex flex-col max-w-6xl px-10 pt-10 mx-auto items-center">
      <div className="mb-4 pt-20 flex flex-col justify-center items-center">
        <h6 className="uppercase text-[#B76E78] text-md mb-3 font-semibold tracking-widest">
          Event
        </h6>
        <h1 className={`${greatVibes.className} text-5xl`}>
          Our Wedding Event
        </h1>
        <div className="flex items-center justify-center space-x-5 my-6">
          <div className="w-[60px] h-0.5 bg-[#B76E78]"></div>
          <FaHeart className="animate-bounce" />
          <div className="w-[60px] h-0.5 bg-[#B76E78]"></div>
        </div>
        <p className="text-gray-500 font-medium text-lg py-4 text-center">
          Be completely humble and gentle. Be patient,
          <br /> bearing with one another in love. Ephesians 4:2
        </p>
      </div>
      <div className="relative flex mt-8">
        <div className="w-1/2 text-right px-10 text-gray-500 space-y-2">
          <h4 className="font-semibold text-2xl text-black mb-4">
            Ceremony & Party
          </h4>
          <p>
            <span className="uppercase font-bold">LOCATION </span>: Dr. Martin
            Luther King
          </p>
          <p>Boulevard 60 A Willemstad, Curaçao</p>
          <p>Ceremony starts at 05:00PM</p>
          <p>Cheers to the newly weds 06:30PM</p>
          <p>Party time 08:00PM - 09:00PM</p>
          <p>Say goodbye 09:00PM</p>
        </div>
        <div className="absolute left-[calc(50%)] w-0.5 h-full bg-[#B76E78]" />
        <div className="w-1/2 text-left text-gray-500 px-10 space-y-2">
          <h4 className="font-semibold text-2xl text-black mb-4">
            Details of our wedding
          </h4>
          <p>
            Attire - Semi formal (no denim or/and t-shirts), Please do not wear{" "}
            <b>white</b>
          </p>
          <p>R.S.V.P Before December 1st 2023 on this website.</p>
          <p>
            Please arrive at 04:45 PM to secure a seat before the bride arrives.
          </p>
          <p>
            Following the ceremony at 06:30PM we will serve champange to
            celebrate the newly weds.
          </p>
          <p>
            <span className="font-bold">Food and Cocktail</span> will be served
            between 07:00PM and 08:00PM.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Event;
