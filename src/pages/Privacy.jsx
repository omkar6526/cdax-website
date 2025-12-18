import React from "react";
import { motion } from "framer-motion";

const Section = ({ title, children, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="bg-white rounded-2xl shadow-md p-6 mb-6"
  >
    <h2 className="text-xl font-semibold mb-3 text-gray-800">{title}</h2>
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </motion.div>
);

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Privacy Policy</h1>
          <p className="text-sm text-gray-500">Last updated: 18 December 2025</p>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto">
            Welcome to <strong>Your Learning Platform</strong>. We respect your
            privacy and are committed to protecting your personal information
            while you learn and grow with our IT courses.
          </p>
        </motion.div>

        {/* Sections */}
        <Section title="1. Information We Collect" delay={0.1}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Personal information such as name and email address</li>
            <li>Account details including enrolled courses and progress</li>
            <li>Usage data to understand how learners interact with the platform</li>
            <li>Technical data like browser type and device information</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information" delay={0.2}>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide seamless access to IT learning content</li>
            <li>Improve course quality and user experience</li>
            <li>Send important updates, alerts, or support responses</li>
            <li>Maintain platform safety and prevent misuse</li>
          </ul>
        </Section>

        <Section title="3. Cookies & Tracking" delay={0.3}>
          <p>
            We use cookies to personalize your learning experience and analyze
            platform performance. You can control or disable cookies anytime
            through your browser settings.
          </p>
        </Section>

        <Section title="4. Data Sharing & Disclosure" delay={0.4}>
          <p>
            We do not sell, trade, or rent your personal information. Data may be
            shared only when required by law or to protect our platform and users.
          </p>
        </Section>

        <Section title="5. Data Security" delay={0.5}>
          <p>
            We use industry-standard security measures to safeguard your data.
            However, no digital platform can guarantee complete security.
          </p>
        </Section>

        <Section title="6. Children’s Privacy" delay={0.6}>
          <p>
            Our services are designed for individuals interested in IT skills.
            We do not knowingly collect personal data from children under 13.
          </p>
        </Section>

        <Section title="7. Policy Updates" delay={0.7}>
          <p>
            This Privacy Policy may be updated periodically. Any changes will be
            reflected on this page with a revised update date.
          </p>
        </Section>

        <Section title="8. Contact Us" delay={0.8}>
          <p>
            <strong>Email:</strong> support@crbix.in <br />
            <strong>Website:</strong> www.cdaxxsupport.com
          </p>
        </Section>
      </div>
    </div>
  );
}