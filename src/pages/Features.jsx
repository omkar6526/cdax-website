import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Users,
  Radio,
  Bot,
  Camera,
  ShieldCheck,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Calling",
    desc: "Stay connected with voice and video.",
  },
  {
    icon: MessageCircle,
    title: "Messaging",
    desc: "Say it with stickers, voice, GIFs and more.",
  },
  {
    icon: Users,
    title: "Groups",
    desc: "Messaging features you need to connect in groups.",
  },
  {
    icon: Radio,
    title: "Multiple Courses",
    desc: "Stay updated on topics you care about.",
  },
  {
    icon: Bot,
    title: "ChatBot AI",
    desc: "Get help with anything, all with safety and privacy.",
  },
  {
    icon: Camera,
    title: "Progress",
    desc: "Share your everyday with photos, videos and notes.",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    desc: "Layers of protection to help you stay safe.",
  },
  {
    icon: Lock,
    title: "Lock the course",
    desc: "Watch One by One video then Unlcok Next.",
  },
];

export default function Features() {
  return (
    <section className="bg-blue-50 px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-center mb-14"
        >
          Features
        </motion.h1>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white border border-gray-200 rounded-3xl p-7 cursor-pointer"
              >
                {/* ICON */}
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center mb-6">
                  <Icon size={22} className="text-white" />
                </div>

                {/* TEXT */}
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
