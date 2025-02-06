import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from '../ui/animated-modal';

const Maps = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleDoubleClick = () => {
    setScale(scale === 1 ? 2 : 1);
  };

  return (
    <motion.div 
      className='container xl:w-[95%] mx-auto flex my-10 flex-col justify-center items-center'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className='text-center'>
       <motion.p 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.2 }}
                 transition={{ duration: 0.8 }}
                 className="text-black text-center text-[30px] lg:text-[40px] font-[Montserrat] font-[1000] my-10">
                 SITE MAPS
               </motion.p>
      </div>
      
      <Modal className='flex  justify-center items-center'>
        <ModalTrigger asChild>
          <motion.div 
            className='mx-2 border border-black border-2 rounded-[14px] xl:rounded-[35px] md:rounded-[35px] lg:rounded-[35px] cursor-pointer'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img src='/images/map.png' alt='maps' className='w-full h-80 xl:h-full lg:h-full md:h-full' />
          </motion.div>
        </ModalTrigger>

        <ModalBody className='flex justify-center border-none bg-transparent items-center'>
          <ModalContent className='mt-20'>
            <motion.img 
              src='/images/map.png' 
              alt='maps' 
              className='cursor-grab border border-gray-300 rounded-lg' 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
              onDoubleClick={handleDoubleClick} 
            />
          </ModalContent>
        </ModalBody>
      </Modal>
    </motion.div>
  );
};

export default Maps;