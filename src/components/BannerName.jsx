import React from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";

const BannerName = () => {
  return (
    <div className="relative flex justify-center items-center max-lg:-z-50 h-full">
        <h1 className="z-50 absolute top-0 font-gabarito text-9xl font-bold text-yellow mix-blend-color-dodge mt-2 md:-translate-x-32 select-none">
          ORYZA
          <br />
          SATIVA
        </h1>
      <div className="h-96 md:w-64 w-32 border-blue border-8">
        <h2 className="absolute bottom-1 right-2 font-gabarito text-end md:text-4xl text-2xl font-medium text-blue select-none">Frontend Developer</h2>
      </div>
    </div>
  );
};

export default BannerName;
