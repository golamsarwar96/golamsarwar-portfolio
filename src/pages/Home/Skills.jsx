import { useEffect, useState } from "react";
import bgImg from "../../assets/bgBanner_enhanced.png";
const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch("/tech.json")
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <div
      id="skills"
      style={{ backgroundImage: `url(${bgImg})` }}
      className="bg-no-repeat bg-cover"
    >
      <h1 className="text-center text-textPrimaryColor font-bold text-5xl my-10">
        {" "}
        Skills
      </h1>
      <div className="bg-lime-950 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center p-10 gap-10 w-[95%] mx-auto rounded-xl mb-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-full flex justify-center flex-col items-center gap-2"
          >
            <div>
              <img className="w-40 h-40 object-cover" src={skill.logo} alt="" />
            </div>
            <p className="text-center font-bold text-textColor">{skill.name}</p>
          </div>
        ))}
      </div>
      <div className="pb-10">
        <h1 className="text-center text-textPrimaryColor font-bold text-5xl my-10">
          {" "}
          Educational Qualification
        </h1>
        <div className="w-1/2 mx-auto bg-lime-950 text-center text-xl font-bold text-textSecondaryColor p-8">
          Completed Graduation in Computer Science and Engineering
          <br />
          <span className="text-textColor text-lg">
            From : National University
          </span>
          <br />
          <span className="text-textColor text-2xl">
            Obtained CGPA <span className="text-pink-500">3.66/4.0</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
