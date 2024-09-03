import { AllProductButton } from "@/components/LegalComponents/AllProductButton";
import { Benefit } from "@/components/LegalComponents/Benefit";
import { BodyLegal } from "@/components/LegalComponents/BodyLegal";
import { BannerService } from "@/components/ServicesComponent/BannerService";
import { AccordionLegal } from "@/components/LegalComponents/AccrodionLegal";
import { RWhyUs } from "@/components/LegalComponents/RWhyUs";
import { DataPageLegal } from "../../../public/Data/LegalitasData";

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
    return (
        <>
            <BannerService />
            <AllProductButton />
            <BodyLegal />
            <Benefit
                data={DataPageLegal.whyUs}
                opening={'Kemudahan'}
                title={'Yang Kamu dapatkan di Ganesha Consulting'}
            />
            <AccordionLegal />
            <RWhyUs />
        </>
    )
}