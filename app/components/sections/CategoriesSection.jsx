export default function CategoriesSection({ data }) {
  return (
    <section className="w-full py-16 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-red-800 mb-4 flex items-center justify-center gap-2">
          {data.icon} {data.title}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {data.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.items.map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 hover:bg-red-50 transition-all duration-300 rounded-xl shadow-md hover:shadow-xl p-6 flex flex-col items-center text-center hover:scale-105"
          >
            {item.icon}
            <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
              {item.name}
            </h3>
            <p className="text-gray-600 text-sm">
              Experience the authentic taste and aroma of {item.name}.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}