import hero3 from "../assets/hero/hero3.png";

export default function Feature({ title, desc, img, reverse }) {
  return (
    <section
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center gap-12 px-6 md:px-16 py-20`}
    >
      {/* IMAGE */}
      <div className="flex-1 flex justify-center">
        <img
          src={hero3}
          alt={title}
          className="w-full h-70  rounded-2xl shadow-xl"
        />
      </div>

      {/* TEXT */}
      <div className="flex-1">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-gray-600 max-w-md">
          {desc}
        </p>
      </div>
    </section>
  );
}
