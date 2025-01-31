// import React, { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import { motion } from "framer-motion";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/autoplay";

// const images = [
//   "/images/slide/01.png",
//   "/images/slide/02.png",
//   "/images/slide/03.png",
//   "/images/slide/04.png",
// ];

// function People() {
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   return (
//     <div className="container mx-auto">
//       <div className="text-center">
//       <p className="text-black text-center text-[40px] font-[Montserrat] font-[1000] my-10">
//   PEOPLE EXPERIENCES</p>
//       </div>

//       <div className="relative w-full container mx-auto px-8">
//         {/* Tombol Navigasi Kustom */}
//         <button
//           ref={prevRef}
//           className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-1 rounded-lg text-white hover:bg-opacity-75 z-10"
//         >
//           <ChevronLeft size={40} />
//         </button>

//         <Swiper
//           modules={[Navigation, Autoplay]}
//           spaceBetween={20}
//           loop={true}
//           autoplay={{ delay: 3000, disableOnInteraction: false }}
//           navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
//           onBeforeInit={(swiper) => {
//             swiper.params.navigation.prevEl = prevRef.current;
//             swiper.params.navigation.nextEl = nextRef.current;
//           }}
//           breakpoints={{
//             320: { slidesPerView: 1 },
//             640: { slidesPerView: 2 },
//             1024: { slidesPerView: 3 },
//           }}
//           className="rounded-lg overflow-hidden"
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index}>
//               <div className="relative   rounded-lg py-[50%]">
//                 <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
//                   <motion.div
//                     className="w-[75%] max-w-md mx-auto bg-[#F6FFEA] p-8 my-10 rounded-3xl shadow-[8px_8px_0px_#000000] border border-gray"
//                     initial={{ opacity: 0, scale: 0.9 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <h2 className="text-black text-[20px] text-left font-bold">Insert Name</h2>
//                     <h2 className="text-black text-[15px] text-left font-semibold">Jakarta Selatan</h2>
//                     <p className="text-black text-left mt-4">
//                       The all new Apple Vision Pro was the best thing that happened around 8 months ago, not anymore.
//                     </p>
//                   </motion.div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>

//         {/* Tombol Navigasi Kustom */}
//         <button
//           ref={nextRef}
//           className="absolute xl:-right-10 right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-1 rounded-lg text-white hover:bg-opacity-75 z-10"
//         >
//           <ChevronRight size={40} />
//         </button>
//       </div>
//     </div>
//   );
// }

// export default People;
 
 
"use client";

import React  from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function People() {
  return (
    <div className="w-full   mx-auto h-[40rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <div className="text-center">
      <p className="text-black text-center text-[30px] lg:text-[40px] font-[Montserrat] font-[1000] my-10">
    PEOPLE EXPERIENCES</p>
      </div>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    
    title: "Charles Dickens",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      location: "Jakarta"
  },
  {
    
     title: "Charles Dickens",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      location: "Jakarta"
    },
   {
    
     title: "Charles Dickens",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      location: "Jakarta"
    },
   {
    
     title: "Charles Dickens",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      location: "Jakarta Selatan"
    },
   {
    
     title: "Charles Dickens",
     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
      location: "Jakarta"
    },

];