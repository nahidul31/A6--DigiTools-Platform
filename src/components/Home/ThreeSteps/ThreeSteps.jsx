import img1 from "/img/user.png";
import img2 from "/img/package.png";
import img3 from "/img/rocket.png";
const ThreeSteps = () => {
  return (
    <div className="text-center p-10 lg:px-30">
      <h1 className="text-4xl font-bold">Get Started In 3 Steps </h1>
      <p className="mt-14">
        Start using premium digital tools in minutes, not hours
      </p>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20  mt-10">
        {/* card  1 */}
        <div className="shadow-xl p-5 rounded-3xl">
          <div className=" flex justify-end">
            <span className="bg-violet-500 w-8 h-8 flex items-center justify-center text-white rounded-full text-sm">
              01
            </span>
          </div>
          <div className="p-7 space-y-4 flex flex-col justify-center items-center">
            <div className="  bg-violet-200 w-20 h-20 rounded-full p-4  r">
              <img src={img1} alt="" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Create Account</h1>
              <p>
                Sign up for free in seconds. No credit card required to get
                started.
              </p>
            </div>
          </div>
        </div>
        {/* card  2---------------- */}
        <div className="shadow-xl p-5 rounded-3xl">
          <div className=" flex justify-end">
            <span className="bg-violet-500 w-8 h-8 flex items-center justify-center text-white rounded-full text-sm">
              02
            </span>
          </div>
          <div className="p-7 space-y-4 flex flex-col justify-center items-center">
            <div className="  bg-violet-200 w-20 h-20 rounded-full p-4  r">
              <img src={img2} alt="" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Choose Products</h1>
              <p>
                Browse our catalog and select the tools that fit your needs.
              </p>
            </div>
          </div>
        </div>
        {/* card  3------------------ */}
        <div className="shadow-xl p-5 rounded-3xl">
          <div className=" flex justify-end">
            <span className="bg-violet-500 w-8 h-8 flex items-center justify-center text-white rounded-full text-sm">
              03
            </span>
          </div>
          <div className="p-7 space-y-4 flex flex-col justify-center items-center">
            <div className="  bg-violet-200 w-20 h-20 rounded-full p-4  r">
              <img src={img3} alt="" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">Start Creating</h1>
              <p>Download and start using your premium tools immediately.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeSteps;
