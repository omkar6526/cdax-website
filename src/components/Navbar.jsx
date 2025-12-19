import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/cdaxxlogo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-white/10 shadow-sm border-b border-black/10"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-2 md:px-2 py-0 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-2">
            <a href="/">
              <img src={logo} alt="CDAXX" className="h-20 md:h-24 w-auto" />
            </a>
          </div>

          {/* CENTER */}
          <nav className="hidden md:flex items-center gap-16 text-sm font-medium text-gray-700">
            {[
              { name: "Home", link: "/" },
              { name: "Features", link: "/featuers" },
              { name: "Privacy", link: "/privacy" },
              { name: "Help", link: "/help" },
              { name: "For Business", link: "/forbusiness" },
              { name: "Apps", link: "/Apps" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                className="relative group hover:text-black transition-colors"
              >
                {item.name}

                {/* underline */}
                <span
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-blue-500 
        scale-x-0 group-hover:scale-x-100 
        transition-transform duration-300 origin-left rounded-full"
                ></span>
              </a>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            <Link to="/downlod">
              {/* CDAX Web App Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="hidden sm:block px-6 py-3 rounded-full border border-blue-600 text-sm font-medium hover:bg-blue-300"
              >
                Cdax Web App
              </motion.button>
            </Link>

            {/* Get App Button */}
            <Link to="/downlod">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-6 py-3 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600"
              >
                Get CdaxApp
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
