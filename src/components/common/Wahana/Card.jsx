import React, { useEffect, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../../ui/animated-modal";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const Card = () => {
  const [wahana, setWahana] = useState([]);

  useEffect(() => {
    fetch("http://192.168.1.22:8000/2b7e151628aed2a6abf7158809cf4f3c", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setWahana(data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="relative  xl:pb-[40rem] lg:pb-[40rem] md:pb-[10rem] pb-[8rem]   ">
      <motion.div initial="hidden" animate="visible" variants={fadeIn}>
        <h1 className="text-[40px] font-bold text-center">FACILITIES</h1>
      </motion.div>

      <div className="container  mx-auto relative z-10 pb-[15em] md:pb-[46rem] xl:pt-[10rem] lg:pt-[10rem]">
        {wahana.length === 0 ? (
          <div className="text-center text-xl font-semibold text-gray-600 mt-10">
            Wahana tidak ditemukan
          </div>
        ) : (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
          >
            {wahana.map((item, index) => (
              <Modal key={index}>
                <ModalTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="bg-white border-2 border-black rounded-[30px] shadow-[8px_8px_0px_#000000] cursor-pointer flex flex-col h-full"
                  >
                    <div className="w-full h-[250px] overflow-hidden rounded-t-[30px]">
                      <img
                        className="w-full h-full object-cover"
                        src={`http://192.168.1.22:8000/storage/wahana/${item.images}`}
                        alt={item.title}
                      />
                    </div>
                    <div className="p-5 border-t-4 border-black flex flex-col flex-grow">
                      <h5 className="mb-2 text-[20px] text-left font-bold tracking-tight text-gray-900">
                        {item.title}
                      </h5>
                      <p className="mb-3 text-gray-700 text-left text-[15px] line-clamp-3">
                        {item.description.length > 150
                          ? item.description.substring(0, 120) + "..."
                          : item.description}
                      </p>
                      <div className="mt-auto flex justify-between items-center">
                        <button className="gap-2 text-white bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center">
                          <FaMapMarkerAlt /> {item.location.split(" ")[0] + " ..."}
                        </button>
                        <button className="text-white bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5">
                          {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                          }).format(item.price)}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                </ModalTrigger>

                <ModalBody className="mx-2">
                  <ModalContent>
                    <h4 className="text-lg md:text-2xl text-neutral-600 text-center font-bold mb-8">
                      <span className="px-1 py-0.5 rounded-md bg-gray-100 text-center border border-gray-200">
                        {item.title}
                      </span>{" "}
                      🌳
                    </h4>
                    <div className="flex justify-center text-center">
                      <motion.div className="rounded-xl -mr-4 mt-4 p-1 bg-white border border-neutral-100 overflow-hidden">
                        <img
                          src={`http://192.168.1.22:8000/storage/wahana/${item.images}`}
                          alt={item.title}
                          width="500"
                          height="500"
                          className="rounded-lg h-30 w-30 object-cover"
                        />
                      </motion.div>
                    </div>
                    <p className="mt-4 text-gray-700">{item.description}</p>
                  </ModalContent>
                  <ModalFooter className="gap-4">
                    <button className="px-4 py-2 bg-gray-200 text-black rounded-md text-sm w-28">
                      {item.location}
                    </button>
                    <button className="bg-black text-white text-sm py-2 rounded-md border border-black px-4">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      }).format(item.price)}
                    </button>
                  </ModalFooter>
                </ModalBody>
              </Modal>
            ))}
          </motion.div>
        )}
      </div>

      <div className="absolute -bottom-1 w-full">
        <img
          src="/images/01.png"
          alt="Gambar wahana"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Card;
