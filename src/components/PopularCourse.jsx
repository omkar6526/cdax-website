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

  /* Auto slide */
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(timer);
  }, [isPaused]);

  /* Infinite loop logic */
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
        <h2 className="text-4xl font-bold mb-12">
          Our Popular Courses
        </h2>

        <div className="py-6 overflow-hidden">
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
                {/* 3D FLIP CARD */}
                <div className="relative h-64 [perspective:1200px]">
                  <motion.div
                    className="relative w-full h-full rounded-2xl"
                    whileHover={{ rotateY: 180 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* FRONT SIDE */}
                    <div
                      className="absolute inset-0 bg-white p-8 rounded-2xl shadow-md flex flex-col items-center justify-center border-2 border-transparent"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <img
                        src={course.logo}
                        alt={course.name}
                        className="w-20 h-20 mb-4 object-contain"
                      />
                      <h3 className="text-lg font-semibold">
                        {course.name}
                      </h3>
                    </div>

                    {/* BACK SIDE */}
                    <div
                      className="absolute inset-0 bg-blue-400 text-white p-8 rounded-2xl flex flex-col items-center justify-center"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <h3 className="text-xl font-bold mb-3">
                        {course.name}
                      </h3>

                      <p className="text-sm text-center mb-4 opacity-90">
                        Beginner to Advanced <br />
                        Live Projects • Certificate
                      </p>

                      <button
                        onClick={() => navigate(course.link)}
                        className="px-6 py-2 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition"
                      >
                        View Course
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
