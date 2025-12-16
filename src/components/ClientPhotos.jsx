// buat scroll nya infinite loop jangan putus

"use client";

import Image from "next/image";
import { FaQuoteRight } from "react-icons/fa6";
import { Title } from "./Title";
import { useEffect, useState } from "react";
import SkeletonImage from "./Skeleton/SkeletonImage";
import { ClientsReview } from "../../public/Data/Clients";

export const ClientPhotos = ({ titleVisibility, padding, padding2 }) => {
  const [imageLoading, setImageLoading] = useState(true);
  const [clientsData, setClientsData] = useState()

  const fetchClients = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_APIURL}/business/clients`, {
            method: "GET"
        })
        const data = await res.json()
        // console.log(data);
        setClientsData(data)
        
    
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : "unknown";
      // console.log(errMsg);
      setError(true);
    }
  };

  useEffect(() => {
    fetchClients()
  }, [])

  const handleImageLoad = (idx) => {
    setImageLoading((prev) => ({
      ...prev,
      [idx]: false,
    }));
  };

  return (
    <>
      <section className={`relative overflow-hidden ${padding} py-16`}>
        <div className={`md:mx-24 mx-5 mt-10 ${titleVisibility}`}>
          <Title
            className={"flex justify-center"}
            text={"Our Clients"}
            icon={<FaQuoteRight />}
            iconClassName={"text-red-500"}
          />
        </div>

        <div className="marquee">
          <div className={`marquee-content gap-5 md:gap-10 py-16 ${padding2}`}>
            {[...ClientsReview, ...ClientsReview, ...ClientsReview].map(
              (el, idx) => (
                <div key={idx} className="flex-shrink-0">
                  {el.clientPhoto && (
                    <div className="md:min-w-[30vw] min-w-[80vw] h-[40vh] md:h-[70vh] relative group duration-300 ease-in-out hover:scale-105 hover:drop-shadow-md rounded-3xl hover:shadow-[0px_2px_35px_0px_#682D79] dark:hover:shadow-[0px_2px_35px_0px_#A781A9]">
                      {imageLoading[idx] && (
                        <SkeletonImage className="object-cover rounded-3xl h-full w-full" />
                      )}
                      <Image
                        width={500}
                        height={500}
                        className={`object-cover rounded-3xl h-full w-full ${
                          imageLoading[idx] ? "hidden" : "block"
                        }`}
                        src={el.clientPhoto}
                        alt={el.ptName || `client ${idx}`}
                        onLoadingComplete={() => handleImageLoad(idx)}
                      />
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};
