import { useState } from "react";
import { motion } from "framer-motion";

export default function Applink() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const res = await fetch("http://localhost:8080/api/auth/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (res.ok) {
  //       alert("Registration Successful 🎉 APK link sent on phone");
  //       setFormData({
  //         name: "",
  //         email: "",
  //         password: "",
  //         number: "",
  //       });
  //     } else {
  //       alert("Registration Failed ❌");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     alert("Server Error");
  //   }
  // };

  return (
    <div className="min-h-screen flex items-start justify-center bg-blue-50 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="p-8 rounded-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">
          Register Now
        </h2>

        {/* <form onSubmit={handleSubmit} className="space-y-6"> */}
        <form  className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg"
          />

          <input
            type="tel"
            name="number"
            placeholder="91XXXXXXXX"
            value={formData.number}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-lg"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
          >
            Register
          </button>
        </form>
      </motion.div>
    </div>
  );
}
