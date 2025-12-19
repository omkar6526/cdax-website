import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import java from "../assets/course/JAVA.png";
import python from "../assets/course/PYTHON.png";
import flutter from "../assets/course/FLUTTER.png";
import UiUx from "../assets/course/UiUx.jpg";
import AiMl from "../assets/course/AiMll.png";

const courses = [
  { name: "Java", logo: java, link: "/downlod" },
  { name: "Python", logo: python, link: "/downlod" },
  { name: "Flutter", logo: flutter, link: "/downlod" },
  { name: "UI / UX", logo: UiUx, link: "/downlod" },
  { name: "AI / ML", logo: AiMl, link: "/downlod" },
];

const extendedCourses = [...courses, ...courses];

export default function PopularCourse() {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    if (index === courses.length) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 700);
    } else {
      setAnimate(true);
    }
  }, [index]);

  return (
    <section className="py-28 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">Our Popular Courses</h2>

        <div className=" py-6">
          <motion.div
            className="flex will-change-transform"
            animate={{ x: `-${index * (100 / 3)}%` }}
            transition={
              animate
                ? { duration: 0.8, ease: "easeInOut" }
                : { duration: 0 }
            }
          >
            {extendedCourses.map((course, i) => (
              <div
                key={i}
                className="basis-1/3 shrink-0 px-5"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
              >
                <motion.button
                  onClick={() => navigate(course.link)}
                  whileHover={{
                    scale: 1.05,
                    zIndex: 20,
                    boxShadow: "0 30px 60px rgba(0,0,0,0.18)",
                    borderColor: "#2563eb",
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="relative w-full bg-white p-8 rounded-2xl shadow-md flex flex-col items-center border-2 border-transparent cursor-pointer focus:outline-none"
                >
                  <img
                    src={course.logo}
                    alt={course.name}
                    className="w-20 h-20 mb-4 object-contain"
                  />
                  <h3 className="text-lg font-semibold">
                    {course.name}
                  </h3>
                </motion.button>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
