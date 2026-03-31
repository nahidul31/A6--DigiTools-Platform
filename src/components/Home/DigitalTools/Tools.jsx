import { useState } from "react";

const Tools = ({ tool, setSelectedCarts, selectedCart }) => {
  const { id, name, description, price, tag, tagType, features, icon, period } =
    tool;
  //   console.log(tool);
  const [buyOp, setBuyOp] = useState(false);
  const handleBuyNow = () => {
    const newCart = [...selectedCart, tool];
    setSelectedCarts(newCart);

    setBuyOp(true);
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-sm h-full ">
        <div className="card-body flex flex-col  ">
          <div className=" flex justify-end">
            <span className="badge badge-xs badge-warning ">{tagType}</span>
          </div>
          <div>
            <img src={icon} alt="" />
          </div>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className=" text-gray-500">{description}</p>
            <span className="font-bold text-2xl">${price}</span>/{period}
          </div>
          <ul className="mt-6 flex flex-col gap-2 text-xs grow">
            {features.map((feature, indx) => {
              return (
                <li key={indx}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 me-2 inline-block text-success"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{feature}</span>
                </li>
              );
            })}
          </ul>
          <div onClick={handleBuyNow} className="mt-6">
            {buyOp ? (
              <button className="btn  btn-block  text-white rounded-2xl bg-green-400">
                <span></span>Added to Cart
              </button>
            ) : (
              <button className="btn  btn-block  text-white rounded-2xl bg-linear-to-r from-[#642ef7] to-[#9116fa]">
                Buy Now
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
