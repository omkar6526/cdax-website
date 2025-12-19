import { motion } from "framer-motion";
import consistent from "../assets/Apps/chatbot.gif";
import { Star } from "lucide-react";
import BigHero from "../components/BigHeroCarousel";
import LearningExperience from "../components/LearningExperience";
import TrustedBy from "../components/TrustedBy";
import SmallHero from "../components/SmallHero";
import WhyCDaX from "../components/PopularCourse";
import ContactUs from "../components/ContactUs";
import { Link } from "react-router-dom";
import logo from "../assets/cdaxxlogo.png";
import ChatBot from "../components/ChatBot";
import PopularCourse from "../components/PopularCourse";

/* GLOBAL ANIMATION VARIANTS */

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeText = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const scrollMorph = {
  hidden: { opacity: 0, y: 90, scale: 0.92, borderRadius: "60px" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    borderRadius: "16px",
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const floatingImage = {
  animate: {
    y: [0, -14, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

/*  COMPONENT  */
export default function HomeSections() {
  return (
    <div className="bg-[#d8d8d8] overflow-hidden font-body">
      <ChatBot />
      {/*  HERO GLOW */}
      <section className="relative">
        <motion.div
          initial={{ scale: 1.2, borderRadius: "50%" }}
          animate={{ scale: 1, borderRadius: "24px" }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl"
        />
        <div className="relative z-10">
          <BigHero />
        </div>
      </section>
      <LearningExperience />

      {/* MAIN HERO */}
      <SmallHero />

      {/* WHY CDAX */}
      <PopularCourse />

      {/* CDaX  */}
      <section className="py-16 bg-gradient-to-r bg-[#b5d5ff] text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-2 font-heading"
        >
          Start Your Learning Journey Today On
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center mb-4"
        >
          <img
            src={logo}
            alt="CDaX Logo"
            className="h-20 md:h-24 w-auto drop-shadow-xl"
          />
        </motion.div>

        <Link to="/downlod">
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.9 }}
            className="px-10 py-4 bg-blue-700 text-black-600 font-semibold rounded-full shadow-2xl"
          >
            Get Started
          </motion.button>
        </Link>
      </section>

      {/*  SUCCESS STORIES  */}
      <section className="py-24 bg-blue-50 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-14 font-heading">
            Student Success Stories
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="bg-gray-50 p-6 rounded-2xl shadow"
                whileHover={{
                  rotateX: 4,
                  rotateY: -4,
                  scale: 1.05,
                }}
              >
                <p className="italic text-gray-700 mb-4">
                  "This platform changed my career completely."
                </p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED */}
      <TrustedBy />

      {/* CONTACT US */}
      <ContactUs />
    </div>
  );
}
