export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">CDaX</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Learn skills for your present and future.
              Build consistency and grow with CDaX.
            </p>
          </div>

          {/* COURSES */}
          <div>
            <h3 className="text-white font-semibold mb-4">Courses</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Web Development</li>
              <li className="hover:text-white cursor-pointer">Java Programming</li>
              <li className="hover:text-white cursor-pointer">Data Science</li>
              <li className="hover:text-white cursor-pointer">UI / UX Design</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
              <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-white font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get updates on new courses and features.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition">
                Go
              </button>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gray-700 my-8" />

        {/* BOTTOM */}
        <div className="text-center text-gray-500 text-sm">
          @ {new Date().getFullYear()} CDaX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
