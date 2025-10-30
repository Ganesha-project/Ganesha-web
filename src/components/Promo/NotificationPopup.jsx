"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

export function NotificationPopup({ notifications }) {
  const [isClient, setIsClient] = useState(false);
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsClient(true);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isClient || hidden) return;
    
    const showDuration = 8000; // Notifikasi tampil selama 8 detik
    const hideDuration = 3000; // Notifikasi hilang selama 3 detik
    
    const cycle = () => {
      // Tampilkan notifikasi
      setIsVisible(true);
      
      setTimeout(() => {
        // Sembunyikan notifikasi
        setIsVisible(false);
        
        setTimeout(() => {
          // Ganti ke notifikasi berikutnya setelah jeda
          setIndex((prev) => (prev + 1) % notifications.length);
        }, hideDuration);
      }, showDuration);
    };
    
    // Jalankan cycle pertama kali
    cycle();
    
    // Ulangi cycle
    const interval = setInterval(cycle, showDuration + hideDuration);
    
    return () => clearInterval(interval);
  }, [isClient, notifications.length, hidden]);

  if (!isClient || !mounted || hidden || !isVisible) return null;

  const current = notifications[index];

  const popup = (
    <div
      className="
        fixed 
        bottom-24 sm:bottom-6
        left-1/2 sm:right-auto sm:left-6 
        -translate-x-1/2 sm:translate-x-0
        z-[9999]
        pointer-events-auto
      "
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.5 }} // Slightly slower transition (0.4s -> 0.5s)
          className="
            relative
            bg-white/95 
            backdrop-blur-md 
            border border-gray-200 
            shadow-2xl 
            rounded-2xl 
            px-4 sm:px-5 
            py-3 sm:py-4 
            flex items-center gap-3 
            w-[85vw] sm:w-[340px] md:w-[380px]
            mx-auto sm:mx-0
          "
        >
          {/* Tombol Close */}
          <button
            onClick={() => setHidden(true)}
            className="
              absolute top-2 right-2 
              text-gray-400 hover:text-gray-600 
              transition-colors 
              pointer-events-auto
            "
            aria-label="Tutup notifikasi"
          >
            <IoClose size={18} />
          </button>

          {/* Avatar */}
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold text-sm sm:text-base">
            {current.name[0]}
          </div>

          {/* Konten */}
          <div className="flex flex-col pr-5">
            <p className="text-xs sm:text-sm text-gray-800 leading-tight">
              <span className="font-semibold">{current.name}</span>{" "}
              {current.action}.
            </p>
            <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
              {current.time} • {current.location}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );

  return createPortal(popup, document.body);
}