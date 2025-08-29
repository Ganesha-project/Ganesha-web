// src/components/go-space/GoFeedback.jsx
"use client";
import React, { useState } from "react";

export const GoFeedback = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("✅ Feedback berhasil dikirim!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Gagal mengirim feedback.");
      }
    } catch (err) {
      setStatus("❌ Terjadi kesalahan server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="md:px-24 2xl:px-70 px-5 my-24">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Form */}
        <div className="bg-gray-100 h-full flex justify-center items-start flex-col dark:bg-gray-900 px-8 rounded-parent drop-shadow-2xl py-7">
          <h1 className="text-3xl font-bold mb-10">Kritik & Saran</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Suara kamu penting untuk kami. Yuk, bagikan pengalaman atau
            masukanmu agar kami bisa terus berkembang.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Nama Lengkap"
              required
              className="w-full border rounded-input px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                         border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-800 
                         text-gray-900 dark:text-gray-100"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Alamat Email"
              required
              className="w-full border rounded-input px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                         border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-800 
                         text-gray-900 dark:text-gray-100"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tulis pesan atau masukanmu di sini..."
              required
              className="w-full border rounded-input px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 
                         border-gray-300 dark:border-gray-700 
                         bg-white dark:bg-gray-800 
                         text-gray-900 dark:text-gray-100"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 bg-indigo-600 w-full py-5 text-white font-medium rounded-input 
                         hover:bg-indigo-700 transition 
                         dark:bg-indigo-500 dark:hover:bg-indigo-600 disabled:opacity-50"
            >
              {loading ? "Mengirim..." : "Kirim Feedback"}
            </button>
          </form>

          {status && (
            <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
              {status}
            </p>
          )}
        </div>

        {/* Background + teks */}
        <div className="relative w-full h-[300px] md:h-[600px] rounded-parent overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1181735/pexels-photo-1181735.jpeg')`,
            }}
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 flex items-end h-full p-6">
            <div className="bg-white/30 dark:bg-black/40 backdrop-blur-md border border-white/40 dark:border-gray-700 shadow-lg rounded-children py-4 px-6">
              <h2 className="text-2xl font-bold text-white drop-shadow">
                Dengarkan Suaramu 🚀
              </h2>
              <p className="text-gray-100 mt-2 text-sm md:text-base drop-shadow">
                Setiap masukan akan membantu kami memberikan layanan terbaik.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
