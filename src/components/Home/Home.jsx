import { Suspense } from "react";
import Navbar from "../layout/Navbar/Navbar";
import Banner from "./Banner/Banner";
import DigitalTools from "./DigitalTools/DigitalTools";

const url = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
};

const Home = () => {
  const urlPromise = url();
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Banner></Banner>
        <Suspense
          fallback={
            <span className="loading min-h-screen loading-spinner text-primary"></span>
          }
        >
          <DigitalTools urlPromise={urlPromise}></DigitalTools>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
