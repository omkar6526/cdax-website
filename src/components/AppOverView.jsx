import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AppOverView({ images = [], interval = 2000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
      
      {/* MOBILE SCREEN FRAME */}
      <div className="relative w-full h-[340px] md:h-[520px] lg:h-[500px]">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt="App screen"
            className="absolute inset-0 w-full h-full object-contain rounded-3xl drop-shadow-2xl"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          />
        </AnimatePresence>
      </div>

    </div>
  );
}

