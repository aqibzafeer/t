"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    category: "Orders & Shipping",
    questions: [
      {
        q: "How long does shipping take?",
        a: "We typically process orders within 1-2 business days. Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days. You'll receive a tracking number once your order ships."
      },
      {
        q: "Do you offer international shipping?",
        a: "Currently, we only ship within Pakistan. We're working on expanding our shipping options to international destinations in the near future."
      },
      {
        q: "What is your return policy?",
        a: "We accept returns within 14 days of delivery. Products must be unopened and in original packaging. Please contact our customer service team to initiate a return."
      },
      {
        q: "How can I track my order?",
        a: "Once your order ships, you'll receive an email with a tracking number. You can use this number to track your package on our shipping partner's website."
      }
    ]
  },
  {
    category: "Products & Quality",
    questions: [
      {
        q: "Are your teas organic?",
        a: "Yes, all our tea products are 100% organic and sourced from certified organic farms. We never use pesticides or artificial additives in our tea production."
      },
      {
        q: "How should I store my tea?",
        a: "Store your tea in a cool, dry place away from direct sunlight, moisture, and strong odors. Keep the package sealed tightly after each use to maintain freshness."
      },
      {
        q: "What is the shelf life of your tea?",
        a: "Our teas have a shelf life of 12-18 months when stored properly. Each package has a best-before date printed on it for your reference."
      },
      {
        q: "Do you test for quality?",
        a: "Absolutely! Every batch of tea undergoes rigorous quality testing for purity, flavor, and safety standards before reaching our customers."
      }
    ]
  },
  {
    category: "Payment & Pricing",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept cash on delivery (COD), bank transfers, and online payments through credit/debit cards. Payment options will be displayed at checkout."
      },
      {
        q: "Do you offer bulk discounts?",
        a: "Yes! We offer special pricing for bulk orders. Please contact our sales team at info@ambalafoodproducts.com for wholesale inquiries."
      },
      {
        q: "Are prices inclusive of tax?",
        a: "Yes, all prices listed on our website are inclusive of applicable taxes. No hidden charges will be added at checkout."
      }
    ]
  },
  {
    category: "Tea Preparation",
    questions: [
      {
        q: "How much tea should I use per cup?",
        a: "We recommend using 1 teaspoon (approximately 2-3 grams) of tea per 8 oz cup of water. Adjust according to your taste preference."
      },
      {
        q: "What is the ideal water temperature?",
        a: "Black teas: 200-212°F (boiling water). Green teas: 160-180°F. Herbal teas: 200-212°F. The right temperature brings out the best flavor."
      },
      {
        q: "How long should I steep my tea?",
        a: "Black tea: 3-5 minutes. Green tea: 2-3 minutes. Herbal tea: 5-7 minutes. Over-steeping can make tea bitter, so adjust to taste."
      }
    ]
  }
];

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex justify-between items-center text-left hover:text-red-800 transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        {isOpen ? (
          <FaChevronUp className="text-red-800 flex-shrink-0" />
        ) : (
          <FaChevronDown className="text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-700 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <section className="w-full bg-gray-50">
      {/* Hero Section */}
      <div className="bg-red-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto">
          Find answers to common questions about our products, shipping, and more. Can't find what you're looking for? Contact us directly.
        </p>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-8">
          {faqs.map((category, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-red-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-red-800 rounded"></span>
                {category.category}
              </h2>
              <div className="space-y-1">
                {category.questions.map((faq, qIdx) => (
                  <FAQItem key={qIdx} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-red-50 border-2 border-red-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-red-900 mb-3">
            Still Have Questions?
          </h3>
          <p className="text-gray-700 mb-6">
            Our customer support team is here to help you with any inquiries.
          </p>
          <a
            href="/myapp/contact"
            className="inline-block bg-red-800 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}