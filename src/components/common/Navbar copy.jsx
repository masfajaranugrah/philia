import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null); // Reference for the mobile menu
  const buttonRef = useRef(null); // Reference for the menu button

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      // Check if the click was outside of the menu or button
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false); // Close the menu if clicked outside
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside); // Listen for outside clicks

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside); // Clean up the event listener
    };
  }, []);

  return (
    <div>
      {/* Background Blur when Mobile Menu is Open */}
      <div
        className={`${
          isOpen ? "backdrop-blur-lg" : ""
        } fixed inset-0 bg-opacity-50 z-40 transition-all duration-300`}
      ></div>

      <nav
        className={`bg-green-900 container top-0 xl:top-4 md:top-4 lg:top-4 mx-auto text-white p-4 flex justify-between items-center xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-none shadow-lg transition-all duration-300 z-50 ${
          isScrolled ? "fixed top-0 left-0 right-0 w-full shadow-md" : "sticky top-0"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-screen-xl">
          {/* Logo & Schedule Info */}
          <div className="flex items-center space-x-2">
            <img src="/images/banner/logo.png" alt="Logo" className="w-10 h-10" />
            <div className="text-sm hidden lg:block xl:block md:block">
              <p>Mon-Sun 00:00 - 00:00</p>
              <p>Last Entry 19:00</p>
            </div>
          </div>

          <div>
            <div className="text-sm block text-center font-bold lg:hidden xl:hidden md:hidden">
              <p>Mon-Sun 00:00 - 00:00</p>
              <p>Last Entry 19:00</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="hover:text-gray-300 font-bold">About Us</a>
            <a href="#wahana" className="hover:text-gray-300 font-bold">Wahana</a>
            <a href="#visits" className="hover:text-gray-300 font-bold">Visits</a>
            <a href="#faq" className="hover:text-gray-300 font-bold">FAQ</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={buttonRef} // Assign the ref to the button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef} // Assign the ref here
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-16 right-0 bg-green-900 text-center text-white w-full p-4 shadow-lg rounded-lg md:hidden z-50"
          >
            <a href="/" className="block font-bold py-2">Home</a>
            <a href="/about" className="block font-bold py-2">About Us</a>
            <a href="#wahana" className="block font-bold py-2">Wahana</a>
            <a href="#visits" className="block font-bold py-2">Visits</a>
            <a href="#faq" className="block font-bold py-2">FAQ</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
