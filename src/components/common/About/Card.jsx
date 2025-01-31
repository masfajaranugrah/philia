import React from "react";

const Card = () => {
  return (
    <div className="relative">
      {/* Main Content */}
      <div className="container mx-auto relative z-10 pb-[10rem] lg:pb-[40rem] xl:pb-[38rem] md:pb-[20rem] md:px-[2rem] lg:px-[10rem] xl:px-[10rem] px-[2rem]">
        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {/* Card 1 */}
          <div className="flex flex-col md:flex-row items-center justify-center rounded-3xl shadow-[8px_8px_0px_#000000] bg-white">
  {/* Gambar */}
  <div className="w-full   pt-10 md:pt-0 flex justify-center  ">
    <img
      src="/images/pohon.png"
      alt="Pohon"
      className="h-40 w-40 pl-4 md:pl-0"
    />
  </div>

  {/* Teks */}
  <div className="p-6  ">
    <h4 className="mb-2 text-[20px] text-center lg:text-left xl:text-left md:text-left  font-bold text-blue-gray-900">
      Insert Name
    </h4>
    <p className="text-[18px] xl:text-[15px] lg:text-[15px] md:text-[20px] text-center lg:text-left xl:text-left md:text-left  text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
            </div>


          {/* Card 2 */}
          <div className="flex flex-col md:flex-row items-center justify-center rounded-3xl shadow-[8px_8px_0px_#000000] bg-white">
  {/* Gambar */}
  <div className="w-full   pt-10 md:pt-0 flex justify-center  ">
    <img
      src="/images/pohon.png"
      alt="Pohon"
      className="h-40 w-40 pl-4 md:pl-0"
    />
  </div>

  {/* Teks */}
 <div className="p-6  ">
    <h4 className="mb-2 text-[20px] text-center lg:text-left xl:text-left md:text-left  font-bold text-blue-gray-900">
      Insert Name
    </h4>
    <p className="text-[18px] xl:text-[15px] lg:text-[15px] md:text-[20px] text-center lg:text-left xl:text-left md:text-left  text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
            
            </div>
          {/* Card 3 */}
          <div className="flex flex-col md:flex-row items-center justify-center rounded-3xl shadow-[8px_8px_0px_#000000] bg-white">
  {/* Gambar */}
  <div className="w-full   pt-10 md:pt-0 flex justify-center  ">
    <img
      src="/images/pohon.png"
      alt="Pohon"
      className="h-40 w-40 pl-4 md:pl-0"
    />
  </div>

  {/* Teks */}
 <div className="p-6  ">
    <h4 className="mb-2 text-[20px] text-center lg:text-left xl:text-left md:text-left  font-bold text-blue-gray-900">
      Insert Name
    </h4>
    <p className="text-[18px] xl:text-[15px] lg:text-[15px] md:text-[20px] text-center lg:text-left xl:text-left md:text-left  text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
            
            </div>

          {/* Card 4 */}
          <div className="flex flex-col md:flex-row items-center justify-center rounded-3xl shadow-[8px_8px_0px_#000000] bg-white">
  {/* Gambar */}
  <div className="w-full   pt-10 md:pt-0 flex justify-center  ">
    <img
      src="/images/pohon.png"
      alt="Pohon"
      className="h-40 w-40 pl-4 md:pl-0"
    />
  </div>

  {/* Teks */}
 <div className="p-6  ">
    <h4 className="mb-2 text-[20px] text-center lg:text-left xl:text-left md:text-left  font-bold text-blue-gray-900">
      Insert Name
    </h4>
    <p className="text-[18px] xl:text-[15px] lg:text-[15px] md:text-[20px] text-center lg:text-left xl:text-left md:text-left  text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
            
            </div>
        </div>
      </div>

      {/* Fixed Background Image */}
      <div className="absolute -bottom-1 w-full ">
        <img
          src="/images/01.png"
          alt="Gambar wahana"
          className="w-full h-full "
        />
      </div>
    </div>
  );
};

export default Card;
