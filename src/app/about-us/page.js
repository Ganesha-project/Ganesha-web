import home from "../../public/BG/block.png"
import { BodyLanding } from "@/components/BodyLanding";
import { ImgProduk } from "@/components/ImgProduk";
import { BannerText } from "@/components/BannerText";
import { LegalityApprove } from "@/components/LeagalityApprove";
import { VoCarousel } from "@/components/VoCarousel";
import { VisiMisi } from "@/components/VisiMisi";
import { OurClient } from "@/components/OurClient";

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
    const other = ""
    const other2 = "Sinergi Layanan Bisnis"
    const main = "Multifungsi"
    const secondary = "  Kami menyediakan solusi all-in-one untuk bisnis anda, mulai dari pengembangan website, sosial media manajemen, legalitas usaha, desain grafis, perpajakan, dan perizinan lainnya."
    return (
        <>
            <ImgProduk socmed={home} styles='bg-white mt-[0vh]' />
            <BannerText
                other2={other2}
                main={main}
                other={other}
                secondary={secondary}
                ganesha={'ganeshaconsulting.co.id'}
                styles='bg-[#82498C] bg-clip-text text-transparent bg-opacity-100'
                btn1='Lebih Lanjut'
                styleL='bg-[#82498C] bg-opacity-30'
                styleR='hidden'
                href1='#product' />
            <BodyLanding />
            <VisiMisi />
            <LegalityApprove />
            <VoCarousel />
            {/* <OurClient /> */}
        </>
    );
}
