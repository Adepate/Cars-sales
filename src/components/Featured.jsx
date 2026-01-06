import React from "react";

import { IoMdSearch } from "react-icons/io";
import { MdOutlineLock } from "react-icons/md";
import { BsKey } from "react-icons/bs";
import Slider from "./Slider";

const Featured = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold text-3xl mb-8">How it Works</h1>
      </div>
      <div className="grid grid-cols-3 text-center items-start  gap-8 mx-8 ">
        <div className="flex flex-col items-center justify-center bg-amber-600 h-52 rounded shadow-2xl">
          <IoMdSearch size={40} />
          <h3 className="font-bold text-2xl mt-4">1. Search and Find</h3>
          <p className="px-8 mt-2">
            Easy find the perfect car for your needs with our powerful search
            filters.
          </p>
        </div>

        <div className="flex flex-col  items-center  justify-center h-52 bg-amber-600 rounded shadow-2xl">
          <MdOutlineLock size={40} />
          <h3 className="font-bold text-2xl mt-4">2. Book or Buy Securely</h3>
          <p className="px-8 mt-2">
            Complete your transaction with confidence through our secure
            platform.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center h-52 bg-amber-500 rounded shadow-2xl">
          <BsKey size={40} />
          <h3 className="font-bold text-2xl mt-4">3. Drive Away Happy</h3>
          <p className="px-8 mt-2">
            Pick up your car and enjoy the ride, whether you're renting or
            buying.
          </p>
        </div>
      </div>

      <div className="text-center mt-20 mb-8">
        <h1 className="font-bold text-3xl ">Feautured Listings</h1>
      </div>

      {/* Slider */}
      <Slider />
    </div>
  );
};

export default Featured;
