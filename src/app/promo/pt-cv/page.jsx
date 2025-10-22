import { testimonyPromoPtCv } from "@/app/Database";
import { ClientLogo } from "@/components/ClientLogo";
import { ClientPhotos } from "@/components/ClientPhotos";
import Credibility from "@/components/Promo/Credibility";
import { NotificationPopup } from "@/components/Promo/NotificationPopup";
import PromoBanner from "@/components/Promo/PromoBanner";
import { PromoPriceList } from "@/components/Promo/PromoPrice";
import SellingPointGrid from "@/components/Promo/SellingPointGrid";
import { Testimonies } from "@/components/Promo/Testimonies";
import { ReusableCards } from "@/components/ReusableCards";
import { CVPackages } from "@/DB/CVPackages";
import { ExtrasPackages, PMAPackages, PTPackages } from "@/DB/PTPackages";
import Image from "next/image";

function PromoPtCvPage() {
  const data = [
    ...testimonyPromoPtCv,
    ...testimonyPromoPtCv,
    ...testimonyPromoPtCv,
    ...testimonyPromoPtCv,
  ];

  const dataNotif = [
    {
      name: "Pak Budi Santoso",
      action: "telah menyelesaikan pendirian PT LENGKAP + PKP",
      time: "30 menit yang lalu",
      location: "Jakarta",
    },
    {
      name: "Ibu Siti Nurhaliza",
      action: "telah menyelesaikan pendirian PT PMDN",
      time: "1 jam yang lalu",
      location: "Surabaya",
    },
    {
      name: "Pak Ahmad Rizki",
      action: "sedang berjalan layanan PT LENGKAP + WEBSITE COMPANY",
      time: "2 jam yang lalu",
      location: "Bandung",
    },
    {
      name: "Ibu Diana Putri",
      action: "telah melakukan konsultasi terkait Pengurusan PKP (Pengusaha Kena Pajak)",
      time: "3 jam yang lalu",
      location: "Medan",
    },
    {
      name: "Pak Hendro Wijaya",
      action: "telah menyelesaikan legalitas perusahaan",
      time: "4 jam yang lalu",
      location: "Semarang",
    },
  ];

  return (
    <>
      <main>
        <PromoBanner
          title="Pendirian PT & CV Terjangkau"
          subtitle="Layanan Pendirian PT & CV"
          description="Mulai Bisnis Anda dengan Langkah Tepat! Kami menyediakan layanan pendirian PT dan CV yang cepat dan terpercaya yang akan membantu Anda dengan semua aspek legalitas dan perizinan yang dibutuhkan!"
          backgroundImage="https://images.pexels.com/photos/32156209/pexels-photo-32156209.jpeg"
          modelImage="/images/promo-assets/erlin.png"
          scrollTargetId="details"
        />
        <SellingPointGrid />
        <Credibility />
        <Testimonies duplicatedReviews={data} />
        <ClientPhotos />
        {/* === Responsive Promotional Banner === */}
        <div className="w-full max-w-7xl px-6 md:px-12 mb-20 mt-10">
          <div className="overflow-hidden rounded-2xl">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="/images/promo-assets/promote-banner-mobile.png"
              />
              <Image
                src="/images/promo-assets/promote-banner-desktop.png"
                alt="Promotional Banner"
                width={1200}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </picture>
          </div>
        </div>

        <PromoPriceList
          data={[...PTPackages, ...ExtrasPackages]}
          label={"Paket Pendirian PT"}
        />
        <PromoPriceList
          data={[...CVPackages, ...ExtrasPackages]}
          label={"Paket Pendirian CV"}
        />
        <ClientLogo />
      </main>

      <NotificationPopup notifications={dataNotif} />
    </>
  );
}

export default PromoPtCvPage;
