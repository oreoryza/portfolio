import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Description = () => {
  const location = useLocation();
  const theme = useSelector((state) => state.theme.theme);
  const {projectPreview} = useSelector((state) => state.projects)
  const [desc, setDesc] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setDesc(
        "I loves design and programming, which inspired my journey into frontend development. I'm eager to contribute my skills and knowledge as part of a dynamic team of innovators and problem solvers."
      );
    } else if (location.pathname === "/projects"){
        setDesc(`${projectPreview}`);
    } else if (location.pathname === "/contact"){
        setDesc("Anything. Anytime. Anywhere. ");
    }
  }, [location.pathname, projectPreview]);

  return (
    <div className="font-gabarito lg:translate-x-16">
      <p
        className={`${
          theme === "dark" ? "" : "text-white"
        } md:max-w-md font-small text-xs md:text-sm leading-5 duration-300 delay-500`}
      >
        {desc}
      </p>
    </div>
  );
};

export default Description;
