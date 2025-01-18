import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProjectPreview } from "../redux/slices/projectSlice";

const ProjectsList = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  return (
    <>
    <div className="gap-4 w-[35vw] min-w-64 pr-4 border-r-4 border-yellow/[.75]">
      <div className="w-full h-screen overflow-y-scroll bg-white flex flex-col gap-4 px-4 shadow-lg">
        {projects.map((project) => (
        <div href={project.url} target="_blank" rel="noopener noreferrer" key={project.id} draggable={false} onMouseEnter={() => dispatch(setProjectPreview(project.description))} onMouseOut={() => dispatch(setProjectPreview(""))} className="brightness-90 grayscale hover:brightness-100 hover:grayscale-0 duration-300">
          <img draggable={false} src={project.img} />
        </div>
        ))}
      </div>
    </div>
    <div className="fixed left-0 bottom-16 w-screen h-4 flex items-center border-y-4 border-blue -z-50 opacity-75">
    </div>
    </>
  );
};

export default ProjectsList;
