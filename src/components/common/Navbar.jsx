import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <nav
        className={`bg-green-900 container top-0 xl:top-4 md:top-4 lg:top-4 mx-auto text-white p-4 flex justify-between items-center xl:rounded-xl lg:rounded-xl md:rounded-xl rounded-none shadow-lg transition-all duration-300 z-50 ${
          isScrolled ? "fixed top-0 left-0 right-0 w-full shadow-md" : "sticky top-0"
        }`}
      >
        <div className="w-full flex justify-between items-center max-w-screen-xl">
          <div className="flex items-center space-x-2">
            <img src="/images/banner/logo.png" alt="Logo" className="w-10 h-10" />
            <div className="text-sm hidden lg:block xl:block">
              <p>Mon-Sun 00:00 - 00:00</p>
              <p>Last Entry 19:00</p>
            </div>
          </div>

          <div className="text-sm block text-center font-bold md:hidden">
            <p>Mon-Sun 00:00 - 00:00</p>
            <p>Last Entry 19:00</p>
          </div>

          <div className="hidden lg:flex space-x-6">
            <a href="/" className="hover:text-gray-300 font-bold">Home</a>
            <a href="/about" className="hover:text-gray-300 font-bold">About Us</a>
            <a href="/getting-here" className="hover:text-gray-300 font-bold">Getting</a>
            <a href="/wahana" className="hover:text-gray-300 font-bold">Wahana</a>
            <a href="/ticket" className="hover:text-gray-300 font-bold">Ticket</a>
            <a href="/question" className="hover:text-gray-300 font-bold">Faq</a>
            <a href="/event" className="hover:text-gray-300 font-bold">Event</a>
          </div>

          {/* Mobile & Tablet Menu Button */}
          <button
            ref={buttonRef}
            className="md:block lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-16 right-0 left-0 mx-auto max-w-screen-md bg-green-900 text-center text-white p-4 shadow-lg rounded-lg lg:hidden z-50"

          >
            <a href="/" className="block font-bold py-2">Home</a>
            <a href="/about" className="block font-bold py-2">About Us</a>
            <a href="/getting-here" className="block font-bold py-2">Getting</a>
            <a href="/wahana" className="block font-bold py-2">Wahana</a>
            <a href="/ticket" className="block font-bold py-2">Ticket</a>
            <a href="/question" className="block font-bold py-2">Faq</a>
            <a href="/event" className="block font-bold py-2">Event</a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
