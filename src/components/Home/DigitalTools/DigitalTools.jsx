import { use, useState } from "react";
import Tools from "./Tools";

const DigitalTools = ({ urlPromise }) => {
  const allTools = use(urlPromise);
  const [toolsBtn, setToolsBtn] = useState(true);
  const [selectedCart, setSelectedCarts] = useState([]);
  // console.log(allTools);
  const handleProductsBtn = () => {
    setToolsBtn(true);
  };
  const handleCartBtn = () => {
    setToolsBtn(false);
  };

  return (
    <div className="pt-10">
      <div className="flex flex-col justify-center items-center text-center w-1/3 mx-auto space-y-4">
        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
        <p>
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div className="flex items-center bg-base-200 rounded-full p-1 w-fit">
          <button
            onClick={() => handleProductsBtn()}
            className={`btn  rounded-full px-6 ${toolsBtn ? "btn-primary" : "btn-ghost"} `}
          >
            Products
          </button>
          <button
            onClick={() => handleCartBtn()}
            className={`btn rounded-full px-6  ${!toolsBtn ? "btn-primary" : "btn-ghost"}`}
          >
            Cart <span className="ml-1">(2)</span>
          </button>
        </div>
      </div>
      {/* load data -------- */}
      <div className=" p-20 px-30 grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {allTools.map((tool) => (
          <Tools
            tool={tool}
            key={tool.id}
            setSelectedCarts={setSelectedCarts}
            selectedCart={selectedCart}
          ></Tools>
        ))}
      </div>
    </div>
  );
};

export default DigitalTools;
