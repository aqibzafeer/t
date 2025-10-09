"use client";

export default function ContactPage() {
  return (
    <section className="relative w-full bg-gray-50 py-16 px-6 md:px-12">
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/40 to-emerald-50/40 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have questions, feedback, or partnership inquiries,
          our team is here to help.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white shadow-md rounded-2xl p-8 flex flex-col justify-center text-left">
          <h2 className="text-2xl font-semibold text-red-900 mb-6">Get in Touch</h2>

          <div className="space-y-5 text-gray-700">
            <div>
              <p className="font-medium text-gray-900">Email</p>
              <p className="text-sm">hello@ambalatea.example</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Phone</p>
              <p className="text-sm">+1 (555) 123-4567</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Address</p>
              <p className="text-sm">123 Wellness Street, Ambala City, India</p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-600 text-sm">
              We aim to respond within 24 hours. Thank you for connecting with Ambala Tea.
            </p>
          </div>
        </div>

        <form className="bg-white shadow-md rounded-2xl p-8 space-y-5">
          <h2 className="text-2xl font-semibold text-red-900 mb-4">
            Send Us a Message
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-900 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-red-900 outline-none"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-red-900 outline-none"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-red-900 outline-none resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-red-900 text-white py-3 rounded-lg font-semibold hover:bg-red-900 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
