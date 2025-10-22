import { testimonyPromoPtPMA } from "@/app/Database";
import { ClientLogo } from "@/components/ClientLogo";
import { ClientPhotos } from "@/components/ClientPhotos";
import Credibility from "@/components/Promo/Credibility";
import { NotificationPopup } from "@/components/Promo/NotificationPopup";
import PromoBanner from "@/components/Promo/PromoBanner";
import { PromoPriceList } from "@/components/Promo/PromoPrice";
import SellingPointGrid from "@/components/Promo/SellingPointGrid";
import { Testimonies } from "@/components/Promo/Testimonies";
import { PMAPackages } from "@/DB/PTPackages";

function PromoPTPMAPage() {
  const data = [
    ...testimonyPromoPtPMA,
    ...testimonyPromoPtPMA,
    ...testimonyPromoPtPMA,
    ...testimonyPromoPtPMA,
  ];

  const dataNotif = [
    {
      name: "Pak Hendro Wijaya",
      action: "Sedang berjalan proses pendirian PT PMA",
      time: "30 menit yang lalu",
      location: "Jakarta",
    },
    {
      name: "Ibu Diana Putri",
      action: "telah melakukan konsultasi pendirian PT PMA",
      time: "5 jam yang lalu",
      location: "Medan",
    },
    {
      name: "Ibu Siti Nurhaliza",
      action: "telah menyelesaikan pendirian PT PMA",
      time: "8 jam yang lalu",
      location: "Surabaya",
    },
    {
      name: "Pak Budi Santoso",
      action: "telah melakukan konsultasi pendirian PT PMA",
      time: "12 jam yang lalu",
      location: "Jakarta",
    },
  ];

  return (
    <>
      <main className="relative">
        <PromoBanner
          title="Pendirian PT Penanaman Modal Asing"
          subtitle="Layanan Pendirian PT PMA"
          description="Mulai Bisnis Anda dengan Langkah Tepat! Kami menyediakan layanan pendirian PT PMA yang cepat dan terpercaya yang akan membantu Anda dengan semua aspek legalitas dan perizinan yang dibutuhkan!"
          backgroundImage="https://images.pexels.com/photos/32156209/pexels-photo-32156209.jpeg"
          modelImage="/images/promo-assets/aji.png"
          scrollTargetId="details"
        />
        <SellingPointGrid />
        <Credibility />
        <Testimonies duplicatedReviews={data} />
        <ClientPhotos />
        <PromoPriceList
          data={[...PMAPackages]}
          label={"Paket Pendirian PT PMA"}
        />
        <ClientLogo />
      </main>

      {/* Tempatkan di luar main agar fixed selalu relatif ke viewport */}
      <NotificationPopup notifications={dataNotif} />
    </>
  );
}

export default PromoPTPMAPage;
