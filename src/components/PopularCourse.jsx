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
  const [activeCard, setActiveCard] = useState(null);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [animate, setAnimate] = useState(true);

  const updateCardsPerView = () => {
    if (window.innerWidth < 640) return setCardsPerView(1);
    if (window.innerWidth < 1024) return setCardsPerView(2);
    setCardsPerView(3);
  };

  useEffect(() => {
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
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

  const extendedCourses = [...courses, ...courses];

  /* AUTO SLIDE */
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);
    return () => clearInterval(timer);
  }, [paused]);

  /*  SEAMLESS RESET */
  useEffect(() => {
    if (index === courses.length) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(0);
      }, 600);
    } else {
      setAnimate(true);
    }
  }, [index]);

  const getDownloadLink = () => {
    const ua = navigator.userAgent.toLowerCase();

    if (ua.includes("iphone") || ua.includes("ipad") || ua.includes("ipod")) {
      return "https://apps.apple.com";
    }
    if (ua.includes("mac os") || ua.includes("macintosh")) {
      return "https://apps.apple.com";
    }
    if (ua.includes("android")) {
      return "https://play.google.com/store";
    }
    return "https://play.google.com/store";
  };

  return (
    <section className="py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Popular Courses
        </h2>

        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${index * (100 / cardsPerView)}%` }}
            transition={animate ? { duration: 0.6 } : { duration: 0 }}
          >
            {extendedCourses.map((course, i) => (
              <div
                key={i}
                className="w-full sm:w-1/2 lg:w-1/3 px-4 shrink-0"
                onMouseEnter={() => {
                  setPaused(true);
                  setActiveCard(i);
                }}
                onMouseLeave={() => {
                  setPaused(false);
                  setActiveCard(null);
                }}
                onClick={() =>
                  window.innerWidth < 1024 &&
                  setActiveCard(activeCard === i ? null : i)
                }
              >
                <div className="h-64 perspective">
                  <motion.div
                    className="relative w-full h-full"
                    animate={{ rotateY: activeCard === i ? 180 : 0 }}
                    transition={{ duration: 0.7 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div
                      className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <img src={course.logo} className="w-20 h-20 mb-4" />
                      <h3 className="font-semibold">{course.name}</h3>
                    </div>

                    <div
                      className="absolute inset-0 bg-blue-400 text-white rounded-2xl flex flex-col items-center justify-center gap-4"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <p className="text-sm text-center">
                        Beginner to Advanced <br />
                        Live Projects • Certificate
                      </p>

                      <button
                        onClick={() => window.open(getDownloadLink(), "_blank")}
                        className="bg-white text-black px-5 py-2 rounded shadow hover:scale-105 transition"
                      >
                        Download App
                      </button>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`.perspective { perspective: 1200px; }`}</style>
    </section>
  );
}
