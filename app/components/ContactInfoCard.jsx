"use client";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfoCard({ info }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-8 flex flex-col justify-center text-left">
      <h2 className="text-2xl font-semibold text-red-900 mb-6">Get in Touch</h2>

      <div className="space-y-6 text-gray-700">
        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-red-900 text-xl mt-1" />
          <div>
            <p className="font-medium text-gray-900">Our Office</p>
            <address className="text-sm not-italic">
              {info.company}, <br /> {info.address.street}, {info.address.city}
            </address>
          </div>
        </div>

  
        <div className="flex items-start gap-3">
          <FaPhoneAlt className="text-red-900 text-xl mt-1" />
          <div>
            <p className="font-medium text-gray-900">Call Us</p>
            <p className="text-sm">
              Mobile:<a href={`tel:${info.phone.mobile}`} className="hover:underline">
                {info.phone.mobile.replace("+92", "0")}
              </a>
            </p>
            <p className="text-sm">
              Landline:{" "}
              <a href={`tel:${info.phone.landline}`} className="hover:underline">
                051-4447353
              </a>
            </p>
          </div>
        </div>

        {/* Emails */}
        <div className="flex items-start gap-3">
          <FaEnvelope className="text-red-900 text-xl mt-1" />
          <div>
            <p className="font-medium text-gray-900">Email Us</p>
            {info.emails.map((email) => (
              <p key={email} className="text-sm">
                <a href={`mailto:${email}`} className="hover:underline">
                  {email}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
