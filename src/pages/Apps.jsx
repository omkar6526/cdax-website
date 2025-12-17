import { motion } from "framer-motion";
import illustration from "../assets/Apps/chatbot.gif";
import consistent from "../assets/cdaxxlogo.png";
import AppOverView from "../components/AppOverView";
import start from "../assets/screens/start.PNG";
import start1 from "../assets/screens/start1.PNG";
import start2 from "../assets/screens/start2.PNG";
import start3 from "../assets/screens/start3.PNG";
import dashbord from "../assets/screens/dashbord.PNG";
import bfgdashbord from "../assets/screens/beforlogin.PNG";
import TrustedBy from "../components/TrustedBy";

// APP OVERVIEW SCREENS
const sections = [
  {
    images: [start, start1, start2, start3],
    title: "Welcome pages",
    desc: "Visual dashboards help you understand your learning journey.",
    reverse: false,
  },
  {
    images: [dashbord, bfgdashbord],
    title: "Login page",
    desc: "Secure and smooth login experience for users.",
    reverse: true,
  },
  {
    images: [dashbord, bfgdashbord],
    title: "Dashboard pages",
    desc: "Track your progress and daily learning streaks.",
    reverse: false,
  },
  {
    images: [start, start1, start2, start3],
    title: "Placement pages",
    desc: "Placement preparation with structured flow.",
    reverse: true,
  },
];

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeText = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const floatingImage = {
  animate: {
    y: [0, -14, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

// OTHER DOWNLOAD OPTIONS
const appOptions = [
  {
    platform: "Android",
    label: "Download for Android",
    desc: "Learn anytime anywhere with CDaX Android app.",
    note: "Requires Android 8+",
    link: "#",
  },
  {
    platform: "iOS",
    label: "Download on App Store",
    desc: "Smooth learning experience on iPhone.",
    note: "Requires iOS 12+",
    link: "#",
  },
  {
    platform: "iPadOS",
    label: "Download on App Store",
    desc: "Bigger screen, better learning.",
    note: "Requires iPadOS 15+",
    link: "#",
  },
];

export default function Apps() {
  return (
    <div className="bg-blue-50 overflow-x-hidden">
      {/* HERO */}
      <section className="min-h-screen px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 md:w-1/2 text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Download CDaX
            </h1>
            <p className="text-gray-700 text-base sm:text-lg">
              Start learning smarter with CDaX across your devices.
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mx-auto md:mx-0 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold w-fit"
              href="#"
            >
              Download for Windows
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src={illustration}
              alt="app"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl"
            />
          </motion.div>
        </div>
      </section>
      {/* Horizontal line for separation */}
      <div className="max-w-6xl mx-auto mt-1 border-t border-gray-300"></div>

      {/* OTHER OPTIONS */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Other Download Options
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {appOptions.map((app, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.05 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <h3 className="text-xl font-bold mb-2">{app.platform}</h3>
                <p className="text-gray-600 mb-3">{app.desc}</p>
                <p className="text-sm text-gray-500 mb-4">{app.note}</p>
                <a
                  href={app.link}
                  className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg"
                >
                  {app.label}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT APP */}
      <section className="bg-[#b5d5ff] px-4 sm:px-6 py-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            className="text-center md:text-left"
          >
            <motion.h2
              variants={fadeText}
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            >
              About Mobile Application
            </motion.h2>
            <motion.p variants={fadeText} className="max-w-md mx-auto md:mx-0">
              CDAXX helps you learn with structured courses, progress tracking
              and daily streaks.
            </motion.p>
          </motion.div>

          <motion.div
            variants={floatingImage}
            animate="animate"
            className="flex justify-center"
          >
            <img
              src={consistent}
              alt="logo"
              className="w-64 sm:w-72 md:w-80 rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* APP OVERVIEW */}
      {sections.map((item, i) => (
        <section
          key={i}
          className={`flex flex-col ${
            item.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center gap-12 px-4 sm:px-6 md:px-16 py-20`}
        >
          <div className="flex-1">
            <AppOverView images={item.images} />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              {item.title}
            </h3>
            <p className="text-gray-700 max-w-md mx-auto md:mx-0">
              {item.desc}
            </p>
          </div>
        </section>
      ))}

      <TrustedBy />
    </div>
  );
}
