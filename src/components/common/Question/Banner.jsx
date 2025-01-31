import logo from '/images/banner/logo.png';
import React from "react";

function Banner() {
  return (
    <section className="container mx-auto relative mt-[20px] lg:mt-[33px] xl:mt-[33px]  sm:mt-[20px] md:mt-20 md:px-0 lg;px-0 xl:px-0 px-4">
      <div
        className="relative overflow-hidden rounded-lg bg-cover bg-no-repeat text-center   min-h-[329px] sm:min-h-[400px] md:min-h-[300px] xl:min-h-[400px] lg:min-h-[400px]"
        style={{ 
          backgroundImage: "url('/images/bg-about.png')", 
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center px-8 sm:px-20">
          <div className="text-white max-w-lg">
             <h4 className="text-center md:text-[25px] xl:text-[48px] lg:text-[48px] text-[40px] font-bold leading-tight">
             Frequently Asked Question
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
