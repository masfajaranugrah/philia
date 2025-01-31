 
import React from "react";

const Card = () => {
  return (
    <div className="relative mt-20">
        <div>
            <div className="my-10">
                <h1 className="text-[35px] font-bold  text-center" >TICKET INFORMATION</h1>
            </div>
        <div className="container mx-auto relative z-10 xl:pb-[40rem] lg:pb-[40rem] md:pb-[10rem] pb-[8rem] md:px-[2rem] lg:px-[10rem] xl:px-[10rem] px-[2rem]">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
     <div class="p-6 border border-green-900 bg-white rounded-lg shadow-[8px_8px_0px_#000000]">
      <h3 class="text-[40px] font-bold text-center text-green-900 mb-1">WEEKDAYS</h3>
      <p class="text-[20px] text-center text-green-700 mb-1">Last Entry : 19.00</p>
      <p class="text-[20px] text-center font-bold text-green-900">Dewasa : Rp 20.000</p>
      <p class="text-[20px] text-center font-bold text-green-900">Anak-Anak : Rp 15.000</p>
    </div>

     <div class="p-6 border border-green-900 rounded-lg shadow-[8px_8px_0px_#000000] bg-white">
      <h3 class="text-[40px] font-bold text-center text-green-900 mb-1">WEEKEND</h3>
      <p class="text-[20px] text-center text-green-700 mb-1">Last Entry : 19.00</p>
      <p class="text-[20px] text-center font-bold text-green-900">Dewasa : Rp 25.000</p>
      <p class="text-[20px] text-center font-bold text-green-900">Anak-Anak : Rp 20.000</p>
    </div>
  </div>

   <div class="text-center bg-white p-6 rounded-lg shadow-[8px_8px_0px_#000000]">
    <div className="my-4">
    <p class="text-[20px] font-bold text-green-900 ">
      Check on 
    </p>
    <p className="text-[30px] font-bold text-green-900">WAHANA TICKET </p>
    <p className="text-[20px] font-bold text-green-900">now!</p>
    </div>
    <button
      class="px-6 my-4 py-4 text-[20px] font-bold text-white bg-green-900 rounded-[20px] hover:bg-green-800 focus:ring-4 focus:ring-green-300"
    >
CHECK ON WAHANA    </button>
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


 