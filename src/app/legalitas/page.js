import { AllProductButton } from "@/components/LegalComponents/AllProductButton";
import { BodyLegal } from "@/components/LegalComponents/BodyLegal";
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
    return (
        <>
            <BannerService />
            <AllProductButton />
            <BodyLegal />
        </>
    )
}