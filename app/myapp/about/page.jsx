"use client";

export default function AboutPage() {
  return (
    <section className="w-full bg-gray-50">
      {/* 🍵 Hero Section */}
      <div
        className="relative w-full h-[70vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-section-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-white max-w-2xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            About Ambala Tea
          </h1>
          <p className="text-gray-200 text-lg">
            Crafted with passion, inspired by tradition, and perfected by nature — Ambala Tea brings wellness in every cup.
          </p>
        </div>
      </div>

      {/* 🍂 Our Story Section */}
      <div className="max-w-6xl mx-auto py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-red-900">Our Story</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Founded with a deep love for tea, <span className="font-semibold">Ambala Tea</span> began as a small family venture
            dedicated to producing pure, organic, and aromatic blends from the heart of nature.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We source our leaves from the most fertile tea gardens, ensuring that every cup you brew carries a promise of health,
            harmony, and happiness.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/about.webp"
            alt="Ambala Tea Story"
            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>

    
    </section>
  );
}
