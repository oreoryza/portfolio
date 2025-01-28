import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjectPreview } from "../redux/slices/projectSlice";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import { PiStarFourLight } from "react-icons/pi";

const ProjectsList = () => {
  const dispatch = useDispatch();
  const { projects, projectPreview } = useSelector((state) => state.projects);
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className="flex justify-between items-center w-full">
      <div
        className={`absolute top-0 w-full h-24 ${
          theme === "dark" ? "bg-white/[.85]" : "bg-[#0D0D0D]/[.85]"
        } z-40 duration-300`}
      ></div>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{
          duration: 1.2,
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
      >
        <Swiper
          direction={"vertical"}
          freeMode={true}
          modules={[FreeMode, Pagination]}
          className={`flex flex-col gap-8 h-32 ${
            theme === "dark" ? "" : "text-white"
          } duration-300`}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <Link to={`/projects/${project.sku}`}
                onMouseOver={() => dispatch(setProjectPreview(project.img))}
                onMouseOut={() => dispatch(setProjectPreview(""))}
                className="hover:opacity-50 transition-opacity duration-300 select-none"
              >
                #{index + 1}{" "}
                <span className="font-gabarito md:text-2xl text-xl">
                  {project.name} /{" "}
                </span>
                {project.date}
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <div
        className={`relative max-md:hidden size-96 p-2 border-2 ${
          projectPreview === "" ? "border-yellow" : "delay-300 border-blue"
        } rotate-x-45 duration-300 overflow-hidden`}
      >
        <AnimatePresence initial={false} mode="wait">
          <motion.img
            key={projectPreview}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.3 }}
            src={projectPreview}
            alt=""
          />
        </AnimatePresence>
        <div className="absolute left-0 w-full h-full flex justify-center items-center"><PiStarFourLight className="text-6xl text-blue"/></div>
      </div>
    </div>
  );
};

export default ProjectsList;
