import React from "react";
import { FaQuoteLeft, FaStarOfLife } from "react-icons/fa";
import clsx from "clsx";

export const AboutUs = () => {
  return (
    <section className=" my-15 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {/* Kolom kiri */}
      <div className="flex flex-col gap-4">
        <FaQuoteLeft className="text-2xl opacity-50" />
        <p className="text-sm sm:text-base leading-relaxed">
          Di era bisnis modern, alamat kantor bukan sekadar lokasi—tapi citra profesional yang membuat klien dan mitra lebih percaya. 
          Go Space hadir untuk menjawab kebutuhan itu dengan solusi <strong>Virtual Office</strong> yang praktis, hemat, dan kredibel. 
          Mulai dari freelancer, startup, hingga perusahaan, semua bisa memiliki alamat bisnis strategis tanpa perlu menyewa ruang fisik.
        </p>

        {/* Gambar */}
        <div
          className={clsx(
            "rounded-2xl bg-cover bg-center w-full",
            "h-40 sm:h-48 md:h-56"
          )}
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/3184424/pexels-photo-3184424.jpeg")',
          }}
        />
      </div>

      {/* Kolom kanan */}
      <div className="bg-gradient-to-br from-goPurple to-indigo-700 text-white p-6 sm:p-8 rounded-2xl flex flex-col gap-4">
        <p className="flex items-center justify-end gap-2 font-bold text-lg sm:text-xl">
          GO SPACE <FaStarOfLife className="text-goYellow" />
        </p>

        <p className="text-sm sm:text-base leading-relaxed">
          <strong>Go Space</strong> adalah layanan Virtual Office yang memberikan alamat bisnis strategis untuk 
          mendukung legalitas, branding, dan kepercayaan klien. Kami percaya, setiap bisnis berhak tampil profesional 
          tanpa terbebani biaya sewa kantor fisik yang besar.  
          <br /><br />
          Dengan layanan yang fleksibel, efisien, dan terpercaya, Go Space menjadi partner terbaik bagi 
          para pengusaha, freelancer, dan startup yang ingin berkembang lebih cepat.  
          <br /><br />
          <em>Go Space – Tempat virtual, peluang nyata.</em>
        </p>
      </div>
    </section>
  );
};
