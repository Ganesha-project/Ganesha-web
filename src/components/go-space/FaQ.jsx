"use client";

import { useState } from "react";
import clsx from "clsx";
import { RiArrowDropDownLine } from "react-icons/ri";

const faqData = [
  {
    id: "registration",
    question: "Bagaimana cara mendaftar layanan Go Space?",
    answer:
      'Klik tombol "Daftar Sekarang" di website kami, isi data bisnis, pilih paket virtual office yang sesuai, lalu lakukan pembayaran. Tim kami akan segera menghubungi Anda untuk verifikasi.',
  },
  {
    id: "legal-usage",
    question: "Apakah alamat virtual office bisa dipakai untuk legalitas PT atau CV?",
    answer:
      "Ya, alamat Go Space dapat digunakan untuk kebutuhan legalitas perusahaan seperti pembuatan PT, CV, dan perizinan usaha resmi sesuai regulasi yang berlaku.",
  },
  {
    id: "mail-handling",
    question: "Bagaimana dengan surat atau paket yang dikirim ke alamat virtual office?",
    answer:
      "Setiap surat atau paket yang masuk akan kami terima dan beri notifikasi kepada Anda. Anda dapat mengambil langsung di kantor kami atau menggunakan layanan penerusan (mail forwarding).",
  },
  {
    id: "billing",
    question: "Bagaimana sistem pembayaran di Go Space?",
    answer:
      "Pembayaran dapat dilakukan secara bulanan atau tahunan melalui transfer bank atau e-wallet. Paket tahunan biasanya lebih hemat dibanding bulanan.",
  },
  {
    id: "support",
    question: "Apakah ada dukungan jika saya mengalami kendala?",
    answer:
      "Tentu. Tim support Go Space siap membantu Anda melalui WhatsApp, email, atau telepon pada jam operasional. Kami pastikan kebutuhan bisnis Anda tetap lancar.",
  },
];

export const FAQ = ({ fontCustom, className, titleComponent }) => {
  const [openItem, setOpenItem] = useState(faqData[0]?.id || null);

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className={clsx("flex flex-col pb-12 px-4", className)}>
      <div className="text-center mb-12">
        <h2 className={clsx("text-4xl md:text-5xl font-bold mb-4  bg-clip-text text-transparent", fontCustom, titleComponent)}>Frequently Asked Questions</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">Find answers to common questions about our platform and services.</p>
      </div>

      <div className="space-y-4" role="region" aria-label="Frequently Asked Questions">
        {faqData.map((item) => {
          const isOpen = openItem === item.id;

          return (
            <div
              key={item.id}
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/50 dark:hover:bg-gray-700/50 transition-colors duration-200"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                id={`faq-question-${item.id}`}
              >
                <span className="font-semibold text-gray-900 dark:text-white text-lg pr-4">{item.question}</span>
                <RiArrowDropDownLine className={clsx("w-5 h-5 text-goPurple transition-transform duration-300 flex-shrink-0", isOpen ? "rotate-180" : "rotate-0")} aria-hidden="true" />
              </button>

              <div id={`faq-answer-${item.id}`} role="region" aria-labelledby={`faq-question-${item.id}`} className={clsx("overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0")}>
                <div className="px-6 pb-5 pt-2">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-12 text-center p-6 bg-goPurple/10 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border border-purple-200 dark:border-purple-800">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Still have questions?</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">Can't find the answer you're looking for? Our support team is here to help.</p>
        <button className=" px-6 py-3 go-button">
          Contact Support
        </button>
      </div>
    </section>
  );
};
