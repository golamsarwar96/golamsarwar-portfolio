import { Link } from "react-router-dom";
import banner from "../../assets/bgBanner_enhanced.png";
import myImg from "../../assets/myImgFinal.png";
const Intro = () => {
  return (
    <div
      id="intro"
      className="lg:max-w-screen-xl md:max-w-7xl min-h-screen lg:bg-contain md:bg-contain bg-contain bg-no-repeat gap-[500px] flex items-center md:flex-row"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="flex ">
        <div className="lg:p-20 md:p-14 p-4 absolute lg:top-52  md:top-32 md:space-y-3 space-y-1 top-[84px]">
          <h1 className="lg:text-5xl md:text-3xl text-xl text-textPrimaryColor font-bold ">
            Front End Web Developer
          </h1>
          <p className="lg:text-2xl md:text-base text-xs text-textSecondaryColor">
            Your Vision, My Code – A Perfect Web Symphony.
          </p>
          <p className="lg:text-2xl md:text-base text-xs text-textSecondaryColor">
            I Create Scalable & Interactive Websites{" "}
          </p>
          <Link to="https://golamsarwar-cv.tiiny.site/">
            <button className="font-semibold rounded-3xl bg-textPrimaryColor text-black md:px-5 md:py-3 px-2 py-1 my-3">
              Download Resume
            </button>
          </Link>
        </div>
        <div className="absolute top-16 right-10 lg:top-[103px] lg:right-72 md:top-20">
          <img
            className="w-[100px] lg:w-[300px] md:w-[200px]"
            src={myImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
