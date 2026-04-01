import { useState } from "react";

const Tools = ({
  tool,
  setSelectedCarts,
  selectedCart,
  totalCost,
  setTotalCost,
}) => {
  const { id, name, description, price, tagType, features, icon, period } =
    tool;
  //   console.log(tool);

  const [buyOp, setBuyOp] = useState(false);
  const handleBuyNow = () => {
    const checkDuplicate = selectedCart.some((sl) => sl.id === tool.id);
    if (checkDuplicate) {
      alert("already added");
      return;
    }
    // console.log(checkDuplicate);

    const newCart = [...selectedCart, tool];
    const updateTotalCost = totalCost + tool.price;
    setTotalCost(updateTotalCost);

    setSelectedCarts(newCart);
    // setSelectedItems(newCart.length);
    setBuyOp(true);
  };
  return (
    <div className="hover-3d">
      <div className="card  bg-base-100 shadow-sm h-full  ">
        <div className="card-body flex flex-col  ">
          <div className=" flex justify-end">
            <span
              className={`badge badge-xs  ${
                tagType === "Best Seller"
                  ? " badge-soft badge-warning"
                  : tagType === "Popular"
                    ? "badge-soft badge-info"
                    : "badge-soft badge-success"
              } `}
            >
              {tagType}
            </span>
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
            <button
              className={`btn  btn-block  text-white rounded-2xl ${buyOp ? "bg-green-400" : "bg-linear-to-r from-[#642ef7] to-[#9116fa]"} `}
            >
              {buyOp ? "Added Cart" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
