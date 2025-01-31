import React from 'react'

const _Getting = () => {
  return (
    <div className='container mx-auto my-10'>
        <div>
            <h1 className='text-[40px] font-bold text-center'>OPENING HOURS</h1>
            <p className='font-bold text-center text-[20px] xl:text-[30px] lg:text-[30px] md:text-[30px]  mt-10'>Monday - Sunday : 00.00 - 00.00 |  Last Entry : 19.00</p>
            <h2 className=' font-bold text-[30px] my-10 text-center'>FIND US HERE</h2>
        </div>
      <div class="w-full  px-[2rem] flex justify-center">
          <div class=" rounded-lg border border-black overflow-hidden w-full lg:h-[20rem]  md:h-[20rem] xl:h-[40rem] h-[20rem]">
   
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.081961231009!2d107.016683!3d-6.511309699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69bd722738af2f%3A0xf64383e1e58f26a!2sPhilia%20adventure%20land%20jonggol!5e0!3m2!1sid!2sid!4v1738257773434!5m2!1sid!2sid" 
             allowFullScreen="true"
             loading="lazy"
             class="w-full lg:h-[20rem]  md:h-[20rem] xl:h-[40rem] h-[20rem]"

             referrerPolicy="no-referrer-when-downgrade">
             </iframe>
          </div>
        </div>
    </div>
  )
}

export default _Getting