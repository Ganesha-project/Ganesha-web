import { BannerService } from '@/components/ServicesComponent/BannerService';
import { ReusableCards } from '@/components/ReusableCards';
import { BadanUsahaPackages, ExtrasPackages, PMAPackages, PTPackages } from '../../../public/DB/PTPackages';
import { CVPackages } from '../../../public/DB/CVPackages';
import { WebPackages } from '../../../public/DB/WebPackages';
import { SMPackages } from '../../../public/DB/SMPackages';

export const metadata = {
    title: "Semua Produk - Ganesha Consulting",
    description: "Lihat semua produk dan layanan yang ditawarkan oleh Ganesha Consulting, termasuk pembuatan website, manajemen media sosial, desain grafis, pendirian PT, dan banyak lagi. Hubungi kami untuk konsultasi lebih lanjut!",
    keywords: "semua produk, layanan, pembuatan website, manajemen media sosial, desain grafis, pendirian PT, Ganesha Consulting",
    image: "/BG/list.jpg", // Path ke gambar terkait Semua Produk
    url: "https://www.ganeshaconsulting.co.id/price-list", // URL halaman Semua Produk Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/price-list",
        title: "Semua Produk - Ganesha Consulting",
        description: "Lihat semua produk dan layanan yang ditawarkan oleh Ganesha Consulting, termasuk pembuatan website, manajemen media sosial, desain grafis, pendirian PT, dan banyak lagi. Hubungi kami untuk konsultasi lebih lanjut!",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/list.jpg",
            alt: "Ganesha Consulting - Semua Produk"
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


export default async function AllProductsPage() {


    return (
        <>
            <BannerService />
            <ReusableCards
                data={[...PTPackages, ...PMAPackages, ...ExtrasPackages]}
                cardColor={'bg-cyan-100'}
                typeColor={'text-cyan-600'}
                priceColor={'text-cyan-800'}
                buttonColor={'bg-cyan-500'}
                label={'Paket Pendirian PT'}
            />
            <ReusableCards
                data={[...CVPackages]}
                cardColor={'bg-orange-100'}
                typeColor={'text-orange-600'}
                priceColor={'text-orange-800'}
                buttonColor={'bg-orange-500'}
                label={'Paket Pendirian CV'}
            />
            <ReusableCards
                data={BadanUsahaPackages}
                cardColor={'bg-gray-200'}
                typeColor={'text-gray-600'}
                priceColor={'text-gray-800'}
                buttonColor={'bg-gray-500'}
                label={'Paket Pendirian Badan Usaha'}
            />
            <ReusableCards
                data={WebPackages}
                cardColor={'bg-sky-100'}
                typeColor={'text-sky-600'}
                priceColor={'text-sky-800'}
                buttonColor={'bg-sky-500'}
                label={'Paket Pembuatan Website'}
            />
            <ReusableCards
                data={SMPackages}
                cardColor={'bg-violet-100'}
                typeColor={'text-violet-600'}
                priceColor={'text-violet-800'}
                buttonColor={'bg-violet-500'}
                label={'Paket Social Media Management'}
            />
        </>
    )
}