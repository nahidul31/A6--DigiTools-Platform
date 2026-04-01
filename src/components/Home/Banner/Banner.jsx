import banner from "../../../assets/img/banner.png";
import playBtn from "../../../assets/img/Play.png";
const Banner = () => {
  return (
    <div>
      <div className="hero  lg:mt-20   p-10  ">
        <div className=" flex flex-col justify-items-center  lg:flex-row-reverse  lg:gap-36 ">
          <div>
            {" "}
            <img src={banner} className="lg:max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div className="  pt-10 md:pt-20 text-center md:text-left">
            <div className="badge badge-soft badge-primary p-3 px-5 rounded-3xl ">
              <span class="relative flex size-2">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400 opacity-75"></span>
                <span class="relative inline-flex size-2 rounded-full bg-violet-500"></span>
              </span>{" "}
              New: AI-Powered Tools Available
            </div>
            <h1 className=" text-4xl sm:text-6xl font-bold mt-3">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="py-6 text-gray-500">
              Access premium AI tools, design assets, templates, and
              productivity <br></br>software—all in one place. Start creating
              faster today.
            </p>
            <div className="space-x-3">
              <button className="btn rounded-3xl bg-linear-to-r from-[#642ef7] to-[#9116fa] text-white">
                Explore Products
              </button>
              <button className="btn btn-outline btn-primary rounded-3xl">
                <img src={playBtn} alt="" srcset="" /> Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row bg-linear-to-r from-[#642ef7] to-[#9116fa] text-white justify-center md:gap-20 items-center p-15 my-10 text-center">
        <div>
          <h1 className="text-5xl font-bold">50k +</h1>
          <p className="text-gray-300">Active users</p>
        </div>
        <div className="divider divider-vertical md:divider-horizontal before:bg-gray-300 after:bg-gray-300"></div>
        <div>
          <h1 className="text-5xl font-bold">200+</h1>
          <p className="text-gray-300">Premium Tools</p>
        </div>
        <div className="divider divider-vertical md:divider-horizontal before:bg-gray-300 after:bg-gray-300"></div>
        <div>
          <h1 className="text-5xl font-bold">4.9</h1>
          <p className="text-gray-300"> Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
