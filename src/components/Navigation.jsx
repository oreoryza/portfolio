import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProjectPreview } from "../redux/slices/projectSlice";

import { motion } from "framer-motion";

const Navigation = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  return (
    <motion.div
      className={`font-gabarito ${
        theme === "dark" ? "" : "text-white"
      } flex flex-col gap-0.5 text-xl select-none duration-300 delay-500`}
    >
      <Link
        to="/"
        draggable={false}
        onClick={() => dispatch(setProjectPreview(""))}
        className={
          location.pathname === "/"
            ? "text-blue line-through"
            : "hover:text-blue duration-300 max-w-fit"
        }
      >
        home
      </Link>
      <Link
        to="/projects"
        draggable={false}
        className={
          location.pathname === "/projects"
            ? "text-blue line-through"
            : "hover:text-blue duration-300 max-w-fit"
        }
      >
        projects
      </Link>
      <Link
        to="/info"
        draggable={false}
        onClick={() => dispatch(setProjectPreview(""))}
        className={
          location.pathname === "/info"
            ? "text-blue line-through"
            : "hover:text-blue duration-300 max-w-fit"
        }
      >
        info
      </Link>
      <Link
        to="/contact"
        draggable={false}
        onClick={() => dispatch(setProjectPreview(""))}
        className={
          location.pathname === "/contact"
            ? "text-blue line-through"
            : "hover:text-blue duration-300 max-w-fit"
        }
      >
        contact
      </Link>
    </motion.div>
  );
};

export default Navigation;
