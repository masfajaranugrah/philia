import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const images = [
  "/images/slide/01.png",
  "/images/slide/01.png",
  "/images/slide/01.png",
];

function What() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      className="container mx-auto flex flex-col items-center"
    >
      <motion.p
        className="text-black text-center text-[30px] lg:text-[40px] px-2 font-[Montserrat] font-[1000] my-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        WHAT’S ON PHILIA TODAY
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        className="relative w-full container mx-auto px-8"
      >
        {/* Tombol Navigasi Kustom */}
        <motion.button
          ref={prevRef}
          className="absolute left-[0.2rem] top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-lg text-white hover:bg-opacity-75 z-10"
          whileHover={{ scale: 1.1 }}
        >
          <ChevronLeft size={40} />
        </motion.button>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            setTimeout(() => {
              if (swiper.params.navigation) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            });
          }}
          className="rounded-lg overflow-hidden"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="relative"
              >
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[200%] object-cover rounded-lg"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                  className="absolute inset-0 flex flex-col items-center justify-center text-white"
                >
                  <img src="/images/banner/logo.png" alt="Logo" className="w-20 xl:w-80 lg:w-80 md:w-40" />
                  <h2 className="text-[15px] lg:text-[40px] xl:text-[40px] md:text-[25px] font-bold mt-2">PHILIA</h2>
                  <p className="text-[10px] lg:text-[20px] xl:text-[20px] md:text-[15px]">ADVENTURE LAND</p>
                </motion.div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Tombol Navigasi Kustom */}
        <motion.button
          ref={nextRef}
          className="absolute right-[0.2rem] top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-lg text-white hover:bg-opacity-75 z-10"
          whileHover={{ scale: 1.1 }}
        >
          <ChevronRight size={40} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default What;
