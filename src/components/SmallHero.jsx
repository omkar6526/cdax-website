import { motion } from "framer-motion";
import consistent from "../assets/Apps/chatbot.gif";
import { Link } from "react-router-dom";

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeText = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const floatingImage = {
  animate: {
    y: [0, -14, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function SmallHero() {
  return (
    <section className="bg-[#b5d5ff] flex flex-col md:flex-row items-center gap-16 px-6 md:px-16 py-10">
      <motion.div
        className="flex-1"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        <motion.h1 variants={fadeText} className="text-4xl md:text-5xl font-bold mb-8 font-heading tracking-tight">
          Learn better. <br /> Stay consistent.
        </motion.h1>
        <motion.p variants={fadeText} className="text-gray-700 mb-6 max-w-md">
          CDAXX helps you learn with structured courses, progress tracking and daily streaks — all in one app.
        </motion.p>
        <motion.div variants={fadeText} className="flex gap-4">
            <Link to="/downlod">
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-xl">
            Get CdaxApp
          </motion.button>
          </Link>
          <Link to="/Apps">
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="hidden sm:block px-8 py-3 rounded-full border border-blue-600 font-medium">
            How it works
          </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div className="flex-1 flex justify-center" variants={floatingImage} animate="animate" whileHover={{ scale: 1.05 }}>
        <img src={consistent} alt="app" className="w-80 rounded-2xl" />
      </motion.div>
    </section>
  );
}
