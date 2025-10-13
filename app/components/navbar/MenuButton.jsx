"use client";

export default function MenuButton({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-white transition-colors"
      aria-label="Toggle menu"
    >
      <div className="w-6 h-6 flex flex-col justify-center space-y-1">
        <span
          className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition duration-300 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transform transition duration-300 ${
            isOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </div>
    </button>
  );
}
