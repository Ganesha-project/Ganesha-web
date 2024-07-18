import { HomeBanner } from "@/components/HomeBanner";
import { AllServicesBtn } from "@/components/AllServicesBtn";
import { ClientPhotos } from "@/components/ClientPhotos";
import { ClientLogo } from "@/components/ClientLogo";
import { WhyUs } from "@/components/WhyUs";

export const metadata = {
  title: 'Ganesha Consulting - Solusi Bisnis All-in-One',
  description: 'Ganesha Consulting menyediakan solusi all-in-one untuk bisnis Anda, termasuk pengembangan website, manajemen media sosial, legalitas usaha, desain grafis, perpajakan, dan perizinan lainnya.',
  keywords: 'Ganesha Consulting, solusi bisnis, pengembangan website, manajemen media sosial, legalitas usaha, desain grafis, perpajakan, perizinan',
  hashtags: '#GaneshaConsulting #SolusiBisnis #PengembanganWebsite #ManajemenMediaSosial #LegalitasUsaha #DesainGrafis #Perpajakan #Perizinan #web #webdeveloper #desaingrafis #jasadesain #desainlogo #pembuatanwebsite #socialmedia #socialmediamarketing #socialmediamanagement #socialmediamarketingagency #ecommerce #jasa #jasalegalitas #perpajakan #jasapajak #pajak #jasapembuatanpt #jasalegalitasindonesia #jasapembuatanptdijakarta #jasapembuatanptjakarta #jasapembuatancv #jasapembuatancvmurah #jasapembuatancvmurah #virtualoffice #virtualofficejakarta #coworkingspace #coworking',
  canonical: 'https://www.ganeshaconsulting.co.id',
  ogTitle: 'Ganesha Consulting - Solusi Bisnis All-in-One',
  ogDescription: 'Ganesha Consulting menyediakan solusi all-in-one untuk bisnis Anda, termasuk pengembangan website, manajemen media sosial, legalitas usaha, desain grafis, perpajakan, dan perizinan lainnya.',
  twitterTitle: 'Ganesha Consulting - Solusi Bisnis All-in-One',
  twitterDescription: 'Ganesha Consulting menyediakan solusi all-in-one untuk bisnis Anda, termasuk pengembangan website, manajemen media sosial, legalitas usaha, desain grafis, perpajakan, dan perizinan lainnya.',
};


export default function Home() {
  return (
    <>
      <HomeBanner />
      <AllServicesBtn />
      <ClientPhotos />
      <WhyUs />
      <ClientLogo />
    </>
  );
}
