import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Card = () => {
  return (
    <div className="relative">
      <div>
        <h1 className="text-[20px] md:text-[40px] lg:text-40px  font-bold text-center ">FACILITIES</h1>
      </div>
      {/* Main Content */}
      <div className="container mx-auto relative z-10 pb-[10rem] lg:pb-[20rem] md:pb-[10rem] md:px-[1rem] lg:px-[40rem] xl:px-[2rem] px-[2rem]">
        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          {/* Card 1 */}
          <div className=" rounded-3xl shadow-[8px_8px_0px_#000000] bg-white">
            <div className="flex flex-col px-2 md:px-10 xl:px-10 lg:px-10 items-center justify-center">
              {/* Gambar */}
              <div className="flex flex-col md:flex-row xl:flex-row lg:flex-row">
                <div className="w-full   pt-10 flex justify-center  ">
                  <img
                    src="/images/kopi.png"
                    alt="kopi"
                    className="h-28 w-28 xl:h-40 xl:w-40 md:h-40 md:w-40 lg:h-28 lg:w-28 pl-4 md:pl-0"
                  />
                </div>

                {/* Teks */}
                <div className="p-6 flex md:justify-start md:items-start flex-col ">
                  <h4 className="mb-2 text-[20px] md:text-[40px] lg:text-[40px] text-center  font-bold text-blue-gray-900">
                    Kedai Philia 
                  </h4>
                  <p className="text-[16px] md:text-[20px]  xl:text-[20px] text-center xl:text-start lg:text-start md:text-start  text-gray-700">
                    Tempat makan seru dengan banyak pilihan makanan dan minuman
                    lezat. Kamu bisa duduk santai sambil menikmati hidangan
                    favoritmu di sini! 
                  </p>
                </div>
              </div>

              <div className="flex md:justify-start md:items-start flex-col lg:w-full md:w-full xl:w-full w-[140px] xl:px-4 md:px-7 w-full mb-7">
                    <button
                  type="button"
                  class="gap-2 text-[20px] mt-4 text-center focus:outline-none disabled text-white bg-[#0A2D19] focus:ring-4 focus:ring-green-300   rounded-lg
     px-5 py-1 me-2 mb-2 flex justift-center items-center"
                >
                  <FaMapMarkerAlt />
                  Zona 4
                </button>
               
               
              </div>
            </div>
          </div>

               {/* Card 2 */}
               <div className=" rounded-3xl shadow-[8px_8px_0px_#000000] bg-white">
            <div className="flex flex-col px-2 md:px-10 xl:px-10 lg:px-10 items-center justify-center">
              {/* Gambar */}
              <div className="flex flex-col md:flex-row xl:flex-row lg:flex-row">
                <div className="w-full   pt-10 flex justify-center  ">
                  <img
                    src="/images/kopi.png"
                    alt="kopi"
                    className="h-28 w-28 xl:h-40 xl:w-40 md:h-40 md:w-40 lg:h-28 lg:w-28 pl-4 md:pl-0"
                  />
                </div>

                {/* Teks */}
                <div className="p-6 flex md:justify-start md:items-start flex-col ">
                  <h4 className="mb-2 text-[20px] md:text-[40px] lg:text-40px  text-center  font-bold text-blue-gray-900">
                    Kedai Philia 
                  </h4>
                  <p className="text-[16px] md:text-[20px]  xl:text-[20px] text-center xl:text-start lg:text-start md:text-start  text-gray-700">
                    Tempat makan seru dengan banyak pilihan makanan dan minuman
                    lezat. Kamu bisa duduk santai sambil menikmati hidangan
                    favoritmu di sini! 
                  </p>
                </div>
              </div>

              <div className="flex md:justify-start md:items-start flex-col lg:w-full md:w-full xl:w-full  w-[140px]  xl:px-4 md:px-7 w-full mb-7">
                    <button
                  type="button"
                  class="gap-2 text-[20px] mt-4 text-center focus:outline-none disabled text-white bg-[#0A2D19] focus:ring-4 focus:ring-green-300   rounded-lg
     px-5 py-1 me-2 mb-2 flex justift-center items-center"
                >
                  <FaMapMarkerAlt />
                  Zona 4
                </button>
               
               
              </div>
            </div>
          </div>

               {/* Card 3 */}
               <div className=" rounded-3xl shadow-[8px_8px_0px_#000000] bg-white">
            <div className="flex flex-col px-2 md:px-10 xl:px-10 lg:px-10 items-center justify-center">
              {/* Gambar */}
              <div className="flex flex-col md:flex-row xl:flex-row lg:flex-row">
                <div className="w-full   pt-10 flex justify-center  ">
                  <img
                    src="/images/kopi.png"
                    alt="kopi"
                    className="h-28 w-28 xl:h-40 xl:w-40 md:h-40 md:w-40 lg:h-28 lg:w-28 pl-4 md:pl-0"
                  />
                </div>

                {/* Teks */}
                <div className="p-6 flex md:justify-start md:items-start flex-col ">
                  <h4 className="mb-2 text-[20px] md:text-[40px] lg:text-40px  text-center  font-bold text-blue-gray-900">
                    Kedai Philia 
                  </h4>
                  <p className="text-[16px] md:text-[20px]  xl:text-[20px] text-center xl:text-start lg:text-start md:text-start  text-gray-700">
                    Tempat makan seru dengan banyak pilihan makanan dan minuman
                    lezat. Kamu bisa duduk santai sambil menikmati hidangan
                    favoritmu di sini! 
                  </p>
                </div>
              </div>

              <div className="flex md:justify-start md:items-start flex-col lg:w-full md:w-full xl:w-full  w-[140px]  xl:px-4 md:px-7 w-full mb-7">
                    <button
                  type="button"
                  class="gap-2 text-[20px] mt-4 text-center focus:outline-none disabled text-white bg-[#0A2D19] focus:ring-4 focus:ring-green-300   rounded-lg
     px-5 py-1 me-2 mb-2 flex justift-center items-center"
                >
                  <FaMapMarkerAlt />
                  Zona 4
                </button>
               
               
              </div>
            </div>
          </div>

     {/* Card 4 */}
     <div className=" rounded-3xl shadow-[8px_8px_0px_#000000] bg-white">
            <div className="flex flex-col px-2 md:px-10 xl:px-10 lg:px-10 items-center justify-center">
              {/* Gambar */}
              <div className="flex flex-col md:flex-row xl:flex-row lg:flex-row">
                <div className="w-full   pt-10 flex justify-center  ">
                  <img
                    src="/images/kopi.png"
                    alt="kopi"
                    className="h-28 w-28 xl:h-40 xl:w-40 md:h-40 md:w-40 lg:h-28 lg:w-28 pl-4 md:pl-0"
                  />
                </div>

                {/* Teks */}
                <div className="p-6 flex md:justify-start md:items-start flex-col ">
                  <h4 className="mb-2 text-[20px] md:text-[40px] lg:text-40px  text-center  font-bold text-blue-gray-900">
                    Kedai Philia 
                  </h4>
                  <p className="text-[16px] md:text-[20px]  xl:text-[20px] text-center xl:text-start lg:text-start md:text-start  text-gray-700">
                    Tempat makan seru dengan banyak pilihan makanan dan minuman
                    lezat. Kamu bisa duduk santai sambil menikmati hidangan
                    favoritmu di sini! 
                  </p>
                </div>
              </div>

              <div className="flex md:justify-start md:items-start flex-col lg:w-full md:w-full xl:w-full  w-[140px]  xl:px-4 md:px-7 w-full mb-7">
                    <button
                  type="button"
                  class="gap-2 text-[20px] mt-4 text-center focus:outline-none disabled text-white bg-[#0A2D19] focus:ring-4 focus:ring-green-300   rounded-lg
     px-5 py-1 me-2 mb-2 flex justift-center items-center"
                >
                  <FaMapMarkerAlt />
                  Zona 4
                </button>
               
               
              </div>
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
