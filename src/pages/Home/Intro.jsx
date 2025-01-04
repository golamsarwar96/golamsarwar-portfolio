import banner from "../../assets/bgBanner_enhanced.png";
import myImg from "../../assets/myIMGPortfolio.png";
const Intro = () => {
  return (
    <div
      id="intro"
      className="lg:max-w-screen-xl max-w-7xl min-h-screen lg:bg-cover md:bg-contain bg-contain bg-no-repeat flex justify-center items-center flex-col md:flex-row"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div>
        <h1 className="text-5xl">Banner</h1>
      </div>
      <div className="md:w-[500px] md:h-[500px] w-[150px] h-[200px] absolute ">
        <img src={myImg} alt="" />
      </div>
    </div>
  );
};

export default Intro;
