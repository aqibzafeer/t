"use client";

import SEOHead from "@/app/components/common/SEOHead";
import HeroSection from "@/app/components/sections/HeroSection";
import ContactInfoCard from "@/app/components/ContactInfoCard";
import SocialLinks from "@/app/components/SocialLinks";
import { CONTACT_INFO, SEO_CONTACT, CONTACT_HERO } from "@/app/constants/constants";

export default function ContactPage() {
  return (
    <>
      <SEOHead seo={SEO_CONTACT} />
      <main className="w-full bg-gray-50">
        <section aria-label="Contact Hero Section">
          <HeroSection data={CONTACT_HERO} />
        </section>

        <section  aria-labelledby="contact-info" className="py-16 px-6 md:px-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start" >
          <article id="contact-info">
            <ContactInfoCard info={CONTACT_INFO} />
            <SocialLinks links={CONTACT_INFO.socialLinks} />
          </article>

          <aside aria-label="Location Map">
            <iframe  src={CONTACT_INFO.mapEmbed} title="Ambala Tea Location Map" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-md border-0" ></iframe>
          </aside>
        </section>
      </main>
    </>
  );
}
