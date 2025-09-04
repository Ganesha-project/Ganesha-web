import {
  TextGradientYellowPurple,
  TextMainGradient,
} from "@/utils/ReueseClass";
import Link from "next/link";

export default function Maintenance() {
  return (
    <div className="h-screen w-screen flex flex-col gap-6 items-center justify-center px-4 my-13">
      <div className="flex flex-col items-center gap-6 max-w-2xl text-center">
        <img 
          src="/maintenance.png" 
          alt="Halaman sedang dalam pemeliharaan" 
          className="w-60 h-auto"
        />
        
        <div className="flex flex-col gap-4">
          <h1 className={`${TextGradientYellowPurple} text-3xl md:text-4xl font-bold`}>
            Halaman Sedang Dalam Pemeliharaan
          </h1>
          
          {/* p ini text nya ga center */}
          <p className={`${TextMainGradient} text-xl md:text-xl font-medium`}>
            Kami sedang melakukan perbaikan untuk memberikan pengalaman yang lebih baik. 
            Silakan kembali lagi nanti.
          </p>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Terima kasih atas kesabaran Anda
          </p>
        </div>
        
        <Link 
          href="/"
          className="inline-flex items-center justify-center cursor-pointer duration-300 hover:scale-95 active:scale-90 px-6 py-3 font-semibold text-white dark:text-black text-sm rounded-full bg-gradient-to-br from-baseColor via-mainColor to-mainColor dark:from-baseColor dark:via-baseColor dark:to-secondaryColor shadow-lg hover:shadow-xl transition-all"
        >
          ← Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}