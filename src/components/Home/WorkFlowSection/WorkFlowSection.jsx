const WorkFlowSection = () => {
  return (
    <div className="p-10 py-15 text-center lg:p-30 bg-linear-to-r from-[#642ef7] to-[#9116fa] text-white flex flex-col justify-center items-center space-y-3">
      <h1 className="text-3xl lg:text-6xl font-bold">
        Ready To Transform Your Workflow?
      </h1>
      <p className="  lg:w-1/3 text-center text-gray-200">
        Join thousands of professional who are already using Digitools to work
        smarter. Start your free trial today.
      </p>
      <div className="space-x-3 mt-5">
        <button className="btn rounded-3xl bg-white text-violet-500">
          Explore Products
        </button>
        <button className="btn btn-outline  rounded-3xl text-white">
          View Pricing
        </button>
      </div>
      <p className="text-gray-200">
        14-day free trial • No credit card required • Cancel anytime
      </p>
    </div>
  );
};

export default WorkFlowSection;
