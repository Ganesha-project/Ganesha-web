import { BannerService } from '@/components/ServicesComponent/BannerService';
import { ReusableCards } from '@/components/ReusableCards';
import { BadanUsahaPackages, ExtrasPackages, PMAPackages, PTPackages } from '../../../public/DB/PTPackages';
import { CVPackages } from '../../../public/DB/CVPackages';
import { WebPackages } from '../../../public/DB/WebPackages';
import { SMPackages } from '../../../public/DB/SMPackages';
import { VirtualOfficePackages } from '../../../public/DB/OtherPackages';
import { konsultanPajakPMA, konsultanPajakPMDN, pelaporanSPT, pendaftaranPajakDaerah, perpajakanLainnya } from '../../../public/DB/PajakPackages';
import { HakiPackages } from '../../../public/DB/HakiPackages';
import { servicePackages } from '../../../public/DB/IzinPackages';
import { AccountantPackages } from '../../../public/DB/AccountantPackages';

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
                label={'Paket Pendirian PT'}
            />
            <ReusableCards
                data={[...CVPackages]}
                label={'Paket Pendirian CV'}
            />
            <ReusableCards
                data={BadanUsahaPackages}
                label={'Paket Pendirian Badan Usaha'}
            />
            <ReusableCards
                data={WebPackages}
                label={'Paket Pembuatan Website'}
            />
            <ReusableCards
                data={SMPackages}
                label={'Paket Social Media Management'}
            />
            <ReusableCards
                data={VirtualOfficePackages}
                label={'Paket Sewa Virtual Office'}
            />
            <ReusableCards
                data={servicePackages}
                label={'Paket Perizinan'}
            />
            <ReusableCards
                data={pelaporanSPT}
                label={'Paket Pelaporan SPT'}
                scrollToLg={40}
                scrollToMd={40}
                scrollToSm={20}
            />
            <ReusableCards
                data={konsultanPajakPMDN}
                label={'Paket Konsultan Pajak PMDN'}
                scrollToLg={40}
                scrollToMd={40}
                scrollToSm={20}
            />
            <ReusableCards
                data={konsultanPajakPMA}
                label={'Paket Konsultan Pajak PMA'}
                scrollToLg={40}
                scrollToMd={40}
                scrollToSm={20}
            />
            <ReusableCards
                data={[...pendaftaranPajakDaerah, ...perpajakanLainnya]}
                label={'Paket Pajak Daerah & Brevet'}
                scrollToLg={55}
                scrollToMd={55}
                scrollToSm={20}
            />
            <ReusableCards
                data={HakiPackages}
                label={'Paket HAKI'}
            />
            <ReusableCards
                data={AccountantPackages}
                label={'Paket Pelayanan Akuntansi'}
                scrollToLg={13}
                scrollToMd={13}
                scrollToSm={4.5}
            />
        </>
    )
}