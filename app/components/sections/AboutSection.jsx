import Image from "next/image";

export default function AboutSection({ data }) {
  return (
    <>
      {data.map((section, i) => (
        <section key={i} className="w-full bg-gray-50 py-16 px-6 md:px-16">
          <div
            className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
              section.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            {!section.reverse && (
              <div className="flex justify-center">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover w-full h-auto"
                />
              </div>
            )}

            {/* Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4 flex items-center gap-2">
                {section.icon} {section.title}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {section.text}
              </p>
            </div>

            {/* Image on reverse */}
            {section.reverse && (
              <div className="flex justify-center">
                <Image
                  src={section.image}
                  alt={section.title}
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-lg object-cover w-full h-auto"
                />
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}