import { Suspense, use, useState } from "react";
import Navbar from "../layout/Navbar/Navbar";
import Banner from "./Banner/Banner";
import DigitalTools from "./DigitalTools/DigitalTools";

const url = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};
const urlPromise = url();
const Home = () => {
  // const [totalSelcetedCnt, setTotalSelectedCnt] = useState(0);
  const [selectedCart, setSelectedCarts] = useState([]);

  return (
    <div>
      <Navbar selectedCart={selectedCart}></Navbar>
      <div>
        <Banner></Banner>
        <Suspense
          fallback={
            <span className="loading min-h-screen loading-spinner text-primary"></span>
          }
        >
          <DigitalTools
            selectedCart={selectedCart}
            setSelectedCarts={setSelectedCarts}
            urlPromise={urlPromise}
          ></DigitalTools>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
