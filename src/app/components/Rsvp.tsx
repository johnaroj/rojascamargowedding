"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { greatVibes } from "../styles/fonts";
import { FaHeart } from "react-icons/fa6";

type Props = {};

function Rsvp({}: Props) {
  const form = useRef<HTMLFormElement>(null);
  const sendEmail = (e: any) => {
    e.preventDefault();
    const currentForm = form.current;
    if (currentForm == null) return;

    emailjs
      .sendForm(
        "service_m746hxr",
        "template_vbe0zne",
        currentForm,
        "nXYt1NFwpK9Kh65oR"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current?.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="min-h-screen flex flex-col max-w-6xl px-10 pt-10 mx-auto items-center">
      <div className="mb-4 pt-20 flex flex-col justify-center items-center">
        <h6 className="uppercase text-[#B76E78] text-md mb-3 font-semibold tracking-widest">
          RSVP
        </h6>
        <h1 className={`${greatVibes.className} text-5xl text-center`}>
          Please r.s.v.p here before December 1st 2023
        </h1>
        <div className="flex items-center justify-center space-x-5 my-4">
          <div className="w-[60px] h-0.5 bg-[#B76E78]"></div>
          <FaHeart className="animate-bounce" />
          <div className="w-[60px] h-0.5 bg-[#B76E78]"></div>
        </div>
        <div className="italic text-slate-600 mb-4">
          Please note you cannot bring other family members, friends or plus
          ones at our wedding.
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-xl md:max-w-2xl lg:max-w-4xl w-full flex flex-col gap-4"
        >
          <div className="flex w-full flex-col md:flex-row gap-4">
            <input
              name="name"
              className="w-full py-4 px-3 text-gray-700 leading-tight focus:outline-yellow-500 focus:ring-0 focus:shadow-outline bg-[#EDF5F7] border-0"
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              name="email"
              className="w-full py-4 px-3 text-gray-700 leading-tight focus:outline-yellow-500 focus:ring-0 focus:shadow-outline bg-[#EDF5F7] border-0"
              type="text"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="flex w-full flex-col md:flex-row gap-4">
            <select
              name="guests"
              className="w-full md:w-1/2 bg-[#EDF5F7] py-4 px-3 text-gray-700 leading-tight focus:ring-0 focus:outline-yellow-500 focus:shadow-outline border-0"
              required
            >
              <option value="0">Number of guest (Only if invited)</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <select
              name="attendees"
              className="w-full md:w-1/2 bg-[#EDF5F7] py-4 px-3 text-gray-700 leading-tight focus:ring-0 focus:outline-yellow-500 focus:shadow-outline border-0"
              required
            >
              <option value="Attending">I&apos;m Attending</option>
              <option value="Attending only ceremony">
                Attending only ceremony
              </option>
              <option value="Attending only at the wedding party">
                Attending only at the wedding party
              </option>
            </select>
          </div>

          <textarea
            name="message"
            className="w-full bg-[#EDF5F7] py-2 px-3 text-gray-700 leading-tight focus:outline-yellow-500 focus:ring-0 focus:shadow-outline border-0"
            placeholder="Your Message"
            rows={6}
          />
          <button type="submit" className="bg-[#B76E78] py-4 px-3 text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Rsvp;
