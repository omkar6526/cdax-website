import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import hero1 from "../assets/video/hero.mp4";
import { Link } from "react-router-dom";

export default function BigHero() {
  const [visible, setVisible] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setVisible(false);
        setTimeout(() => {
          setAnimKey((p) => p + 1);
          setVisible(true);
        }, 120);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-[65vh] sm:h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {/* VIDEO */}
      <motion.video
        className="absolute inset-0 w-full h-full object-cover opacity-60 sm:opacity-65 md:opacity-70"
        src={hero1}
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 20, ease: "easeOut" }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/40 sm:bg-black/35 md:bg-black/30" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        {visible && (
          <motion.div
            key={animKey}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.18 } },
            }}
            className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 text-white"
          >
            {/* HEADING */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              Learn better.
              <br />
              Stay consistent.
            </motion.h1>

            {/* TEXT */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-md sm:max-w-lg text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8"
            >
              CDAXX helps you learn with structured courses, progress tracking
              and daily streaks — all in one app.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <Link to="/downlod">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="hidden sm:block px-5 py-2 rounded-full border border-blue-600 text-sm font-medium hover:bg-blue-300"
                >
                  Cdax Web App
                </motion.button>
              </Link>
              <Link to="/downlod">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  className="px-5 py-2 rounded-full bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600"
                >
                  Download
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
