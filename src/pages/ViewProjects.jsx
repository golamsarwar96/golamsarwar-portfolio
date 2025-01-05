import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { FaLink } from "react-icons/fa";

const ViewProjects = () => {
  const [project, setProject] = useState(null);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch(`/projects.json`)
      .then((res) => res.json())
      .then((data) => {
        const singleProject = data.find((project) => project.project_id === id);
        setProject(singleProject);
        console.log(singleProject);
      });
  }, [id]);
  return (
    <div className="mt-28">
      <h1 className="text-6xl text-center font-bold  text-textColor my-10">
        {project?.projectName}
      </h1>
      <div>
        <img src={project?.projectImage} alt="" />
      </div>
      <div className="mt-10">
        <div>
          <span className="text-textColor text-3xl font-bold px-10 mt-10">
            Description :{" "}
          </span>
          <p className="text-lg text-left px-10 font-bold  text-textColor mt-3 mb-10">
            {project?.description}
          </p>
        </div>
        <div>
          <span className="text-textColor text-3xl font-bold px-10 mt-10">
            Difficulties & Improvement:{" "}
          </span>
          <h1 className="text-lg text-left px-10 font-bold  text-textColor mt-3 mb-10">
            {project?.difficulties}
          </h1>
        </div>
        <div>
          <span className="text-textColor text-3xl font-bold px-10 mt-10">
            Technologies:{" "}
          </span>
          <h1 className="text-lg text-left px-10 font-bold  text-textPrimaryColor mt-3 mb-10">
            {project?.technologies}
          </h1>
        </div>
        <span className="px-10 text-lg text-textColor font-bold">
          Check Out My Work
        </span>
        <div className="flex">
          <Link to={`${project?.githubLink}`} className="mt-2">
            <BsGithub className="ml-10 mt-2 text-5xl text-textColor">
              {" "}
            </BsGithub>
          </Link>
          <Link to={`${project?.projectLink}`} className="px-10 mt-2 mb-10">
            <FaLink className=" mt-2 text-5xl text-textColor"></FaLink>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewProjects;
