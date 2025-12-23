import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import hero1 from "../assets/video/hero.mp4";
import { Link } from "react-router-dom";
import googlePlayLogo from "../assets/playstorelogo.png";
import appStoreLogo from "../assets/appstorelogo.png";

// Google Play aur App Store ke icons ke liye SVG components
//const GooglePlayIcon = () => (
<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
  <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.24-.84-.76-.84-1.35zm13.81-5.38L6.05 21.34l14.84-7.46c.41-.2.75-.59.91-1.07.17-.48.14-1-.08-1.46l-.01-.02-5.9-11.94v.01c-.22-.45-.58-.81-1.05-1.01-.47-.2-1-.2-1.47 0L6.05 2.66l10.76 5.46-9.58 9.58 10.76 5.46z" />
</svg>;
//);


const AppStoreIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.38-1.09-.51-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.38C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
  </svg>
);

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
    <section className="relative h-[63vh] sm:h-[68vh] md:h-[78vh] w-full overflow-hidden">
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
              className="flex flex-wrap gap-3 sm:gap-4 items-center"
            >
              {/* Download Buttons */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 sm:mt-0">
                {/* Google Play Button */}
                <motion.a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-8 py-1 sm:px-5 sm:py-2 bg-blue-100 hover:bg-blue-300 text-black rounded-lg border border-white/20"
                >
                  <img
                    src={googlePlayLogo}
                    alt="Google Play"
                    className="w-6 h-6"
                  />

                  <div className="flex flex-col items-start">
                    <span className="text-sm font-semibold">Google Play</span>
                  </div>
                </motion.a>

                {/* App Store Button */}
                <motion.a
                  href="https://apps.apple.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                 className="flex items-center gap-2 px-20 py-1 sm:px-5 sm:py-2 bg-blue-100 hover:bg-blue-300 text-black rounded-lg border border-white/20"
                 >
                  <img
                    src={appStoreLogo}
                    alt=" App Store "
                    className="w-7 h-6"
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-semibold">App Store</span>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}