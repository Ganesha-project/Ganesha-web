// components/go-space/FeedbackForm.js
"use client"

import { useState } from "react"
import { FaStar, FaPaperPlane, FaUser, FaEnvelope, FaComment } from "react-icons/fa"
import clsx from "clsx"
import Toastify from "toastify-js"
import "toastify-js/src/toastify.css"

export const FeedbackForm = ({ fontCustom, titleComponent }) => {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validasi di frontend
    if (!formData.name || !formData.email || !formData.message || !rating) {
      Toastify({
        text: "Semua field harus diisi termasuk rating!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#f44336",
        stopOnFocus: true,
      }).showToast()
      setLoading(false)
      return
    }

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      rating: Number(rating)
    }
    try {
      const response = await fetch("/api/sendFeedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || `HTTP error! status: ${response.status}`);
      }

      // Success handling
      Toastify({
        text: result.message,
        // ... success config
      }).showToast();

      // Reset form
      setFormData({ name: "", email: "", message: "" });
      setRating(0);

    } catch (error) {
      Toastify({
        text: error.message || "Terjadi kesalahan jaringan",
        // ... error config
      }).showToast();
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="mb-16">
      <div>
        <div className="text-center mb-7">
          <h2
            className={clsx(
              "text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent",
              fontCustom,
              titleComponent
            )}
          >
            Berikan Feedback Anda
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pendapat Anda sangat berharga untuk membantu kami memberikan layanan terbaik
          </p>
        </div>

        {/* Form Feedback */}
        <div className="bg-gray-50 rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Rating */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Bagaimana pengalaman Anda?</h3>
              <div className="flex justify-center gap-2 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoveredRating(star)}
                    onMouseLeave={() => setHoveredRating(0)}
                    className="transition-all duration-200 hover:scale-110"
                  >
                    <FaStar
                      className={clsx(
                        "text-3xl",
                        star <= (hoveredRating || rating) ? "text-yellow-400" : "text-gray-300",
                      )}
                    />
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                {rating > 0 && (
                  <span>
                    {rating === 1 && "Sangat Buruk"}
                    {rating === 2 && "Buruk"}
                    {rating === 3 && "Cukup"}
                    {rating === 4 && "Baik"}
                    {rating === 5 && "Sangat Baik"}
                  </span>
                )}
              </p>
              {rating === 0 && (
                <p className="text-sm text-red-500 mt-2">
                  * Pilih rating terlebih dahulu
                </p>
              )}
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Nama Lengkap"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-300"
                  required
                />
              </div>
            </div>

            <div className="relative">
              <FaComment className="absolute left-4 top-6 text-gray-400" />
              <textarea
                name="message"
                placeholder="Ceritakan pengalaman Anda dengan Go Space..."
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors duration-300 resize-none"
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex px-8 py-4 items-center gap-3 go-button disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaPaperPlane />
                {loading ? "Mengirim..." : "Kirim Feedback"}
              </button>
            </div>
          </form>
        </div>

        {/* Testimonials Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Sarah Johnson",
              rating: 5,
              comment: "Tempat kerja yang luar biasa! Fasilitas lengkap dan suasana yang mendukung produktivitas.",
            },
            {
              name: "Ahmad Rizki",
              rating: 5,
              comment: "Staff yang ramah dan lokasi strategis. Sangat recommended untuk freelancer!",
            },
            {
              name: "Maria Santos",
              rating: 4,
              comment: "Meeting room yang nyaman dengan teknologi canggih. Perfect untuk client presentation.",
            },
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-xl">
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-3">"{testimonial.comment}"</p>
              <p className="font-semibold text-gray-800 text-sm">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}