import { testimonyPromoPtCv } from "@/app/Database";
import { ClientLogo } from "@/components/ClientLogo";
import { ClientPhotos } from "@/components/ClientPhotos";
import { Credibility } from "@/components/Promo/Credibility";
import { NotificationPopup } from "@/components/Promo/NotificationPopup";
import { PromoBanner } from "@/components/Promo/PromoBanner";
import { PromoPriceList } from "@/components/Promo/PromoPrice";
import { Testimonies } from "@/components/Promo/Testimonies";
import { Voucher } from "@/components/Promo/voucher";
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
      time: "1 hari yang lalu",
      location: "Jakarta",
    },
    {
      name: "Ibu Siti Nurhaliza",
      action: "telah menyelesaikan pendirian PT PMDN",
      time: "8 jam yang lalu",
      location: "Surabaya",
    },
    {
      name: "Pak Ahmad Rizki",
      action: "sedang berjalan layanan PT LENGKAP + WEBSITE COMPANY",
      time: "3 jam yang lalu",
      location: "Bandung",
    },
    {
      name: "Ibu Diana Putri",
      action: "telah melakukan konsultasi terkait Pengurusan PKP (Pengusaha Kena Pajak)",
      time: "5 jam yang lalu",
      location: "Medan",
    },
    {
      name: "Pak Hendro Wijaya",
      action: "telah menyelesaikan legalitas perusahaan",
      time: "2 hari yang lalu",
      location: "Semarang",
    },
  ];

  return (
    <>
      <main >
        <PromoBanner  
        badge={"Layanan Pendirian PT & CV"}
        title={"Pendirian PT & CV Terjangkau"}
        desc={"Mulai Bisnis Anda dengan Langkah Tepat! Kami menyediakan layanan pendirian PT dan CV yang cepat dan terpercaya yang akan membantu Anda dengan semua aspek legalitas dan perizinan yang dibutuhkan!"}
        modelImage={"/images/promo-assets/glass-erlin.png"}
        />
        <Voucher/>
        <Credibility/>

        {/* <SellingPointGrid /> */}
        <Testimonies duplicatedReviews={data} />
        <ClientPhotos />
        
        {/* === Responsive Promotional Banner === */}
        <div className="w-full flex justify-center items-center  px-6 md:px-12 mb-20 mt-10">
          <div className="overflow-hidden rounded-2xl max-w-6xl">
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet="/images/promo-assets/cta-mobile.png"
              />
              <Image
                src="/images/promo-assets/cta-dekstop.png"
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
