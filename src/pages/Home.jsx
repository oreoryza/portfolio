import React, { useEffect, useState } from "react";
import {
  useLocation,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import OpeningDoor from "../components/OpeningDoor";
import { useDispatch, useSelector } from "react-redux";
import { doorToggle } from "../redux/slices/doorSlice";
import { toggleTheme } from "../redux/slices/themeSlice";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import BannerName from "../components/BannerName";
import ProjectsList from "../components/ProjectsList";
import Navigation from "../components/Navigation";
import Description from "../components/Description";
import ProjectDetail from "../components/ProjectDetail";
import Form from "../components/Form"
import Info from "../components/Info";
import Marquee from "../components/Marquee";

const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const door = useSelector((state) => state.door.door);
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    if (door) {
      document.body.style.backgroundColor = "#3060B7";
    } else if (theme === "dark") {
      document.body.style.backgroundColor = "white";
    } else {
      document.body.style.backgroundColor = "black";
    }
  }, [door, theme]);

  return (
    <>
      <OpeningDoor />
      <AnimatePresence initial={false}>
        {!door && (
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 75, damping: 10,  duration: 0.5 }}
            className="absolute top-0 bottom-0 flex justify-center items-center w-full overflow-hidden"
          >
            <div className="flex justify-between items-center gap-2 h-[28rem] w-[90%]">
              <div className="flex flex-col justify-between items-start h-full min-w-[20vw]">
                <Navigation />
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1.5 }}
                >
                  <Description />
                </motion.div>
              </div>
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
              >
                <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<BannerName />} />
                  <Route path="/projects" element={<ProjectsList />} />
                  <Route path="/contact" element={<Form />} />
                  <Route path="/info" element={<Info />} />
                </Routes>
              </motion.div>
            </div>
            <div draggable={false} className={`${theme === "dark" ? "" : "text-white"} absolute top-5 left-5 text-xl font-gabarito font-semibold tracking-wider duration-300 delay-500 select-none`}>
              ORYZA
              <br/>
              SATIVA
            </div>
            <div
              className={`${
                theme === "dark" ? "" : "text-white"
              } absolute flex items-center gap-6 bottom-5 left-5`}
            >
              <div
                onClick={() => dispatch(doorToggle())}
                className="w-6 h-6 bg-yellow border-l-2 border-b-2 border-blue opacity-75 hover:opacity-100 hover:border-l-4 hover:border-b-4 cursor-pointer"
              ></div>
              <button
                onClick={() => dispatch(toggleTheme())}
                className={`${
                  theme === "dark" ? "" : "text-white"
                } duration-300 delay-500`}
              >
                {theme === "dark" ? (
                  <i className="bi bi-sun-fill"></i>
                ) : (
                  <i className="bi bi-moon-fill"></i>
                )}
              </button>
              <p className="text-sm duration-300 delay-500 max-md:hidden"><i className="bi bi-c-circle"></i> ORYZA SATIVA</p>
            </div>
            {/* <ProjectDetail /> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home;
