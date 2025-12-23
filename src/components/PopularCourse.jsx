import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import java from "../assets/course/JAVA.png";
import python from "../assets/course/PYTHON.png";
import flutter from "../assets/course/FLUTTER.png";
import UiUx from "../assets/course/UiUx.jpg";
import AiMl from "../assets/course/AiMll.png";
import googlePlayLogo from "../assets/playstorelogo.png";
import appStoreLogo from "../assets/appstorelogo.png";

export default function PopularCourse() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [device, setDevice] = useState("desktop");
  const [flipped, setFlipped] = useState(null);
  const [cardsToShow, setCardsToShow] = useState(3);

  /* ✅ DEVICE DETECTION & RESPONSIVE CARDS */
  useEffect(() => {
    const ua = navigator.userAgent;
    if (/android/i.test(ua)) setDevice("android");
    else if (/iPhone|iPad|iPod/i.test(ua)) setDevice("ios");
    else setDevice("desktop");

    const handleResize = () => {
      if (window.innerWidth < 640) setCardsToShow(1); // mobile
      else if (window.innerWidth < 1024) setCardsToShow(2); // tablet
      else setCardsToShow(3); // desktop
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const courses = [
    { name: "UI / UX", logo: UiUx },
    { name: "AI / ML", logo: AiMl },
    { name: "Java", logo: java },
    { name: "Python", logo: python },
    { name: "Flutter", logo: flutter },
  ];

  const extendedCourses = [...courses, ...courses];

  /* ✅ AUTO-SLIDE CAROUSEL */
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2500);
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

        <div className="py-6 overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              transform: `translate3d(-${index * (100 / cardsToShow)}%, 0, 0)`,
            }}
            transition={animate ? { duration: 0.8, ease: "easeInOut" } : { duration: 0 }}
          >
            {extendedCourses.map((course, i) => (
              <div
                key={i}
                className={`basis-1/${cardsToShow} shrink-0 px-5`}
                onMouseEnter={() => device === "desktop" && setIsPaused(true)}
                onMouseLeave={() => device === "desktop" && setIsPaused(false)}
              >
                <div className="relative h-64 [perspective:1200px]">
                  <motion.div
                    className="relative w-full h-full rounded-2xl cursor-pointer"
                    animate={{ rotateY: flipped === i ? 180 : 0 }}
                    transition={{ duration: 0.7 }}
                    style={{
                      transformStyle: "preserve-3d",
                      pointerEvents: "auto", // ensures hover works
                    }}
                    onMouseEnter={() => device === "desktop" && setFlipped(i)}
                    onMouseLeave={() => device === "desktop" && setFlipped(null)}
                    onClick={() => device !== "desktop" && setFlipped(flipped === i ? null : i)}
                  >
                    {/* FRONT */}
                    <div
                      className="absolute inset-0 bg-white rounded-2xl shadow-md flex flex-col items-center justify-center"
                      style={{ backfaceVisibility: "hidden" }}
                    >
                      <img src={course.logo} alt={course.name} className="w-20 h-20 mb-4" />
                      <h3 className="font-semibold">{course.name}</h3>
                    </div>

                    {/* BACK */}
                    <div
                      className="absolute inset-0 bg-blue-400 text-white rounded-2xl flex flex-col items-center justify-center gap-3"
                      style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                      }}
                    >
                      <p className="text-sm text-center">
                        Beginner to Advanced <br />
                        Live Projects • Certificate
                      </p>

                      {/* ANDROID */}
                      {device === "android" && (
                        <a
                          href="https://play.google.com/store"
                          target="_blank"
                          className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded"
                        >
                          <img src={googlePlayLogo} className="w-6" />
                          Google Play
                        </a>
                      )}

                      {/* IOS */}
                      {device === "ios" && (
                        <a
                          href="https://apps.apple.com"
                          target="_blank"
                          className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded"
                        >
                          <img src={appStoreLogo} className="w-6" />
                          App Store
                        </a>
                      )}

                      {/* DESKTOP → SHOW BOTH */}
                      {device === "desktop" && (
                        <div className="flex gap-3">
                          <a
                            href="https://play.google.com/store"
                            target="_blank"
                            className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded"
                          >
                            Download Now
                          </a>
                        </div>
                      )}
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
