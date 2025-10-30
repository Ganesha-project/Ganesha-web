import clsx from "clsx";
import React from "react";

const SellingPointGrid = () => {
  const gridClass = "h-auto min-h-[180px] md:min-h-[200px] lg:min-h-[220px] rounded-xl hover:scale-105 transition-all bg-white drop-shadow-xl "; 

  return (
    <section className="mt-500 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 promo-margin ">
      {/* First Card - Stats */}
      <div className={clsx(" flex flex-col justify-center items-center gap-4 md:gap-5 py-6 md:py-8", gridClass)}>
        <div className="flex items-center justify-center gap-3 md:gap-4 text-white">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-yellow-500">400+</p>
          <p className="text-lg md:text-xl">Client</p>
        </div>
        <div className="flex items-center justify-center gap-3 md:gap-4 text-white">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl text-yellow-500">2±</p>
          <p className="text-lg md:text-xl">Hari Kerja</p>
        </div>
      </div>

      {/* Second Card - Trusted */}
      <div className={clsx(" rounded-xl overflow-hidden relative flex flex-col items-center justify-center pt-4 md:pt-5 px-4", gridClass)}>
        <h1 className="text-darkColor font-semibold text-xl sm:text-2xl text-center mb-2">
          Terpercaya & Terjamin
        </h1>
        <img 
          src="/images/promo-assets/trusted-2d.png" 
          alt="trusted" 
          className="w-48 sm:w-56 md:w-64 lg:w-70 object-contain" 
        />
      </div>

      {/* Third Card - Price */}
      <div className={clsx(" rounded-xl overflow-hidden flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-10 p-5 md:p-6", gridClass, "sm:col-span-2 lg:col-span-1")}>
        <img 
          src="/images/go-space-assets/icon/money.png" 
          alt="money" 
          className="w-20 sm:w-24 md:w-28 lg:w-30 object-contain" 
        />
        <p className="text-white font-semibold text-lg sm:text-xl text-center sm:text-left">
          Harga Terjangkau & Kompetitif
        </p>
      </div>
    </section>
  );
};

export default SellingPointGrid;
