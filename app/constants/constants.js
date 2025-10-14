// app/constants/constant.js

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export const SHOP = { href: "/products", label: "Cart" };

// Home
import { FaLeaf, FaSpa, FaHeart, FaMugHot } from "react-icons/fa";
import { GiHerbsBundle, GiTeapot } from "react-icons/gi";
import { MdLocalDrink } from "react-icons/md";
import { TbPlant } from "react-icons/tb";

export const HERO = {
  title: "Healthy Beverage",
  description: "Our wellness journeys begin as small steps which become straightforward over time. Regular consumption of two cups of Ambala Tea every day assists in supporting your health foundation.",
  background: "/hero-section-bg.jpg",
  buttonText: "About Us",
  buttonHref: "/about",
};

export const ABOUT = [
  {
    title: "About Us",
    icon: <FaLeaf className="text-red-700" />,
    image: "/about.webp",
    reverse: false,
    text: `At Ambala Tea, we believe wellness starts with a single sip. Our teas are crafted
    with nature’s finest herbs, providing the nourishment your body needs to thrive
    every day. Regular consumption of two cups of Ambala Tea every day assists in
    supporting your health foundation.`,
  },
  {
    title: "Our Story",
    icon: <GiTeapot className="text-red-700" />,
    image: "/about.webp",
    reverse: true,
    text: `Our journey began with a passion for wellness and the art of brewing tea.
    Each cup of Ambala Tea carries the warmth of tradition and the purity of
    natural ingredients — perfect for energizing your mornings and calming your evenings.`,
  },
];

export const VALUES = [
  {
    title: "Purity",
    desc: "We use only natural ingredients, free from additives or artificial flavors.",
    icon: <GiHerbsBundle className="text-red-700 text-5xl mx-auto" />,
  },
  {
    title: "Tradition",
    desc: "We honor the timeless art of tea making passed down through generations.",
    icon: <GiTeapot className="text-red-700 text-5xl mx-auto" />,
  },
  {
    title: "Wellness",
    desc: "Each blend is crafted to boost health, energy, and inner balance.",
    icon: <FaSpa className="text-red-700 text-5xl mx-auto" />,
  },
];

export const CATEGORIES = [
  { name: "Green Tea", icon: <FaLeaf className="text-red-700 text-5xl" /> },
  { name: "Black Tea", icon: <FaMugHot className="text-red-700 text-5xl" /> },
  { name: "Herbal Tea", icon: <TbPlant className="text-red-700 text-5xl" /> },
  { name: "Special Blend", icon: <GiTeapot className="text-red-700 text-5xl" /> },
];

export const JOIN = {
  title: "Join Our Tea Journey",
  description: "Experience the purity of nature in every sip. Explore our blends and discover your new favorite tea today.",
  buttonText: "Explore Our Products",
  buttonHref: "/products",
};


//Products

// app/lib/products.js
export const PRODUCTS = [
  {
    id: "1",
    name: "Ambala Tea 230 Gms",
    price: "400",
    short: "A rich blend of black tea and aromatic spices",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/about.webp",
    ingredients: "Black Tea, Cardamom, Cinnamon, Ginger, Cloves, Pepper",
    specifications: [
      { key: "Weight", value: "230 Gms" },
      { key: "Type", value: "Black Tea" },
      { key: "Flavor", value: "Spicy" },
    ],
  },
  {
    id: "2",
    name: "Ambala Tea 430 Gms",
    price: "790",
    short: "Refreshing and light, our green tea is full of antioxidants",
    description:      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/about.webp",
    ingredients: "Green Tea, Lemongrass, Mint, Chamomile",
    specifications: [
      { key: "Weight", value: "430 Gms" },
      { key: "Type", value: "Green Tea" },
      { key: "Flavor", value: "Light & Refreshing" },
    ],
  },
  {
    id: "3",
    name: "Ambala Tea 900 Gms",
    price: "1,550",
    short: "Caffeine-free herbal blend to calm your senses",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "/about.webp",
    ingredients: "Rooibos, Hibiscus, Rose Hips, Orange Peel, Cinnamon",
    specifications: [
      { key: "Weight", value: "900 Gms" },
      { key: "Type", value: "Herbal Tea" },
      { key: "Flavor", value: "Fruity & Spicy" },
    ],
  },
];


// Contact Us
export const CONTACT_INFO = {
  company: "Ambala Tea Company",
  address: {
    street: "I-11/4",
    city: "Islamabad",
    postalCode: "44000",
    country: "PK",
  },
  phone: {
    mobile: "+923004447353",
    landline: "+92514447353",
  },
  emails: [
    "info@ambalafoodproducts.com",
    "ambalafoodproducts@gmail.com",
  ],
  socialLinks: [
    { name: "Facebook", icon: "FaFacebookF", href: "https://www.facebook.com/AmbalaFoodProducts/" },
    { name: "WhatsApp", icon: "FaWhatsapp", href: "https://wa.me/+923004447353" },
    { name: "Instagram", icon: "FaInstagram", href: "https://www.instagram.com/ambalafoodproducts/" },
    { name: "YouTube", icon: "FaYoutube", href: "https://www.youtube.com/@ambalafoodproducts3688" },
  ],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.2361105526716!2d73.02674653607507!3d33.63799881413352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95b1c46e0b7b%3A0xd9ee5d673af982eb!2sI-11%2F4%20I%2011%2F4%20I-11%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1760375279501!5m2!1sen!2sus",
};

export const SEO_CONTACT = {
  title: "Contact Ambala Tea | Premium Tea Company in Islamabad",
  description:
    "Contact Ambala Tea for inquiries, orders, and support. Visit our office in I-11/4 Islamabad or reach us via phone, email, or WhatsApp.",
  url: "https://yourwebsite.com/contact",
  image: "https://yourwebsite.com/logo.png",
  organization: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Ambala Tea Company",
    image: "https://yourwebsite.com/logo.png",
    telephone: "+923004447353",
    email: "info@ambalafoodproducts.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "I-11/4",
      addressLocality: "Islamabad",
      postalCode: "44000",
      addressCountry: "PK",
    },
    url: "https://yourwebsite.com",
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "$$",
    sameAs: [
      "https://www.facebook.com/AmbalaFoodProducts/",
      "https://www.instagram.com/ambalafoodproducts/",
      "https://wa.me/+923004447353",
      "https://www.youtube.com/@ambalafoodproducts3688",
    ],
  },
};
