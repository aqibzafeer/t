"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <section className="relative w-full bg-gray-50 py-16 px-6 md:px-12">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-50/60 to-white/60 pointer-events-none"></div>

      {/* Header */}
      <div className="relative max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">
          Contact Us
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We’d love to hear from you! Whether you have questions, feedback, or
          partnership inquiries, our team is here to help.
        </p>
      </div>

      {/* Content grid: Contact info + Map */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info Section */}
        <div className="bg-white shadow-md rounded-2xl p-8 flex flex-col justify-center text-left">
          <h2 className="text-2xl font-semibold text-red-900 mb-6">
            Get in Touch
          </h2>

          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-red-900 text-xl mt-1" />
              <div>
                <p className="font-medium text-gray-900">Our Office</p>
                <p className="text-sm">
                  Ambala Tea Company,
                  <br /> I-11/4 Islamabad
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-red-900 text-xl mt-1" />
              <div>
                <p className="font-medium text-gray-900">Call Us</p>
                <p className="text-sm">
                  Phone:{" "}
                  <a
                    href="tel:+923004447353"
                    className="hover:underline"
                    aria-label="Call Ambala Tea mobile number"
                  >
                    0300-4447353
                  </a>
                </p>
                <p className="text-sm">
                  Landline:{" "}
                  <a
                    href="tel:+92514447353"
                    className="hover:underline"
                    aria-label="Call Ambala Tea landline number"
                  >
                    051-4447353
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="text-red-900 text-xl mt-1" />
              <div>
                <p className="font-medium text-gray-900">Email Us</p>
                <p className="text-sm">
                  <a
                    href="mailto:info@ambalafoodproducts.com"
                    className="hover:underline"
                  >
                    info@ambalafoodproducts.com
                  </a>
                  <br />
                  <a
                    href="mailto:ambalafoodproducts@gmail.com"
                    className="hover:underline"
                  >
                    ambalafoodproducts@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <p className="text-gray-600 mb-3 text-sm">Follow us on:</p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/AmbalaFoodProducts/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-red-100 text-red-900 hover:bg-red-900 hover:text-white transition duration-300"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://wa.me/+923004447353"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-red-100 text-red-900 hover:bg-red-900 hover:text-white transition duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.instagram.com/ambalafoodproducts/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-red-100 text-red-900 hover:bg-red-900 hover:text-white transition duration-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/@ambalafoodproducts3688"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-red-100 text-red-900 hover:bg-red-900 hover:text-white transition duration-300"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Google Map */}
        <div className="w-full h-[400px] md:h-auto rounded-2xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1730918499462!6m8!1m7!1s!2m2!1d33.6372068!2d73.0248201!3f0!4f0!5f0.7820865974627469"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ambala Tea Company Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
