import React from 'react';
import {   FaEnvelope, FaPhoneAlt, FaChevronRight, FaArrowUp, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-white py-10  "   style={{ 
        backgroundImage: "url('/images/mobile.png')", 
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }} >
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Logo & About Section */}
        <div >
          <div className='flex justify-center'>
                      <img src="/images/banner/logo.png" alt="logo" className='w-[50%] h-[50%] lg:w-[50%] lg:h-[50%] md:w-[30%] md:h-[30%] xl:w-[60%] xl:h-[60%]' />

          </div>
      
          <div className="flex space-x-4 mt-4 justify-center">
          <a href="#" className="text-white text-lg hover:text-gray-300"><FaInstagram /></a>

            <a href="#" className="text-white text-lg hover:text-gray-300"><FaFacebook/></a>
           </div>
        </div>

        {/* Quick Links 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Page</h3>
          <ul className="space-y-2">
            <li><a href="/" className="flex items-center hover:text-gray-300"><FaChevronRight className="mr-2" /> Home</a></li>
            <li><a href="/service" className="flex items-center hover:text-gray-300"><FaChevronRight className="mr-2" /> About Us</a></li>
            <li><a href="/portfolio" className="flex items-center hover:text-gray-300"><FaChevronRight className="mr-2" /> Getting Here</a></li>
            <li><a href="/contact" className="flex items-center hover:text-gray-300"><FaChevronRight className="mr-2" /> Wahana</a></li>
            <li><a href="/contact" className="flex items-center hover:text-gray-300"><FaChevronRight className="mr-2" /> Tiket Informasi</a></li>
            <li><a href="/contact" className="flex items-center hover:text-gray-300"><FaChevronRight className="mr-2" /> Group Visits</a></li>
            <li><a href="/contact" className="flex items-center hover:text-gray-300"><FaChevronRight className="mr-2" /> FAQ</a></li>
            <li><a href="/contact" className="flex items-center hover:text-gray-300"><FaChevronRight className="mr-2" /> Event Calender</a></li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className='md:w-2/4'>Jl. M. Bakri Kampung
Gunung Letik, RT.01/RW.02, Cibodas,
Kec. Jonggol, Bogor timur,
Jawa Barat 16830</p>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li className="flex items-center"><FaEnvelope className="mr-2" /> <a href="mailto:admin@jasa.com" className="hover:text-gray-300">Philia@info.com</a></li>
            <li className="flex items-center"><FaWhatsapp className="mr-2" /> <a href="tel:+6287836167585" className="hover:text-gray-300">+62 812-4318-318</a></li>
            <li className="flex items-center"><FaPhoneAlt className="mr-2" /> <a href="tel:+6287836167585" className="hover:text-gray-300">+62812-4318-318</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
      <p>&copy; 2025 PHILIA.<br/> Developed by Astheron Technologies.<br/>  All rights reserved.</p>
      </div>

   
    </footer>
  );
};

export default Footer;
