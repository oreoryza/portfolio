import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useSelector, useDispatch } from "react-redux";
import { doorToggle } from "../redux/slices/doorSlice";

const OpeningDoor = () => {
  const dispatch = useDispatch();
  const [isDoorHover, setIsDoorHover] = useState(false);
  const door = useSelector((state) => state.door.door);
  const theme = useSelector((state) => state.theme.theme)

  return (
    <div className="relative flex justify-center items-center w-full h-screen">
      <AnimatePresence initial={false}>
        {door && (
          <motion.div
            initial={{ opacity: 0, scale: 10 }}
            animate={{ opacity: 0.9, scale: 1 }}
            exit={{ opacity: 0, scale: 10 }}
            transition={{delay: 0.5, duration: 0.3}}
            onClick={() => dispatch(doorToggle())}
            className={`${theme === "dark" ? "bg-white" : "bg-black"} absolute group w-40 h-64 border-8 border-yellow overflow-hidden`}
          >
            <motion.div exit={{x: -20}} className="absolute w-4 h-full bg-yellow">
              <div className="w-full h-full bg-black/[.05]"></div>
            </motion.div>
            <motion.div
            exit={{opacity: 0}}
              onMouseOver={() => setIsDoorHover(true)}
              onMouseOut={() => setIsDoorHover(false)}
              className="absolute flex justify-end items-center door active border border-black/[.05] cursor-pointer"
            >
              <div className="grid grid-cols-2 grid-rows-4 gap-4 h-full w-full p-4 pr-1">
                <div className="w-full h-full border-2 border-black/[.05]"></div>
                <div className="w-full h-full border-2 border-black/[.05]"></div>
                <div className="row-span-2 w-full h-full border-2 border-black/[.05]"></div>
                <div className="row-span-2 w-full h-full border-2 border-black/[.05]"></div>
                <div className="w-full h-full border-2 border-black/[.05]"></div>
                <div className="w-full h-full border-2 border-black/[.05]"></div>
              </div>
              <div className="min-w-2 min-h-2 bg-white rounded-full me-1"></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* {door && (
      <div className="font-gabarito absolute bottom-40 text-white opacity-50 select-none">
        {isDoorHover ? "" : "open the door."}
      </div>
      )} */}
    </div>
  );
};

export default OpeningDoor;
