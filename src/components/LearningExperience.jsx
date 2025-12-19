import { motion } from "framer-motion";
import start from "../assets/screens/start.PNG";
import start1 from "../assets/screens/start1.PNG";
import start2 from "../assets/screens/start2.PNG";
import start3 from "../assets/screens/start3.PNG";
// login img
import login from "../assets/screens/login.PNG";
// dashbord img
import dashbord from "../assets/screens/dashbord.PNG";
import bfgdashbord from "../assets/screens/beforlogin.PNG";
// Courses img
import course from "../assets/screens/courses.PNG";
import course1 from "../assets/screens/courseDetails.PNG";
import course2 from "../assets/screens/videos.PNG";

export default function LearningExperience() {
  const images = [
    { src: start, direction: "up" },
    { src: login, direction: "down" },
    { src: dashbord, direction: "up" },
    { src: course, direction: "down" },
    { src: course1, direction: "up" },
    { src: course2, direction: "down" },
  ];

  return (
    <section className="relative py-32 bg-blue-50">
      {/* 6 Images Horizontal Layout */}
      <div className="flex justify-center items-center gap-2 md:gap-10 flex-wrap">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img.src}
            className="w-36 md:w-44 h-auto cursor-pointer rounded-lg shadow-lg"
            initial={{
              opacity: 0,
              y: img.direction === "up" ? 100 : -100,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            whileHover={{
              scale: 1.05,
              y: -10,
              transition: { duration: 0.2 },
            }}
            transition={{
              duration: 1.2,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: false }}
          />
        ))}
      </div>

      {/* CENTER CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: false }}
        className="mt-20 max-w-3xl mx-auto text-center px-6"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-blue-500 mb-6">
          Best Learning Experience
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Learn with structured courses, real-world projects, progress tracking,
          and daily streaks — designed to keep you consistent and job-ready.
        </p>
      </motion.div>
    </section>
  );
}
