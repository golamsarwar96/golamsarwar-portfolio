import { FaCamera, FaCode, FaGraduationCap, FaHeart } from "react-icons/fa";
import bgImg from "../../assets/bgBanner_enhanced.png";
const AboutMe = () => {
  return (
    <div
      id="aboutMe"
      className="relative mt-16 px-6 pb-12 bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h1 className="text-textPrimaryColor text-center font-bold text-5xl mb-10">
        About Me
      </h1>
      <div className="bg-lime-950 p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-textColor mb-4 text-center">
          Hi, I'm{" "}
          <span className="text-textPrimaryColor">MD. Golam Sarwar</span> – A
          Passionate Web Developer from Dhaka!
        </h1>

        <div className="space-y-6 text-textSecondaryColor leading-relaxed">
          <div className="flex items-start space-x-3">
            <FaGraduationCap className="w-6 text-textPrimaryColor h-6 mt-1 flex-shrink-0" />
            <p className="text-lg">
              I am a Computer Science and Engineering graduate from Shaikh
              Burhanuddin Post Graduate College with a strong foundation in
              problem-solving and software development.
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <FaCode className="w-6 h-6 text-textPrimaryColor mt-1 flex-shrink-0" />
            <p className="text-lg">
              My journey into web development began six months ago, and since
              then, I've been dedicated to mastering modern web technologies,
              including HTML, CSS, JavaScript, React, Tailwind CSS, Express.js,
              MongoDB, and Firebase.
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <FaHeart className="w-6 h-6 text-textPrimaryColor mt-1 flex-shrink-0" />
            <p className="text-lg">
              Before diving into web development, I explored basic
              problem-solving during my university days and collaborated on a
              machine learning project, which strengthened my logical thinking
              and analytical skills. Now, I focus on building dynamic,
              responsive, and user-friendly web applications that deliver
              seamless experiences.
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <FaCamera className="w-6 h-6 text-textPrimaryColor mt-1 flex-shrink-0" />
            <p className="text-lg">
              Beyond coding, I have a deep love for capturing the beauty of
              nature through photography, which inspires my creative approach to
              design and development. I'm always eager to learn, grow, and take
              on new challenges that allow me to expand my skill set and
              contribute meaningfully to the tech world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
