import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import java from "../assets/course/JAVA.png";
import python from "../assets/course/PYTHON.png";
import flutter from "../assets/course/FLUTTER.png";
import UiUx from "../assets/course/UiUx.jpg";
import AiMl from "../assets/course/AiMll.png";
import SQL from "../assets/course/SQL.png";
import ReactLogo from "../assets/course/REACT.png";

export default function PopularCourse() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [device, setDevice] = useState("desktop");
  const [activeCard, setActiveCard] = useState(null);

  /* ✅ DEVICE DETECTION */
  useEffect(() => {
    const ua = navigator.userAgent;
    if (/android|iphone|ipad|ipod/i.test(ua)) {
      setDevice("mobile");
    } else {
      setDevice("desktop");
    }
  }, []);

  const courses = [
    { name: "UI / UX", logo: UiUx },
    { name: "AI / ML", logo: AiMl },
    { name: "Java", logo: java },
    { name: "Python", logo: python },
    { name: "Flutter", logo: flutter },
    { name: "SQL", logo: SQL },
    { name: "React", logo: ReactLogo },
  ];

  /* ✅ AUTO SLIDER */
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % courses.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Popular Courses
        </h2>

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x:
                device === "mobile"
                  ? `-${index * 100}%`
                  : `-${index * 33.33}%`,
            }}
            transition={{ duration: 0.6 }}
          >
            {courses.map((course, i) => (
              <div
                key={i}
                className="w-full sm:w-1/2 lg:w-1/3 px-4 shrink-0"
                onMouseEnter={() => {
                  setPaused(true);
                  if (device === "desktop") setActiveCard(i);
                }}
                onMouseLeave={() => {
                  setPaused(false);
                  if (device === "desktop") setActiveCard(null);
                }}
                onClick={() => {
                  if (device === "mobile") {
                    setActiveCard(activeCard === i ? null : i);
                  }
                }}
              >
                <div className="h-64 perspective">
                  <motion.div
                    className="relative w-full h-full"
                    animate={{ rotateY: activeCard === i ? 180 : 0 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* FRONT */}
                    <div
                      className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <img src={course.logo} className="w-20 h-20 mb-4" />
                      <h3 className="font-semibold text-lg">
                        {course.name}
                      </h3>
                      {device === "mobile" && (
                        <p className="text-xs mt-2 text-gray-500">
                          Tap to view details
                        </p>
                      )}
                    </div>

                    {/* BACK */}
                    <div
                      className="absolute inset-0 bg-blue-400 text-white rounded-2xl flex flex-col items-center justify-center gap-3 px-4"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <p className="text-sm text-center">
                        Beginner to Advanced <br />
                        Live Projects • Certificate
                      </p>
                      <button className="bg-white text-black px-4 py-2 rounded">
                        Download Now
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>
        {`
          .perspective {
            perspective: 1200px;
          }
        `}
      </style>
    </section>
  );
}
