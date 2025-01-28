import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProject } from "../redux/slices/projectSlice";

const ProjectDetail = () => {
  const { sku } = useParams();
  const dispatch = useDispatch();
  const {project} = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(setProject(sku));
  }, [sku, dispatch]);
  return (
    <div className="fixed right-0 w-screen h-screen bg-white translate-x-12 translate-y-24 p-4 flex flex-col gap-4 overflow-y-scroll">
      <h1 className="font-gabarito font-medium text-7xl">{project.name}</h1>
        <div className="w-[30%] min-w-64 max-w-96">
            <img src={project.img} alt="" />
        </div>
    </div>
  );
};

export default ProjectDetail;
