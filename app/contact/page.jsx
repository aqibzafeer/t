"use client";
import Head from "next/head";
import ContactInfoCard from "@/app/components/ContactInfoCard";
import SocialLinks from "@/app/components/SocialLinks";
import { CONTACT_INFO, SEO_CONTACT } from "@/app/constants/constants";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>{SEO_CONTACT.title}</title>
        <meta name="description" content={SEO_CONTACT.description} />
        <link rel="canonical" href={SEO_CONTACT.url} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={SEO_CONTACT.title} />
        <meta property="og:description" content={SEO_CONTACT.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SEO_CONTACT.url} />
        <meta property="og:image" content={SEO_CONTACT.image} />
      </Head>

      <script   type="application/ld+json"  dangerouslySetInnerHTML={{ __html: JSON.stringify(SEO_CONTACT.organization), }}/>
      <main className="relative w-full bg-gray-50 py-16 px-6 md:px-12">
        <div className="relative max-w-6xl mx-auto text-center mb-12 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-red-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto"> We’d love to hear from you! Whether you have questions, feedback, or partnership inquiries, our team is here to help. </p>
        </div>

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 z-10">
          <div>
            <ContactInfoCard info={CONTACT_INFO} />
            <SocialLinks links={CONTACT_INFO.socialLinks} />
          </div>
        
          <div className="w-full h-[400px] md:h-auto rounded-2xl overflow-hidden shadow-md">
            <iframe src={CONTACT_INFO.mapEmbed}  width="600" height="450"  loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Ambala Tea Location Map"  className="w-full h-full"></iframe>
          </div>
        </div>
      </main>
    </>
  );
}