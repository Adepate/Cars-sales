// import React, { useRef, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper/modules";

// const Slider = () => {
//   return (
//     <div>
//       <Swiper
//         pagination={{
//           dynamicBullets: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         {/* first-slide */}
//         <SwiperSlide>
//           <div className="grid grid-cols-4 gap-4 mt-6 mx-8 ">
//             {/* CARD 1 */}
//             <div className="flex flex-col rounded shadow-2xl">
//               <img src="./image.png" alt="" />
//               <h3 className="mx-4 font-bold text-xl mt-4">Tesla Model X</h3>
//               <p className="mx-4 font-medium ">Automatic</p>
//               <p className="font-bold text-xl px-4 mt-4 mb-4">
//                 $150 / <span>day</span>
//               </p>
//               <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//                 Rent Now
//               </button>
//             </div>

//             {/* CARD 2 */}
//             <div className="flex flex-col rounded shadow-2xl">
//               <img src="./image.png" alt="" />
//               <h3 className="px-4 font-bold text-xl mt-4">Tesla Model X</h3>
//               <p className="px-4 font-medium ">Automatic</p>
//               <p className="font-bold text-xl px-4 mt-4 mb-4">
//                 $150 / <span>day</span>
//               </p>
//               <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//                 Rent Now
//               </button>
//             </div>

//             {/* CARD 3 */}
//             <div className="flex flex-col rounded shadow-2xl">
//               <img src="./image.png" alt="" />
//               <h3 className="px-4 font-bold text-xl mt-4">Tesla Model X</h3>
//               <p className="px-4 font-medium ">Automatic</p>
//               <p className="font-bold text-xl px-4 mt-4 mb-4">
//                 $150 / <span>day</span>
//               </p>
//               <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//                 Rent Now
//               </button>
//             </div>

//             {/* CARD 4 */}
//             <div className="flex flex-col rounded shadow-2xl">
//               <img src="./image.png" alt="" />
//               <h3 className="px-4 font-bold text-xl mt-4">Tesla Model X</h3>
//               <p className="px-4 font-medium ">Automatic</p>
//               <p className="font-bold text-xl px-4 mt-4 mb-4">
//                 $150 / <span>day</span>
//               </p>
//               <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//                 Rent Now
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>



//         {/* second-slide */}
//         <SwiperSlide>
//           <div className="grid grid-cols-4 gap-4 mt-6 mx-8 ">
//             {/* CARD 1 */}
//             <div className="flex flex-col rounded shadow-2xl">
//               <img src="./image.png" alt="" />
//               <h3 className="mx-4 font-bold text-xl mt-4">Tesla Model X</h3>
//               <p className="mx-4 font-medium ">Automatic</p>
//               <p className="font-bold text-xl px-4 mt-4 mb-4">
//                 $150 / <span>day</span>
//               </p>
//               <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//                 Rent Now
//               </button>
//             </div>

//             {/* CARD 2 */}
//             <div className="flex flex-col rounded shadow-2xl">
//               <img src="./image.png" alt="" />
//               <h3 className="px-4 font-bold text-xl mt-4">Tesla Model X</h3>
//               <p className="px-4 font-medium ">Automatic</p>
//               <p className="font-bold text-xl px-4 mt-4 mb-4">
//                 $150 / <span>day</span>
//               </p>
//               <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//                 Rent Now
//               </button>
//             </div>

//             {/* CARD 3 */}
//             <div className="flex flex-col rounded shadow-2xl">
//               <img src="./image.png" alt="" />
//               <h3 className="px-4 font-bold text-xl mt-4">Tesla Model X</h3>
//               <p className="px-4 font-medium ">Automatic</p>
//               <p className="font-bold text-xl px-4 mt-4 mb-4">
//                 $150 / <span>day</span>
//               </p>
//               <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//                 Rent Now
//               </button>
//             </div>

//             {/* CARD 4 */}
//             <div className="flex flex-col rounded shadow-2xl">
//               <img src="./image.png" alt="" />
//               <h3 className="px-4 font-bold text-xl mt-4">Tesla Model X</h3>
//               <p className="px-4 font-medium ">Automatic</p>
//               <p className="font-bold text-xl px-4 mt-4 mb-4">
//                 $150 / <span>day</span>
//               </p>
//               <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//                 Rent Now
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>

//         {/* Third-slide */}
//         <SwiperSlide>
//           <div className="grid grid-cols-4 gap-4 mt-6 mx-8 ">
//             {/* CARD 1 */}
//             <div className="flex flex-col rounded shadow-2xl">
//               <img src="./image.png" alt="" />
//               <h3 className="mx-4 font-bold text-xl mt-4">Tesla Model X</h3>
//               <p className="mx-4 font-medium ">Automatic</p>
//               <p className="font-bold text-xl px-4 mt-4 mb-4">
//                 $150 / <span>day</span>
//               </p>
//               <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//                 Rent Now
//               </button>
//             </div>

//             {/* CARD 2 */}
//             <div className="flex flex-col rounded shadow-2xl">
//               <img src="./image.png" alt="" />
//               <h3 className="px-4 font-bold text-xl mt-4">Tesla Model X</h3>
//               <p className="px-4 font-medium ">Automatic</p>
//               <p className="font-bold text-xl px-4 mt-4 mb-4">
//                 $150 / <span>day</span>
//               </p>
//               <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//                 Rent Now
//               </button>
//             </div>

//             {/* CARD 3 */}
//             <div className="flex flex-col rounded shadow-2xl">
//               <img src="./image.png" alt="" />
//               <h3 className="px-4 font-bold text-xl mt-4">Tesla Model X</h3>
//               <p className="px-4 font-medium ">Automatic</p>
//               <p className="font-bold text-xl px-4 mt-4 mb-4">
//                 $150 / <span>day</span>
//               </p>
//               <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//                 Rent Now
//               </button>
//             </div>

//             {/* CARD 4 */}
//             <div className="flex flex-col rounded shadow-2xl">
//               <img src="./image.png" alt="" />
//               <h3 className="px-4 font-bold text-xl mt-4">Tesla Model X</h3>
//               <p className="px-4 font-medium ">Automatic</p>
//               <p className="font-bold text-xl px-4 mt-4 mb-4">
//                 $150 / <span>day</span>
//               </p>
//               <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//                 Rent Now
//               </button>
//             </div>
//           </div>
//         </SwiperSlide>


//         {/* Fourth-slide */}
//         <SwiperSlide >
//           <div className="grid grid-cols-4 gap-4 mt-6 mx-8 ">
//             {/* CARD 1 */}
//           <div className="flex flex-col rounded shadow-2xl">
//             <img src="./image.png" alt="" />
//             <h3 className="mx-4 font-bold text-xl mt-4">Tesla Model X</h3>
//             <p className="mx-4 font-medium ">Automatic</p>
//             <p className="font-bold text-xl px-4 mt-4 mb-4">
//               $150 / <span>day</span>
//             </p>
//             <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//               Rent Now
//             </button>
//           </div>

//           {/* CARD 2 */}
//           <div className="flex flex-col rounded shadow-2xl">
//             <img src="./image.png" alt="" />
//             <h3 className="px-4 font-bold text-xl mt-4">Tesla Model X</h3>
//             <p className="px-4 font-medium ">Automatic</p>
//             <p className="font-bold text-xl px-4 mt-4 mb-4">
//               $150 / <span>day</span>
//             </p>
//             <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//               Rent Now
//             </button>
//           </div>

//           {/* CARD 3 */}
//           <div className="flex flex-col rounded shadow-2xl">
//             <img src="./image.png" alt="" />
//             <h3 className="px-4 font-bold text-xl mt-4">Tesla Model X</h3>
//             <p className="px-4 font-medium ">Automatic</p>
//             <p className="font-bold text-xl px-4 mt-4 mb-4">
//               $150 / <span>day</span>
//             </p>
//             <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//               Rent Now
//             </button>
//           </div>

//           {/* CARD 4 */}
//           <div className="flex flex-col rounded shadow-2xl">
//             <img src="./image.png" alt="" />
//             <h3 className="px-4 font-bold text-xl mt-4">Tesla Model X</h3>
//             <p className="px-4 font-medium ">Automatic</p>
//             <p className="font-bold text-xl px-4 mt-4 mb-4">
//               $150 / <span>day</span>
//             </p>
//             <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//               Rent Now
//             </button>
//           </div>
//           </div>
//         </SwiperSlide>




//         {/* Fifth-slider */}
//         <SwiperSlide>
//          <div className="grid grid-cols-4 gap-4 mt-6 mx-8 ">
//              {/* CARD 1 */}
//           <div className="flex flex-col rounded shadow-2xl">
//             <img src="./image.png" alt="" />
//             <h3 className="mx-4 font-bold text-xl mt-4">Tesla Model X</h3>
//             <p className="mx-4 font-medium ">Automatic</p>
//             <p className="font-bold text-xl px-4 mt-4 mb-4">
//               $150 / <span>day</span>
//             </p>
//             <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//               Rent Now
//             </button>
//           </div>

//           {/* CARD 2 */}
//           <div className="flex flex-col rounded shadow-2xl">
//             <img src="./image.png" alt="" />
//             <h3 className="px-4 font-bold text-xl mt-4">Tesla Model X</h3>
//             <p className="px-4 font-medium ">Automatic</p>
//             <p className="font-bold text-xl px-4 mt-4 mb-4">
//               $150 / <span>day</span>
//             </p>
//             <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//               Rent Now
//             </button>
//           </div>

//           {/* CARD 3 */}
//           <div className="flex flex-col rounded shadow-2xl">
//             <img src="./image.png" alt="" />
//             <h3 className="px-4 font-bold text-xl mt-4">Tesla Model X</h3>
//             <p className="px-4 font-medium ">Automatic</p>
//             <p className="font-bold text-xl px-4 mt-4 mb-4">
//               $150 / <span>day</span>
//             </p>
//             <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//               Rent Now
//             </button>
//           </div>

//           {/* CARD 4 */}
//           <div className="flex flex-col rounded shadow-2xl">
//             <img src="./image.png" alt="" />
//             <h3 className="px-4 font-bold text-xl mt-4">Tesla Model X</h3>
//             <p className="px-4 font-medium ">Automatic</p>
//             <p className="font-bold text-xl px-4 mt-4 mb-4">
//               $150 / <span>day</span>
//             </p>
//             <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
//               Rent Now
//             </button>
//           </div>
//          </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Slider;



import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const cars = [
  { id: 1, name: "Tesla Model X", price: "$150 / day", img: "./image.png" },
  { id: 2, name: "Tesla Model X", price: "$150 / day", img: "./image.png" },
  { id: 3, name: "Tesla Model X", price: "$150 / day", img: "./image.png" },
  { id: 4, name: "Tesla Model X", price: "$150 / day", img: "./image.png" },
  { id: 5, name: "Tesla Model X", price: "$150 / day", img: "./image.png" },
  { id: 6, name: "Tesla Model X", price: "$150 / day", img: "./image.png" },
  { id: 7, name: "Tesla Model X", price: "$150 / day", img: "./image.png" },
  { id: 8, name: "Tesla Model X", price: "$150 / day", img: "./image.png" }
];

const Slider = () => {
  return (
    <div className="mx-8 mt-6 mb-24">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <div className="flex flex-col rounded shadow-2xl mb-14">
              <img src={car.img} alt="" />
              <h3 className="px-4 font-bold text-xl mt-4">{car.name}</h3>
              <p className="px-4 font-medium">Automatic</p>
              <p className="font-bold text-xl px-4 mt-4 mb-4">{car.price}</p>
              <button className="bg-blue-900 text-white mx-4 py-2 mb-4 rounded-lg font-medium">
                Rent Now
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
