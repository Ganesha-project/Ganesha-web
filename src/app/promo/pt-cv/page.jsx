import { ClientLogo } from "@/components/ClientLogo";
import { ClientPhotos } from "@/components/ClientPhotos";
import Credibility from "@/components/Promo/Credibility";
import PromoBanner from "@/components/Promo/PromoBanner";
import { PromoPriceList } from "@/components/Promo/PromoPrice";
import SellingPointGrid from "@/components/Promo/SellingPointGrid";
import { Testimonies } from "@/components/Promo/Testimonies";
import { ReusableCards } from "@/components/ReusableCards";
import { CVPackages } from "@/DB/CVPackages";
import { ExtrasPackages, PMAPackages, PTPackages } from "@/DB/PTPackages";
import Image from "next/image";

function PromoPtCvPage() {
  return (
    <main>
      <PromoBanner />
      <SellingPointGrid />
      <Credibility />
      <Testimonies />
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
        data={[...PTPackages, ...PMAPackages, ...ExtrasPackages]}
        label={"Paket Pendirian PT"}
      />
      <PromoPriceList
        data={[...CVPackages, ...ExtrasPackages]}
        label={"Paket Pendirian CV"}
      />
      <ClientLogo />
    </main>
  );
}

export default PromoPtCvPage;
