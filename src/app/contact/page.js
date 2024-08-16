import { BodyContact } from "@/components/BodyContact";
import { Form } from "@/components/ContactComponents/Form";
import { Maps } from "@/components/ContactComponents/Maps";
import { Faqs } from "@/components/LegalComponents/Faqs";
import { BannerService } from '@/components/ServicesComponent/BannerService';
import { FaqMainData } from "../Database";
import { FaInfoCircle } from "react-icons/fa";

export const metadata = {
    title: "Hubungi Kami - Ganesha Consulting",
    description: "Hubungi kami untuk konsultasi lebih lanjut, pertanyaan, atau informasi tambahan tentang layanan kami. Kami siap membantu Anda dalam memajukan bisnis Anda.",
    keywords: "hubungi kami, konsultasi bisnis, layanan konsultasi, Ganesha Consulting, kontak",
    image: "/BG/cs.jpg", // Path ke gambar terkait layanan konsultasi
    url: "https://www.ganeshaconsulting.co.id/contact", // URL halaman kontak Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/contact",
        title: "Hubungi Kami - Ganesha Consulting",
        description: "Hubungi kami untuk konsultasi lebih lanjut, pertanyaan, atau informasi tambahan tentang layanan kami. Kami siap membantu Anda dalam memajukan bisnis Anda.",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/cs.jpg",
            alt: "Ganesha Consulting - Hubungi Kami"
        }
    },
    // Twitter metadata untuk berbagi di Twitter
    twitter: {
        handle: "@ganeshaconsult",
        site: "@ganeshaconsult",
        cardType: "summary_large_image",
    },
    // Structured data untuk membantu mesin pencari memahami konten halaman
    structuredData: {
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Ganesha Consulting",
        url: "https://www.ganeshaconsulting.co.id/",
        logo: "https://www.ganeshaconsulting.co.id/logo.png",
        sameAs: [
            "https://www.facebook.com/ganeshaconsulting",
            "https://twitter.com/ganeshaconsult",
            "https://www.linkedin.com/company/ganeshaconsulting"
        ]
    }
};


export default async function ContactPage() {

    return (
        <>
            <BannerService />
            <BodyContact />
            <Maps />
            <Form />
            <Faqs
                text={'FAQ Social Media Management'}
                icons={<FaInfoCircle />}
                className2={'dark:!bg-opacity-100 !text-gray-800'}
                className={'!text-left !justify-start'}
                iconClassName={'text-3xl'}
                color={'red'}
                data={[...FaqMainData.Sosmed]} />
            <Faqs
                text={'FAQ Web Development'}
                icons={<FaInfoCircle />}
                className={'!text-left !justify-start'}
                iconClassName={'text-3xl'}
                color={'red'}
                data={[...FaqMainData.Web]} />
            <Faqs
                text={'FAQ Accounting'}
                icons={<FaInfoCircle />}
                className2={'dark:!bg-opacity-100 !text-gray-800'}
                className={'!text-left !justify-start'}
                iconClassName={'text-3xl'}
                color={'red'}
                data={[...FaqMainData.Accounting]} />
            <Faqs
                text={'FAQ Audit'}
                icons={<FaInfoCircle />}
                className={'!text-left !justify-start'}
                iconClassName={'text-3xl'}
                color={'red'}
                data={[...FaqMainData.Audit]} />
            <Faqs
                text={'FAQ Badan Usaha'}
                icons={<FaInfoCircle />}
                className2={'dark:!bg-opacity-100 !text-gray-800'}
                className={'!text-left !justify-start'}
                iconClassName={'text-3xl'}
                color={'red'}
                data={[...FaqMainData.BadanUsaha]} />
            <Faqs
                text={'FAQ HAKI'}
                icons={<FaInfoCircle />}
                className={'!text-left !justify-start'}
                iconClassName={'text-3xl'}
                color={'red'}
                data={[...FaqMainData.Haki]} />
            <Faqs
                text={'FAQ Perpajakkan'}
                icons={<FaInfoCircle />}
                className2={'dark:!bg-opacity-100 !text-gray-800'}
                className={'!text-left !justify-start'}
                iconClassName={'text-3xl'}
                color={'red'}
                data={[...FaqMainData.Pajak]} />
            <Faqs
                text={'FAQ Perizinan'}
                icons={<FaInfoCircle />}
                className={'!text-left !justify-start'}
                iconClassName={'text-3xl'}
                color={'red'}
                data={[...FaqMainData.Perizinan]} />
            <Faqs
                text={'FAQ Software Management System'}
                icons={<FaInfoCircle />}
                className2={'dark:!bg-opacity-100 !text-gray-800'}
                className={'!text-left !justify-start'}
                iconClassName={'text-3xl'}
                color={'red'}
                data={[...FaqMainData.Software]} />

        </>
    )
}