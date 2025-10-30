import { testimonyPromoPtPMA } from "@/app/Database";
import { ClientLogo } from "@/components/ClientLogo";
import { ClientPhotos } from "@/components/ClientPhotos";
import { Credibility } from "@/components/Promo/Credibility";
import { NotificationPopup } from "@/components/Promo/NotificationPopup";
import { PromoBanner } from "@/components/Promo/PromoBanner";
import { PromoPriceList } from "@/components/Promo/PromoPrice";
import SellingPointGrid from "@/components/Promo/SellingPointGrid";
import { Testimonies } from "@/components/Promo/Testimonies";
import { Voucher } from "@/components/Promo/voucher";
import { PMAPackages } from "@/DB/PTPackages";

function PromoPTPMAPage() {
  const data = [
    ...testimonyPromoPtPMA,
    ...testimonyPromoPtPMA,
    ...testimonyPromoPtPMA,
    ...testimonyPromoPtPMA,
  ];

  // update data notif biar selang
  const dataNotif = [
    {
      name: "Pak Hendro Wijaya",
      action: "Sedang berjalan proses pendirian PT PMA",
      time: "9 jam yang lalu",
      location: "Jakarta",
    },
    {
      name: "Ibu Diana Putri",
      action: "telah melakukan konsultasi pendirian PT PMA",
      time: "3 jam yang lalu",
      location: "Medan",
    },
    {
      name: "Ibu Siti Nurhaliza",
      action: "telah menyelesaikan pendirian PT PMA",
      time: "12 jam yang lalu",
      location: "Surabaya",
    },
    {
      name: "Pak Budi Santoso",
      action: "telah melakukan konsultasi pendirian PT PMA",
      time: "1 jam yang lalu",
      location: "Jakarta",
    },
  ];

  return (
    <>
      <main className="relative">
        <PromoBanner
          badge={"Layanan Pendirian PT PMA"}
          title="Pendirian PT Penanaman Modal Asing"
          desc={
            "Mulai Bisnis Anda dengan Langkah Tepat! Kami menyediakan layanan pendirian PT PMA yang cepat dan terpercaya yang akan membantu Anda dengan semua aspek legalitas dan perizinan yang dibutuhkan!"
          }
          modelImage="/images/promo-assets/glass-aji.png"
        />
        <Voucher />
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
