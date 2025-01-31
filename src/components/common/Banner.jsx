import logo from '/images/banner/logo.png';
import React from "react";

function Banner() {
  return (
    <section className="container mx-auto relative mt-[20px] lg:mt-[33px] xl:mt-[33px]  sm:mt-[20px] md:mt-20 md:px-0 lg;px-0 xl:px-0 px-4">
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat text-center flex items-center min-h-[329px] sm:min-h-[400px] md:min-h-[500px] xl:min-h-[800px] lg:min-h-[800px]"
        style={{ 
          backgroundImage: "url('/images/banner/banner.png')", 
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-start px-8 sm:px-20">
          <div className="text-white max-w-lg">
            <img src={logo} alt="logo" className="mb-4 xl:w-[17rem] md:w-[10rem] lg:w-[17rem]  w-[7rem]"/>
            <h4 className="text-left md:text-[25px] xl:text-[48px] lg:text-[48px] text-[20px] font-bold leading-tight">
              LET'S MAKE ADVENTURES <br /> TOGETHER WITH US!
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
