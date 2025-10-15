export default function ValuesSection({ data }) {
  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4 flex items-center justify-center gap-2">
          {data.icon} {data.title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {data.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.items.map((item, i) => (
          <div
            key={i}
            className="bg-red-50 hover:bg-red-100 transition-all duration-300 p-8 rounded-2xl shadow-md text-center hover:shadow-xl hover:scale-105"
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-red-900 mt-4 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}