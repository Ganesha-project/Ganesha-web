"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Mock Title component
const Title = ({ text, className }) => (
  <h2 className={`text-3xl font-bold ${className}`}>{text}</h2>
);

export const ClientLogo = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(0); // Start with 0 to indicate not mounted
  const [isMounted, setIsMounted] = useState(false);

  // Handle initial mount and window resize
  useEffect(() => {
    setIsMounted(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch data dari API
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_APIURL}/business/clients?limit=100`
        );
        const data = await res.json();
        if (data && Array.isArray(data.data)) {
          setClients(data.data);
        }
      } catch (err) {
        console.error("Error fetching client data:", err);
        // Mock data for demo
        setClients([
          { id: 1, companyLogo: "https://via.placeholder.com/150", companyName: "Company 1" },
          { id: 2, companyLogo: "https://via.placeholder.com/150", companyName: "Company 2" },
          { id: 3, companyLogo: "https://via.placeholder.com/150", companyName: "Company 3" },
          { id: 4, companyLogo: "https://via.placeholder.com/150", companyName: "Company 4" },
          { id: 5, companyLogo: "https://via.placeholder.com/150", companyName: "Company 5" },
          { id: 6, companyLogo: "https://via.placeholder.com/150", companyName: "Company 6" },
        ]);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Cek apakah menggunakan carousel (mobile/tablet)
  const shouldUseCarousel = () => {
    // Return false during SSR, will be calculated after mount
    if (!isMounted) return false;
    return windowWidth < 1024; // Carousel untuk screen < 1024px
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

  // Calculate animation duration based on number of items (slower for more items)
  const animationDuration = Math.max(20, clientsWithLogo.length * 2);

  // Show loading state until mounted to prevent hydration mismatch
  if (!isMounted) {
    return (
      <section className="block py-10 md:py-24 space-y-5">
        <Title
          text={"Klien Kami"}
          className={"mb-5 md:mb-10 md:mx-24 mx-5 flex justify-center"}
        />
        <div className="md:mx-24 2xl:mx-80 mx-0">
          <div className="relative">
            {/* Default to grid view during SSR */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
              {clientsWithLogo?.map((client, idx) => (
                <div key={client.id || idx} className="flex justify-center">
                  <div className="dark:bg-white bg-white bg-opacity-90 rounded-3xl h-32 w-32 flex items-center p-4 relative group shadow-sm">
                    <img
                      className="object-contain w-full h-full"
                      src={client.companyLogo}
                      alt={client.companyName || client.clientName}
                    />
                    <div className="absolute inset-0 group-hover:opacity-100 opacity-0 backdrop-blur-md duration-300 bg-white flex flex-col justify-center bg-opacity-90 ease-in-out rounded-3xl">
                      <h4 className="text-center text-neutral-900 font-semibold text-xs md:text-sm p-2">
                        {client.companyName || client.clientName}
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
          <div className="relative">
            {/* Infinite scroll marquee untuk mobile/tablet */}
            {shouldUseCarousel() ? (
              <div className="relative w-full overflow-hidden">
                {/* Gradient overlays for smooth edges */}
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
                
                <motion.div
                  className="flex gap-4"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: animationDuration,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ width: "fit-content" }}
                >
                  {/* Triple the array for seamless loop */}
                  {[...clientsWithLogo, ...clientsWithLogo, ...clientsWithLogo].map(
                    (client, idx) => (
                      <div
                        key={`${client.id}-${idx}`}
                        className="flex-shrink-0"
                      >
                        <div
                          className="
                            dark:bg-white bg-white bg-opacity-90
                            rounded-2xl
                            h-32 w-32 sm:h-24 sm:w-32
                            flex items-center justify-center
                            p-4
                            shadow-sm
                          "
                        >
                          <img
                            className="object-contain max-h-full max-w-full"
                            src={client.companyLogo}
                            alt={client.companyName || client.clientName}
                          />
                        </div>
                      </div>
                    )
                  )}
                </motion.div>
              </div>
            ) : (
              // Grid untuk desktop
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
                {clientsWithLogo?.map((client, idx) => (
                  <div key={client.id || idx} className="flex justify-center">
                    <div className="dark:bg-white bg-white bg-opacity-90 rounded-3xl h-32 w-32 flex items-center p-4 relative group shadow-sm">
                      <img
                        className="object-contain w-full h-full"
                        src={client.companyLogo}
                        alt={client.companyName || client.clientName}
                      />
                      <div className="absolute inset-0 group-hover:opacity-100 opacity-0 backdrop-blur-md duration-300 bg-white flex flex-col justify-center bg-opacity-90 ease-in-out rounded-3xl">
                        <h4 className="text-center text-neutral-900 font-semibold text-xs md:text-sm p-2">
                          {client.companyName || client.clientName}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};