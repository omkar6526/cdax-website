import { motion } from "framer-motion";

export default function WhyCDaX() {
  return (
    <section className="py-28 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-10 font-heading"
        >
          Why Choose CDaX?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Expert Courses", "Hands-on Projects", "Career Support"].map((t, i) => (
            <motion.div
              key={i}
              className="bg-white/80 p-8 rounded-2xl shadow-lg"
              whileHover={{ y: -10, scale: 1.06, boxShadow: "0 25px 50px rgba(0,0,0,0.15)" }}
            >
              <h3 className="text-xl font-semibold mb-3">{t}</h3>
              <p className="text-gray-600 text-sm">Designed to help you grow faster and smarter.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
