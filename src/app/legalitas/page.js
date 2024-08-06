// import { BannerText } from '@/components/BannerText';
// import { ImgProduk } from '@/components/ImgProduk'
// import legal from '../../../public/BG/law.png'
// import { AllProductButton } from '@/components/LegalComponents/AllProductButton';
// import { BodyLegal } from '@/components/LegalComponents/BodyLegal';

import { BannerService } from "@/components/ServicesComponent/BannerService";

export const metadata = {
    title: 'Jasa Legalitas Bisnis - Ganesha Consulting',
    description: 'Ganesha Consulting menyediakan jasa legalitas bisnis yang profesional untuk memastikan bisnis Anda sesuai dengan aturan hukum di Indonesia. Legalkan bisnis Anda sekarang bersama kami!',
    keywords: 'jasa legalitas bisnis, konsultan legalitas, bisnis dan legalitas, legalitas usaha, konsultasi hukum',
    canonical: 'https://www.ganeshaconsulting.co.id/all-products/legalitas',
    ogTitle: 'Jasa Legalitas Bisnis - Ganesha Consulting',
    ogDescription: 'Ganesha Consulting menyediakan jasa legalitas bisnis yang profesional untuk memastikan bisnis Anda sesuai dengan aturan hukum di Indonesia. Legalkan bisnis Anda sekarang bersama kami!',
    twitterTitle: 'Jasa Legalitas Bisnis - Ganesha Consulting',
    twitterDescription: 'Ganesha Consulting menyediakan jasa legalitas bisnis yang profesional untuk memastikan bisnis Anda sesuai dengan aturan hukum di Indonesia. Legalkan bisnis Anda sekarang bersama kami!',
  };
  

export default function LegalitasPage() {
    const other = "Bisnis"
    const other2 = "Jasa"
    const main = "Legalitas"
    const secondary = "Kami hadir bersama Konsultan yang profesional untuk memberikan pelayanan Legalitas terbaik  yang akan memastikan Bisnis mu sesuai dengan aturan hukum yang berlaku di Indonesia, Legalkan Bisnis Mu Bersama Ganesha Consulting!."
    return (
        <>
            {/* <ImgProduk socmed={legal} />
            <BannerText
                main={main}
                other2={other2}
                other={other}
                secondary={secondary}
                styles='bg-teal-300'
                btn1='Jelajahi'
                btn2='Konsultasi Sekarang'
                styleL='bg-teal-200'
                styleR='bg-teal-200 hidden'
                href1='#paket'
            />
            <AllProductButton />
            <BodyLegal /> */}

            <BannerService/>
        </>
    )
}