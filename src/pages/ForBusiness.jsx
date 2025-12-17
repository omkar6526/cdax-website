import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ForBusiness() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="w-full px-6 md:px-20 py-20 flex flex-col md:flex-row gap-16 bg-blue-50 ">
        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get your demo
          </motion.h1>

          <motion.p
            className="text-gray-700 text-lg mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Tell us your needs and we’ll start on a custom learning plan to
            drive real business results.
          </motion.p>

          {/* FEATURES LIST */}
          <div className="flex flex-col gap-4 text-gray-700 mb-12">
            {[
              "Train your entire workforce with 30,000+ courses",
              "Prepare teams for industry-recognized certifications",
              "Hands-on real-world labs & projects",
              "Track skill gaps and learning progress",
              "Integrate with your existing LMS",
            ].map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-green-600 text-xl">✔</span>
                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          {/* TRUSTED BY */}
          <motion.div
            className="bg-white rounded-xl border shadow-md p-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-center text-gray-500 text-sm mb-6">
              Trusted by learners at top companies
            </p>

            <div className="flex justify-center items-center gap-6 md:gap-10">
              {[
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/500px-Microsoft_logo.svg.png",
                "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png",
                "https://pngimg.com/d/meta_PNG5.png",
              ].map((logo, i) => (
                <motion.img
                  key={i}
                  src={logo}
                  alt="company-logo"
                  className="h-7 md:h-8"
                  loading="lazy"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.08 }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT FORM ================= */}
        <motion.div
          className="md:w-1/2 bg-white shadow-xl p-8 md:p-10 rounded-2xl border"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.form
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <input
              className="border p-3 rounded-lg"
              placeholder="First Name *"
            />
            <input
              className="border p-3 rounded-lg"
              placeholder="Last Name *"
            />

            <input
              className="border p-3 rounded-lg md:col-span-2"
              placeholder="Work Email *"
            />

            <input
              className="border p-3 rounded-lg md:col-span-2"
              placeholder="Phone Number *"
            />

            <select className="border p-3 rounded-lg md:col-span-2">
              <option>Where are you located? *</option>
            </select>

            <input
              className="border p-3 rounded-lg md:col-span-2"
              placeholder="Company Name *"
            />

            <select className="border p-3 rounded-lg">
              <option>Company Size *</option>
            </select>

            <select className="border p-3 rounded-lg">
              <option>People to train *</option>
            </select>

            <select className="border p-3 rounded-lg">
              <option>Job Title *</option>
            </select>

            <select className="border p-3 rounded-lg">
              <option>Job Level *</option>
            </select>

            <textarea
              className="border p-3 rounded-lg md:col-span-2"
              rows={4}
              placeholder="What are your training needs?"
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="md:col-span-2 bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Submit Form
            </motion.button>
          </motion.form>
        </motion.div>
      </section>
    </>
  );
}
