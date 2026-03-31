import { use } from "react";

const DigitalTools = ({ urlPromise }) => {
  const urldatas = use(urlPromise);
  console.log(urldatas);
  return (
    <div className="pt-10">
      <div className="text-center w-1/3 mx-auto space-y-4">
        <h1 className="text-5xl font-bold">Premium Digital Tools</h1>
        <p>
          Choose from our curated collection of premium digital products
          designed to boost your productivity and creativity.
        </p>
        <div className="space-x-5">
          <button className="btn btn-soft btn-primary">Primary</button>
          <button className="btn btn-soft btn-primary">Primary</button>
        </div>
      </div>
    </div>
  );
};

export default DigitalTools;
