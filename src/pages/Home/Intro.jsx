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
        <div className="lg:p-20 md:p-14 p-4 absolute lg:top-64 lg:left-96 md:top-32 md:space-y-3 space-y-1 top-[84px]">
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
        <div className="absolute top-16 right-10 lg:top-24 lg:right-[420px] md:top-20">
          <img
            className="w-[100px] lg:w-[350px] md:w-[200px]"
            src={myImg}
            alt=""
          />
        </div>
      </div>
      {/* <div className=" text-textPrimaryColor ">
        <h1 className="md:text-5xl">Front End Web Developer</h1>
        <p className="md:text-2xl">
          Your Vision, My Code – A Perfect Web Symphony.
        </p>
        <h1 className="md:text-5xl">Banner</h1>
      </div>
      <div className="">
        <img
          className="absolute lg:right-[450px] lg:-top-20 md:right-20 md:top-7 md:w-[250px] top-0 right-12 w-[150px]  "
          src={myImg}
          alt=""
        />
      </div> */}
    </div>
  );
};

export default Intro;
