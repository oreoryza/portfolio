import React from "react";

const BannerName = () => {
  return (
    <div className="relative flex justify-center items-center max-lg:-z-50 opacity-75 h-full">
        <h1 className="z-50 absolute top-0 font-gabarito text-9xl font-bold text-yellow mix-blend-color-dodge mt-2 md:-translate-x-32 select-none">
          ORYZA
          <br />
          SATIVA
        </h1>
      <div className="h-[28rem] w-[30vw] max-w-[30rem] bg-blue border-b-8 border-yellow">
        <h2 className="absolute bottom-1 right-0 font-gabarito text-end md:text-4xl text-2xl font-medium text-yellow select-none">Frontend Developer</h2>
      </div>
    </div>
  );
};

export default BannerName;
