"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQ = () => {
  const faqData = [
    {
      question: "What is Rockbalm and why is it the best?",
      answer:
        "Rockbalm is a natural skincare brand known for its organic, cruelty-free balms that deeply moisturize and protect your skin.",
    },
    {
      question: "What is Rockbalm and who is it for?",
      answer:
        "It’s designed for anyone seeking clean, safe, and effective skincare made from plant-based ingredients.",
    },
    {
      question: "How do I book a consultation for my elder one?",
      answer:
        "Simply click the 'Book Consultation' button on our website and fill in your details.",
    },
    {
      question: "How do Rockbalm subscription plans work?",
      answer:
        "You can subscribe to receive products monthly at a discounted rate. Cancel anytime from your account settings.",
    },
    {
      question: "How secure is my family’s health data on Rockbalm?",
      answer:
        "We use advanced encryption and never share your data with third parties. Your privacy is our priority.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white flex justify-center items-center px-4 py-[84.5px] flex-col gap-[60px]">
      <div className="text-primary text-center px-6">
        <h1 className="font-alfa-slab font-normal text-[28px] md:text-[33px] -tracking-[2px]">
          Frequently Asked Questions
        </h1>
      </div>

      <div className="w-full max-w-3xl md:px-0 space-y-3">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`w-full rounded-lg transition-all duration-300 ${
                isOpen ? "ring-2 ring-[#0288D1] bg-white" : "bg-[#F0F4F6]"
              }`}
            >
              <button
                className=" w-full flex items-center justify-between px-4 py-3 font-semibold text-left"
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.question}</span>

                <div className="w-[3.1rem] h-[3.1rem] flex items-center justify-center rounded-full transition-all duration-300 bg-[#0288D1] text-white">
                  {isOpen ? <FiMinus size={16} /> : <FiPlus size={16} />}
                </div>
              </button>

              {isOpen && (
                <div className="px-4 pb-4 text-sm text-gray-700">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
