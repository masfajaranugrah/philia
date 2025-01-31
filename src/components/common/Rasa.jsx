 
 import React,{useRef} from "react";
import { WobbleCard } from "../ui/wobble-card";
import { ImSearch } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
const images = [
  "/images/slide/01.png",
  "/images/slide/01.png",
  "/images/slide/01.png",


];

export default function Rasa() {
   const prevRef = useRef(null);
    const nextRef = useRef(null);
  return (
    (
        <div className=" relative container mx-auto px-2">




  <div className="flex items-center justify-center relative my-10">
  
    {/* Teks */}
    <p className="text-black text-[30px] lg:text-[40px] font-[Montserrat] font-[1000]">
      RASAKAN KESERUANNYA!
    </p>
  </div>

            
<div className="grid  grid-cols-1 lg:grid-cols-3 gap-4 container my-20 mx-auto w-full">




<WobbleCard className="col-span-1 min-h-[300px] relative" backgroundImage="/images/rasa/01.png">
    <h2 className="absolute bottom-0 left-0 max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white p-4">
      ATV
    </h2>
  </WobbleCard>

  <WobbleCard className="col-span-1 min-h-[300px] relative" backgroundImage="/images/rasa/01.png">
    <h2 className="absolute bottom-0 left-0 max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white p-4">
      Sky Bridge
    </h2>
  </WobbleCard>

  <WobbleCard
    containerClassName="row-span-2 lg:h-[100%] xl:h-[100%] md:h-[100%] h-[60%] bg-center bg-[#0A2D19] flex justify-center items-center lg:order-none order-last"
  >
    <div className="flex flex-col justify-center items-center">
      <ImSearch className="text-white lg:text-[100px] xl:text-[100px]  md:text-[100px]  text-[50px]  text-center " />
      <p className="mt-4 max-w-[26rem] text-center text-[20px] lg:text-[40px] xl:text-[40px] md:tex-[30px] font-bold text-neutral-200">
        Learn More
      </p>
    </div>
  </WobbleCard>

  <WobbleCard
    containerClassName="col-span-1 lg:col-span-2 h-full min-h-[200px] lg:min-h-[300px]"
    backgroundImage="/images/rasa/03.png"
  >
    <div className="max-w-xs">
      <h2 className="absolute bottom-0 left-0 max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white p-4">
        Cave Adventure
      </h2>
    </div>
  
  </WobbleCard>
</div>

     

        </div>
    )
  );
}
