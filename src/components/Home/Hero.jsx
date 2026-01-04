import React from "react";

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
          {/**find car */}
      <div className="relative w-full lg:w-auto px-4 py-3 group border-r border-red-600">
           <button className="flex item center gap-2 w-full justify-between text from-gray-200">car typ</button>
      </div>
    
    </div>
    
  );
};

export default Hero;
