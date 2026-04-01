import { Bounce, toast } from "react-toastify";

const SelectedCart = ({
  slcart,
  selectedCart,
  setSelectedCarts,
  totalCost,
  setTotalCost,
}) => {
  const { id, name, price, icon } = slcart;

  const handleRemovebtn = () => {
    const availableCart = selectedCart.filter((sl) => sl.id !== slcart.id);
    // console.log(availableCart);
    setSelectedCarts(availableCart);
    const updateCost = totalCost - slcart.price;
    setTotalCost(updateCost);
    toast.error("Removed Successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="bg-gray-100 p-8 rounded-2xl sm:flex justify-between items-center">
      <div className="flex  gap-5 items-center">
        <div className="bg-white p-5 rounded-full ">
          <img src={icon} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">{name}</h1>
          <p>${price}</p>
        </div>
      </div>
      <div className="  text-center mt-5 sm:mt-0 sm:block ">
        <span
          onClick={() => {
            handleRemovebtn();
          }}
          className="text-red-600 btn "
        >
          Remove
        </span>
      </div>
    </div>
  );
};

export default SelectedCart;
