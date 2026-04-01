import { ShoppingCart } from "lucide-react";
const Navbar = ({ selectedCart }) => {
  const links = (
    <>
      <li>Products</li>
      <li>Features</li>
      <li>Pricing</li>
      <li>Testimonials</li>
      <li>FAQ</li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start  ">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden  pr-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-3 shadow gap-3"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl md:text-3xl text-[#7a22f8] font-bold  ">
          DigiTools
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">{links}</ul>
      </div>
      <div className="navbar-end space-x-5">
        <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
          <div className="indicator flex gap-2 items-center">
            <ShoppingCart />
            <span>Login</span>
            {selectedCart.length > 0 ? (
              <span className="badge badge-sm indicator-item bg-red-500 text-white">
                {selectedCart.length}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>

        <a className="btn rounded-3xl bg-linear-to-r from-[#642ef7] to-[#9116fa] text-white">
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Navbar;
