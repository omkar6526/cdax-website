import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
      className="py-16 bg-blue-50 border-t border-gray-200"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">

          {/* TEXT BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
              Contact Us
            </h2>

            <p className="text-gray-600 leading-relaxed max-w-md">
              Have questions or need support? Our team is always here to help.
            </p>

            <div className="mt-8 text-gray-700 space-y-2">
              <p className="font-semibold">Crbix Solution (OPC) Pvt.Ltd </p>
              <p>+91 987xxxxxxx</p>
              <p>info@crbix.in</p>
            </div>
          </motion.div>

          {/* FORM BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-gray-50 p-6 md:p-8 rounded-2xl shadow-sm border w-full"
          >
            <form className="grid grid-cols-1 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border rounded-md focus:ring-2 focus:ring-brand-dark"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border rounded-md focus:ring-2 focus:ring-brand-dark"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="p-3 border rounded-md focus:ring-2 focus:ring-brand-dark"
              ></textarea>

              <button className="bg-brand-dark text-black px-8 py-3 rounded-lg font-semibold hover:bg-blue-500 transition">
                Send Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
