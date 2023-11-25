import React from "react";
import { greatVibes } from "../styles/fonts";
import { motion } from "framer-motion";
import ModalVideo from "./ModalVideo";

function HeroCaption() {
  return (
    <>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-4xl font-bold z-20 space-y-6 text-center">
        <motion.h1
          initial={{
            scale: 2,
          }}
          animate={{
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className={`${greatVibes.className} text-6xl lg:text-8xl  font-bold`}
        >
          Fabiola & Jonathan
        </motion.h1>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 3,
          }}
          className="uppercase font-light border-y-2 p-2"
        >
          We&apos;re getting married
        </motion.div>
        <ModalVideo />
      </div>
      <div className="absolute inset-0 bg-black z-10 opacity-50"></div>
    </>
  );
}

export default HeroCaption;
