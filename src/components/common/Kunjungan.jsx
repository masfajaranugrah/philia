//  


import React from 'react';

function Kunjungan() {
  return (
    <div className="relative  min-h-screen flex flex-col justify-center items-center">
      {/* Judul */}
       
        <div className="text-center">
      <p className="text-black text-center text-[30px] lg:text-[40px] font-[Montserrat] font-[1000] my-10">
           KUNJUNGI PHILIA SEKARANG!
</p>
      </div>
      {/* Grid Card */}
      <div className="grid grid-cols-1  mb-[6rem] xl:mb-[30rem] px-2 lg:mb-[30rem] md:mb-[20rem] gap-6 md:grid-cols-2 z-[10]">
        {/* Card 1 */}
        <div className="flex justify-center items-center ">
            <img
              src="/images/kunjungan/01.png"
              alt="kunjungan"
              className="rounded-[20px] w-[70%] lg:w-[100%] xl:w-[100%] md:w-[100%]"
            />
          </div>
          <div className="flex justify-center items-center  ">
            <img
              src="/images/kunjungan/02.png"
              alt="kunjungan"
              className="rounded-[20px] w-[70%] lg:w-[100%] xl:w-[100%] md:w-[100%]"
            />
          </div>
           
        
      </div>

      {/* Gambar Pohon di Bawah */}
      <div className="absolute -bottom-1 w-full ">
        <img
          src="/images/01.png"
          alt="Gambar wahana"
          className="w-full h-full "
        />
      </div>
    </div>
  );
}

export default Kunjungan;
