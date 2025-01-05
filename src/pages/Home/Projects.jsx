import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div id="project">
      <h1 className="text-5xl text-textPrimaryColor font-bold mt-10 text-center">
        Check Out{" "}
        <span className="px-6 py-1 text-black bg-textPrimaryColor rounded-full">
          {projects.length}
        </span>{" "}
        Of My Best Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center mt-10">
        {projects.map((project) => (
          <Link
            to={`/${project.project_id}`}
            className="flex justify-center items-center flex-col gap-3"
          >
            <div>
              <img
                className="rounded-full w-64 h-64 object-cover"
                src={project.projectImage}
                alt=""
              />
            </div>
            <div>
              <h1 className="text-textPrimaryColor text-2xl">
                {project.projectName}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
