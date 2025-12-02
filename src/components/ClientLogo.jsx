"use client";

import { useState, useEffect, useRef } from "react";
import { Title } from "./Title";

export const ClientLogo = () => {
  const [index, setIndex] = useState(0);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef(null);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Fetch data dari API
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(
          `https://ganesha-cms.vercel.app/api/business/clients?limit=100`
        );
        const data = await res.json();
        if (data && Array.isArray(data.data)) {
          setClients(data.data);
        }
      } catch (err) {
        console.error("Error fetching client data:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Carousel otomatis hanya untuk mobile
  useEffect(() => {
    if (!isMobile || clients.length === 0) return;

    // Bersihkan interval sebelumnya
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => {
        const itemsPerView = isMobile ? 3 : 8; // 3 item untuk mobile, 8 untuk desktop
        const totalSlides = Math.ceil(clients.length / itemsPerView);

        return prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1;
      });
    }, 5000);

    // Cleanup interval
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isMobile, clients]);

  // Hitung jumlah item per view berdasarkan device
  const getItemsPerView = () => {
    if (typeof window === "undefined") return 4;
    const width = window.innerWidth;
    if (width < 640) return 2; // Mobile kecil
    if (width < 768) return 3; // Mobile
    if (width < 1024) return 4; // Tablet
    if (width < 1280) return 6; // Desktop kecil
    return 8; // Desktop besar
  };

  // Filter clients yang memiliki companyLogo
  const clientsWithLogo = clients.filter((client) => client.companyLogo);

  if (loading) {
    return (
      <section className="block py-10 md:py-24 space-y-5">
        <Title
          text={"Klien Kami"}
          className={"mb-5 md:mb-10 md:mx-24 mx-5 flex justify-center"}
        />
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </section>
    );
  }

  if (clientsWithLogo.length === 0) {
    return (
      <section className="block py-10 md:py-24 space-y-5">
        <Title
          text={"Klien Kami"}
          className={"mb-5 md:mb-10 md:mx-24 mx-5 flex justify-center"}
        />
        <div className="text-center text-gray-500">
          Tidak ada data klien yang tersedia
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="block py-10 md:py-24 space-y-5">
        <Title
          text={"Klien Kami"}
          className={"mb-5 md:mb-10 md:mx-24 mx-5 flex justify-center"}
        />
        <div className="md:mx-24 2xl:mx-80 mx-0">
          {/* Container utama */}
          <div className="relative overflow-hidden">
            {/* Carousel untuk mobile */}
            {isMobile ? (
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${
                    index * (100 / getItemsPerView())
                  }%)`,
                  width: `${
                    (clientsWithLogo.length / getItemsPerView()) * 100
                  }%`,
                }}
              >
                {clientsWithLogo.map((client, idx) => (
                  <div
                    key={client.id || idx}
                    className={`flex-shrink-0 px-2`}
                    style={{ width: `${100 / getItemsPerView()}%` }}
                  >
                    <div className="dark:bg-white bg-opacity-50 rounded-[25px] h-32 w-full flex items-center p-2 relative group">
                      <img
                        className="object-contain w-full h-full bg-blend-multiply"
                        src={client.companyLogo}
                        alt={client.companyName || client.clientName}
                        onError={(e) => {
                          e.target.src = "/placeholder-logo.png"; // Fallback image
                        }}
                      />
                      <div className="absolute inset-0 group-hover:opacity-100 opacity-0 backdrop-blur-md duration-300 bg-white flex flex-col justify-center bg-opacity-50 ease-in-out rounded-[25px]">
                        <h4 className="text-center text-neutral-900 font-semibold text-xs md:text-sm p-2">
                          {client.companyName || client.clientName}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Grid untuk desktop
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {clientsWithLogo?.map((client, idx) => (
                  <div key={client.id || idx} className="flex justify-center">
                    <div className="dark:bg-white bg-opacity-50 rounded-[25px] h-32 w-32 flex items-center p-2 relative group">
                      <img
                        className="object-contain w-full h-full bg-blend-multiply"
                        src={client.companyLogo}
                        alt={client.companyName || client.clientName}
                        onError={(e) => {
                          e.target.src = "/placeholder-logo.png";
                        }}
                      />
                      <div className="absolute inset-0 group-hover:opacity-100 opacity-0 backdrop-blur-md duration-300 bg-white flex flex-col justify-center bg-opacity-50 ease-in-out rounded-[25px]">
                        <h4 className="text-center text-neutral-900 font-semibold text-xs md:text-sm p-2">
                          {client.companyName || client.clientName}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Indikator untuk mobile */}
            {isMobile && clientsWithLogo.length > getItemsPerView() && (
              <div className="flex justify-center mt-4 space-x-2">
                {Array.from({
                  length: Math.ceil(clientsWithLogo.length / getItemsPerView()),
                }).map((_, i) => (
                  <button
                    key={i}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === index ? "w-6 bg-blue-600" : "w-2 bg-gray-300"
                    }`}
                    onClick={() => setIndex(i)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
