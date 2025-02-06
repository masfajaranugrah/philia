import React from "react";
import { motion } from "framer-motion";

const Card = () => {
  return (
    <div className="relative mt-20">
      {/* Title Animation */}
      <motion.div
        initial={{ opacity: 0, y: -30 }} // Initial state for the heading
        whileInView={{ opacity: 1, y: 0 }} // Final state for the heading when in view
        transition={{ duration: 0.5, ease: "easeOut" }} // Smooth transition for heading
        viewport={{ once: true }} // Trigger once when in view
      >
        <div className="my-10">
          <h1 className="text-[35px] font-bold text-center">TICKET INFORMATION</h1>
        </div>
      </motion.div>

      <div className="container mx-auto relative z-10 xl:pb-[40rem] lg:pb-[40rem] md:pb-[10rem] pb-[8rem] md:px-[2rem] lg:px-[10rem] xl:px-[10rem] px-[2rem]">
        {/* Ticket Cards Animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8"
          initial={{ opacity: 0 }} // Initial opacity
          whileInView={{ opacity: 1 }} // Final opacity when in view
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }} // Trigger once when in view
        >
          {/* Weekdays Card */}
          <motion.div
            className="p-6 border border-green-900 bg-white rounded-lg shadow-[8px_8px_0px_#000000]"
            whileHover={{ scale: 1.05, boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-[40px] font-bold text-center text-green-900 mb-1">WEEKDAYS</h3>
            <p className="text-[20px] text-center text-green-700 mb-1">Last Entry : 19.00</p>
            <p className="text-[20px] text-center font-bold text-green-900">Dewasa : Rp 20.000</p>
            <p className="text-[20px] text-center font-bold text-green-900">Anak-Anak : Rp 15.000</p>
          </motion.div>

          {/* Weekend Card */}
          <motion.div
            className="p-6 border border-green-900 rounded-lg shadow-[8px_8px_0px_#000000] bg-white"
            whileHover={{ scale: 1.05, boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.2)" }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-[40px] font-bold text-center text-green-900 mb-1">WEEKEND</h3>
            <p className="text-[20px] text-center text-green-700 mb-1">Last Entry : 19.00</p>
            <p className="text-[20px] text-center font-bold text-green-900">Dewasa : Rp 25.000</p>
            <p className="text-[20px] text-center font-bold text-green-900">Anak-Anak : Rp 20.000</p>
          </motion.div>
        </motion.div>

        {/* "Check on WAHANA" Section Animation */}
        <motion.div
          className="text-center bg-white p-6 rounded-lg shadow-[8px_8px_0px_#000000]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="my-4">
            <p className="text-[20px] font-bold text-green-900">Check on</p>
            <p className="text-[30px] font-bold text-green-900">WAHANA TICKET</p>
            <p className="text-[20px] font-bold text-green-900">now!</p>
          </div>

          <motion.button
            className="px-6 my-4 py-4 text-[20px] font-bold text-white bg-green-900 rounded-[20px] hover:bg-green-800 focus:ring-4 focus:ring-green-300"
            whileHover={{ scale: 1.05, backgroundColor: "#4CAF50" }}
            whileTap={{ scale: 0.95 }}
          >
            CHECK ON WAHANA
          </motion.button>
        </motion.div>
      </div>

      {/* Fixed Background Image */}
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
