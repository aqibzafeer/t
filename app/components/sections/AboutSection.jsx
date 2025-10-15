import Image from "next/image";

export default function AboutSection({ data }) {
  return (
    <>
      {data.map((section, i) => (
        <section key={i} className="w-full bg-gray-50 py-16 px-6 md:px-16">
          <div className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${section.reverse ? "md:flex-row-reverse" : ""}`}>
            {!section.reverse && (
              <div className="flex justify-center">
                <Image  src={section.image} alt={section.title}  width={500}  height={400}  className="rounded-2xl shadow-lg object-cover w-full h-auto"/>
              </div>
            )}

            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4 flex items-center justify-center md:justify-start gap-3">  {section.icon} <span>{section.title}</span> </h2>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">  {section.text} </p>
            </div>

            {section.reverse && (
              <div className="flex justify-center">
                <Image  src={section.image}  alt={section.title} width={500} height={400} className="rounded-2xl shadow-lg object-cover w-full h-auto"/>
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}