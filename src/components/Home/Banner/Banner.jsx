import banner from "../../../assets/img/banner.png";
const Banner = () => {
  return (
    <div>
      <div className="hero  mt-20 ">
        <div className=" flex flex-col justify-items-center lg:flex-row-reverse  gap-36 ">
          <div>
            {" "}
            <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
          <div className="  pt-20">
            <div className="badge badge-soft badge-primary">Primary</div>
            <h1 className="text-6xl font-bold mt-3">
              Supercharge Your <br /> Digital Workflow
            </h1>
            <p className="py-6 text-gray-500">
              Access premium AI tools, design assets, templates, and
              productivity <br></br>software—all in one place. Start creating
              faster today.
            </p>
            <div className="space-x-3">
              <button className="btn btn-primary">Explore Products</button>
              <button className="btn btn-primary">Explore Products</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-[#7a22f8] text-white justify-center gap-20 items-center p-15 my-10">
        <div>
          <h1 className="text-5xl font-bold">50k +</h1>
          <p className="text-gray-300">Active users</p>
        </div>
        <div className="divider divider-horizontal before:bg-gray-300 after:bg-gray-300"></div>
        <div>
          <h1 className="text-5xl font-bold">200+</h1>
          <p className="text-gray-300">Premium Tools</p>
        </div>
        <div className="divider divider-horizontal before:bg-gray-300 after:bg-gray-300"></div>
        <div>
          <h1 className="text-5xl font-bold">4.9</h1>
          <p className="text-gray-300">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
