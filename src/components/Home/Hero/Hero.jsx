import React from "react";
import img1 from "../../../assets/hero1.jpg"
import img2 from "../../../assets/hero2.jpg"
import img3 from "../../../assets/hero3.jpg"
import img4 from "../../../assets/hero4.jpg"

const heroData = [
  {
    image: img1,
    title: "Find Your Perfect Ride Today",
    subtitle: "Over 1000+ New Cars Available Here",
    description: "Discover a wide selection of new and pre-owned vehicles from top manufacturers. Start your search now and drive home happy.",
  },
  {
    image: img2,
    title: "Luxury Rentals for Any Occasion",
    subtitle: "Book Your Dream Car Instantly",
    description: "Whether it's a weekend getaway or a special event, our premium rental fleet has the perfect high-end vehicle for you.",
  },
  {
    image: img3,
    title: "Need to Sell? Get a Quick Quote",
    subtitle: "Sell Your Car Hassle-Free",
    description: "Get a fair market valuation and sell your car quickly and securely. Free instant online valuation with no obligation.",
  },
  {
    image: img4,
    title: "Financing Made Simple",
    subtitle: "Affordable Loans and Leasing Options",
    description: "Explore flexible financing plans tailored to your budget. Get pre-approved online in minutes without affecting your credit score.",
  },
];

const Hero = () => {
    
  return (
    <div className="h-screen bg-[url('./././assets/hero2.jpg')] bg-cover bg-right bg-no-repeat text-white px-6">
      <div className="h-screen flex flex-col justify-center md:flex-row items-center ">
        {/*content section*/}
        <div className="w-full md:w-2/4 space-y-5 mt-10">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">Find Your Perfect Ride Today</h1>
          <p className="text-lg lg:text-2xl font-medium">Over 1000+ New Cars Available Here</p>
          <p className=" text-sm lg:text:base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            repellat laboriosam vero, odio eligendi ratione, dicta ullam
            dolores, distinctio aspernatur?
          </p>
          <div className="flex gap-8">
            <button className="bg-primary py-1 px-4 rounded-md hover:scale-95 transition duration-150 ease-linear">Explore More</button>
            <button className="border-2 border-primary py-1 px-4 rounded-md hover:bg-primary transition duration-200 ease-linear">See Cars</button>
          </div>
        </div>

      {/**img section 
        <div className="w-full md:w-2/4 mt-4">
            <img src={img} alt="img" />
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
