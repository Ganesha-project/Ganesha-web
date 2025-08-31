"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa6";

const faqs = [
  {
    question: "Apa itu Go Space?",
    answer:
      "Go Space adalah layanan kantor virtual yang membantu bisnis tampil profesional dengan alamat strategis untuk legalitas, branding, dan kebutuhan operasional.",
  },
  {
    question: "Apakah Go Space bisa untuk legalitas perusahaan?",
    answer:
      "Ya, alamat dari Go Space dapat digunakan untuk legalitas perusahaan seperti pendaftaran PT, CV, hingga keperluan izin usaha.",
  },
  {
    question: "Apakah tersedia ruang meeting?",
    answer:
      "Tersedia! Kamu bisa booking ruang meeting kapan saja sesuai kebutuhan, lengkap dengan fasilitas pendukung.",
  },
  {
    question: "Bagaimana cara booking?",
    answer:
      "Cukup klik tombol 'Book Now' di website ini, pilih paket layanan, dan tim kami akan segera menghubungi untuk konfirmasi.",
  },
];

export const PageFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="md:px-24 2xl:px-70 px-5">
      <section className="relative bg-gradient-to-b from-goPurple to-goPurple rounded-parent sm:p-10 py-10 px-3 overflow-hidden z-20">
        <div className="-z-10 blur-[180px] w-120 h-120 bg-yellow-400 absolute -right-20 top-5"></div>

        {/* Header */}
        <div className="px-3 flex text-white justify-between items-center mb-8 relative z-10">
          <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        </div>

        {/* FAQ List */}
        <div className="flex flex-col gap-4 px-3 relative z-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-children overflow-hidden 
                         bg-white/10 dark:bg-black/20 
                         backdrop-blur-lg 
                         border border-white/20 
                         shadow-lg"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-4 md:p-6 text-left"
              >
                <span className="text-sm md:text-base font-medium text-white">
                  {faq.question}
                </span>
                <FaPlus
                  className={`transition-transform duration-300 text-white ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="px-4 md:px-6 pb-4 md:pb-6 text-gray-100 text-xs md:text-sm"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
