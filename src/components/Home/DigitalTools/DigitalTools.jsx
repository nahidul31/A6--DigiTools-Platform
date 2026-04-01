import { use, useState } from "react";
import Tools from "./Tools";
import SelectedCart from "./SelectedCart";
// handleCntNumberOfSelectedCart,
const DigitalTools = ({ urlPromise, setSelectedCarts, selectedCart }) => {
  const allTools = use(urlPromise);
  const [toolsBtn, setToolsBtn] = useState(true);
  // const [selectedCart, setSelectedCarts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  const handleProductsBtn = () => {
    setToolsBtn(true);
  };
  const handleCartBtn = () => {
    setToolsBtn(false);
  };

  return (
    <div className=" p-6 lg:pt-10">
      <div className="flex flex-col justify-center items-center text-center lg:w-1/3 mx-auto space-y-4">
        <h1 className="text-4xl lg:text-5xl font-bold">
          Premium Digital Tools
        </h1>
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
            Cart <span className="ml-1">({selectedCart.length})</span>
          </button>
        </div>
      </div>
      {/* load data -------- */}
      <div>
        {toolsBtn ? (
          <div className="  lg:p-20 lg:px-30 grid sm:grid-cols-2 lg:grid-cols-3 gap-16">
            {allTools.map((tool) => (
              <Tools
                totalCost={totalCost}
                setTotalCost={setTotalCost}
                tool={tool}
                key={tool.id}
                setSelectedCarts={setSelectedCarts}
                selectedCart={selectedCart}
              ></Tools>
            ))}
          </div>
        ) : (
          <div className=" lg:p-26 pt-10 ">
            <h1 className="text-3xl font-bold text-center">Selected Cart</h1>
            <div className="mt-6 space-y-5">
              {selectedCart.map((slcart) => {
                return (
                  <SelectedCart
                    totalCost={totalCost}
                    setTotalCost={setTotalCost}
                    setSelectedCarts={setSelectedCarts}
                    selectedCart={selectedCart}
                    key={slcart.id}
                    slcart={slcart}
                  ></SelectedCart>
                );
              })}
            </div>
            <div className="flex justify-between p-10 pt-5 pb-3">
              <p className="font-semibold">Total :</p>
              <p className="font-bold text-xl">${totalCost}</p>
            </div>
            <button
              onClick={() => {
                setSelectedCarts([]);
                setTotalCost(0);
              }}
              className="btn bg-linear-to-r from-[#642ef7] to-[#9116fa] btn-block text-white rounded-2xl"
            >
              Proceed Checkut
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalTools;
