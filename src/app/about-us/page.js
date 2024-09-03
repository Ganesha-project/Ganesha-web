import { BodyLanding } from "@/components/BodyLanding";
import { BannerService } from "@/components/ServicesComponent/BannerService";
import { WhyUs } from "@/components/WhyUs";
import { Support } from "@/components/AboutUs/Support";
import { VM } from "@/components/AboutUs/VM";
import { About } from "@/components/AboutUs/About";

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

export default function AboutUs() {
    return (
        <>
            <BannerService />
            <BodyLanding />
            <About />
            <VM />
            <WhyUs />
            {/* <Support /> */}
        </>
    );
}
