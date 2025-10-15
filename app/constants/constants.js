import { MdLocalDrink, MdNature, MdEco } from "react-icons/md";
import { FaHeart, FaLeaf, FaSeedling, FaRecycle } from "react-icons/fa";
import { GiTeapot } from "react-icons/gi";

export const HERO = {
  title: "Healthy Beverage",
  description: "Our wellness journeys begin as small steps which become straightforward over time. Regular consumption of two cups of Ambala Tea every day assists in supporting your health foundation.",
  background: "/hero-section-bg.jpg",
  buttonText: "Explore Our Blends",
  buttonHref: "/products"
};

export const ABOUT = [
  {
    title: "Our Story",
    text: "Founded in 2015, Herbal Teas began as a small family endeavor to share the healing power of nature. What started as a passion for traditional remedies and natural wellness quickly grew into a mission to bring authentic, high-quality herbal blends to every home. Our journey began in the lush, green hills where we carefully handpicked the finest herbs, flowers, and roots — each chosen for its unique aroma, flavor, and health benefits. With dedication and love, we transformed age-old herbal knowledge into a modern tea experience, blending tradition with innovation.",
    image: "/about.webp",
    icon: <GiTeapot className="text-red-700" />,
    reverse: false
  },

  {
    title: "Our Process",
    text: "Every tea leaf is handpicked at the peak of its freshness, ensuring that only the finest quality ingredients make their way into your cup. Each leaf is carefully dried using gentle, traditional methods that preserve its natural aroma, vibrant color, and rich nutrients. Our master blenders then combine these leaves with time-honored techniques, balancing flavor, fragrance, and wellness in perfect harmony. From garden to teacup, every step of our process reflects a deep respect for nature and craftsmanship.",
    image: "/about.webp",
    icon: <MdNature className="text-red-700" />,
    reverse: true
  }
];

export const VALUES = {
  title: "Our Mission & Values",
  description: "Our mission is to create natural, wholesome teas that go beyond refreshment — teas that nurture your body with real ingredients, calm your mind with soothing aromas, and uplift your spirit with every sip.",
  icon: <FaHeart className="text-red-700" />,
  items: [
    {
      title: "Natural Ingredients",
      desc: "We source only the finest organic herbs and tea leaves, free from artificial additives and preservatives.",
      icon: <FaLeaf className="text-3xl text-red-700 mx-auto" />
    },
    {
      title: "Sustainable Farming",
      desc: "Our partners practice eco-friendly farming methods that protect the environment and support local communities.",
      icon: <FaSeedling className="text-3xl text-red-700 mx-auto" />
    },
    {
      title: "Wellness Focused",
      desc: "Each blend is crafted with specific wellness benefits in mind, from relaxation to energy and everything in between.",
      icon: <FaHeart className="text-3xl text-red-700 mx-auto" />
    },
    {
      title: "Eco-Friendly Packaging",
      desc: "We're committed to reducing waste with biodegradable packaging and sustainable shipping practices.",
      icon: <FaRecycle className="text-3xl text-red-700 mx-auto" />
    },
    {
      title: "Traditional Methods",
      desc: "We honor traditional tea-making techniques while incorporating modern quality standards for the perfect cup.",
      icon: <GiTeapot className="text-3xl text-red-700 mx-auto" />
    },
    {
      title: "Community Support",
      desc: "We work directly with small-scale farmers, ensuring fair wages and supporting sustainable agricultural practices.",
      icon: <MdEco className="text-3xl text-red-700 mx-auto" />
    }
  ]
};

export const CATEGORIES = {
  title: "Categories",
  description: "Explore our range of premium teas and wellness products designed to rejuvenate your body and calm your mind.",
  icon: <MdLocalDrink className="text-red-700" />,
  items: [
    {
      name: "Herbal Teas",
      icon: <MdLocalDrink className="text-3xl text-red-700" />
    },
    {
      name: "Green Teas",
      icon: <FaLeaf className="text-3xl text-red-700" />
    },
    {
      name: "Black Teas",
      icon: <GiTeapot className="text-3xl text-red-700" />
    },
    {
      name: "Wellness Blends",
      icon: <FaHeart className="text-3xl text-red-700" />
    }
  ]
};

export const JOIN = {
  title: "Join Our Tea Community",
  description: "Be the first to know about new blends, exclusive offers, and wellness tips from our tea experts.",
  buttonText: "Sign Up Now",
  buttonHref: "/signup"
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

export const CONTACT_HERO = {
  title: "Contact Us",
  description: "We'd love to hear from you! Get in touch with our team for any questions or inquiries.",
  background: "/hero-section-bg.jpg",
  buttonText: "Get In Touch",
  buttonHref: "#contact-form"
};


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
    url: "https://ambalatea.com",
    openingHours: "Mo-Fr 09:00-18:00",
    priceRange: "Rs200-Rs2000",
    sameAs: [
      "https://www.facebook.com/AmbalaFoodProducts/",
      "https://www.instagram.com/ambalafoodproducts/",
      "https://wa.me/+923004447353",
      "https://www.youtube.com/@ambalafoodproducts3688",
    ],
  },
};
