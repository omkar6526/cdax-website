import { motion } from "framer-motion";
import comingSoonImg from "../assets/course/commingsoon.png";

export default function AppLink() {
  return (
    <div className="bg-gray-100 px-4 pt-12 text-center min-h-screen">
      {/* IMAGE */}
      <motion.img
        src={comingSoonImg}
        alt="Coming Soon"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-72 md:w-96 mb-8 mx-auto"
      />

      {/* SUBTITLE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-700 text-lg max-w-xl mx-auto"
      >
        Our CdaxApp or Web App is on the way! Stay tuned.
      </motion.p>
    </div>
  );
}
