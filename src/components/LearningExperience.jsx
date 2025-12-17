import { motion } from "framer-motion";
import java from "../assets/course/JAVA.png";
import python from "../assets/course/PYTHON.png";
import flutter from "../assets/course/FLUTTER.png";

export default function LearningExperience() {
  return (
    <section className="relative py-32 md:py-48 lg:py-60 bg-blue-50 overflow-hidden">

      {/* JAVA */}
      <motion.img
        src={java}
        className="absolute left-1/2 top-1/2 w-24 md:w-32 lg:w-36 hidden lg:block"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          x: [-180, -280, -520],
          y: [-60, -90, -240],
        }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false }}
      />

      {/* FLUTTER */}
      <motion.img
        src={flutter}
        className="absolute left-1/2 top-1/2 w-24 md:w-32 lg:w-36 hidden lg:block"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          x: [180, 280, 380],
          y: [-60, -90, -220],
        }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.1 }}
        viewport={{ once: false }}
      />

      {/* PYTHON */}
      <motion.img
        src={python}
        className="absolute left-1/2 top-1/2 w-28 md:w-32 lg:w-36 hidden lg:block"
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          x: [0, 0, -80],
          y: [100, 100, 180],
        }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false }}
      />

      {/* CENTER CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false }}
        className="relative z-10 max-w-3xl mx-auto text-center px-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mb-6 leading-tight">
          Best Learning <br /> Experience
        </h2>

        <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Learn Java, Python, and Flutter with structured courses, real-world
          projects, progress tracking, and daily streaks — designed to keep you
          consistent and job-ready.
        </p>
      </motion.div>
    </section>
  );
}
