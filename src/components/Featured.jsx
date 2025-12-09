import React from "react";
import { IoMdSearch } from "react-icons/io";
import { MdOutlineLock } from "react-icons/md";
import { BsKey } from "react-icons/bs";

const Featured = () => {
  return (
    <div>
      <div className="text-center"><h1 className="font-bold text-3xl mb-8">How it Works</h1></div>
      <div className="grid grid-cols-3 text-center items-start  gap-8 mx-8 ">
        <div className="flex flex-col items-center justify-center bg-amber-600 h-52 rounded shadow-2xl">
          <IoMdSearch size={40} />
          <h3 className="font-bold text-2xl mt-4">1. Search and Find</h3>
          <p className="px-8 mt-2">Easy find the perfect car for your needs with our powerful search filters.</p>
        </div>

        <div className="flex flex-col  items-center  justify-center h-52 bg-amber-600 rounded shadow-2xl">
          <MdOutlineLock size={40} />
          <h3 className="font-bold text-2xl mt-4">2. Book or Buy Securely</h3>
          <p className="px-8 mt-2">Complete your transaction with confidence through our secure platform.</p>
        </div>

        <div className="flex flex-col items-center justify-center h-52 bg-amber-500 rounded shadow-2xl">
          <BsKey size={40} />
          <h3 className="font-bold text-2xl mt-4">3. Drive Away Happy</h3>
          <p className="px-8 mt-2">Pick up your car and enjoy the ride, whether you're renting or buying.</p>
        </div>
      </div>

      <div className="text-center mt-20 mb-8"><h1 className="font-bold text-3xl ">Feautured Listings</h1></div>

      <div className="grid grid-cols-4 gap-4 mt-6 mx-8 ">
        {/* CARD 1 */}
        <div className="flex flex-col rounded shadow-2xl">
          <img src="./image.png" alt="" />
          <h3 className="mx-4 font-bold text-xl">Tesla Model X</h3>
          <p className="mx-4 font-medium ">Automatic</p>
          <p className="font-bold text-xl px-4 mt-4 mb-4">$150 / <span>day</span></p>
          <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">Rent Now</button>
        </div>

        {/* CARD 2 */}
        <div className="flex flex-col rounded shadow-2xl">
          <img src="./image.png" alt="" />
          <h3 className="px-4 font-bold text-xl">Tesla Model X</h3>
          <p  className="px-4 font-medium " >Automatic</p>
          <p className="font-bold text-xl px-4 mt-4 mb-4">$150 / <span>day</span></p>
          <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium" >Rent Now</button>
        </div>

        {/* CARD 3 */}
        <div className="flex flex-col rounded shadow-2xl">
          <img src="./image.png" alt="" />
          <h3 className="px-4 font-bold text-xl">Tesla Model X</h3>
          <p  className="px-4 font-medium ">Automatic</p>
          <p className="font-bold text-xl px-4 mt-4 mb-4">$150 / <span>day</span></p>
          <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium" >Rent Now</button>
        </div>

        {/* CARD 4 */}
        <div className="flex flex-col rounded shadow-2xl">
          <img src="./image.png" alt="" />
          <h3 className="px-4 font-bold text-xl">Tesla Model X</h3>
          <p  className="px-4 font-medium ">Automatic</p>
          <p className="font-bold text-xl px-4 mt-4 mb-4">$150 / <span>day</span></p>
          <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium" >Rent Now</button>
        </div>

      </div>
    </div>
  );
};

export default Featured;
