"use client";

import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa6";
import { Title } from "./Title";
import { useEffect, useState } from "react";
import SkeletonImage from "./Skeleton/SkeletonImage";

export const ClientPhotos = ({ titleVisibility, padding, padding2 }) => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState({});

  const isValidPhoto = (photo) => {
    if (!photo) return false;
    if (typeof photo !== "string") return false;
    const invalid = ["-", "N/A", "null", "undefined"];
    return !invalid.includes(photo.trim());
  };

  // FETCH DATA
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
          console.log("INI MEMEK: ", data.data);
          
        }
      } catch (err) {
        console.error("Error fetching client data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const clientsWithPhotos = clients.filter((c) => c.clientPhoto)
  console.log("clientsWithPhotos: ", clientsWithPhotos);
  

  const handleImageLoad = (idx) => {
    setImageLoading((prev) => ({
      ...prev,
      [idx]: false,
    }));
  };

  if (loading || clientsWithPhotos.length === 0) return null;

  return (
    <section className={`relative overflow-hidden ${padding} py-16`}>
      <div className={`md:mx-24 mx-5 mt-10 ${titleVisibility}`}>
        <Title
          className="flex justify-center"
          text="Our Clients"
          icon={<FaQuoteRight />}
          iconClassName="text-red-500"
        />
      </div>

      <div className="marquee">
        <div className={`marquee-content gap-5 md:gap-10 py-16 ${padding2}`}>
          {[
            ...clientsWithPhotos,
            ...clientsWithPhotos,
            ...clientsWithPhotos,
          ].map((client, idx) => (
            <div key={idx} className="flex-shrink-0">
              <div className="md:min-w-[30vw] min-w-[80vw] h-[40vh] md:h-[70vh] relative group transition-all duration-300 ease-in-out hover:scale-105 rounded-3xl hover:shadow-[0px_2px_35px_0px_#682D79] dark:hover:shadow-[0px_2px_35px_0px_#A781A9]">
                {imageLoading[idx] !== false && (
                  <SkeletonImage className="object-cover rounded-3xl h-full w-full" />
                )}

                <Image
                  width={900}
                  height={900}
                  src={client?.clientPhoto}
                  alt={client.ptName || client.companyName || `client-${idx}`}
                  className={`object-cover rounded-3xl h-full w-full ${
                    imageLoading[idx] !== false ? "hidden" : "block"
                  }`}
                  onLoadingComplete={() => handleImageLoad(idx)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// KENAPA GA MUNCUL PADAHAL INI MUNCUL:
