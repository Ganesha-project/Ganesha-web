import fs from 'fs'
import socmed from '../../public/BG/izin.jpg';
import { BannerText } from '@/components/BannerText';
import { ImgProduk } from '@/components/ImgProduk';
import { ExtrasCard } from '@/components/ReusableComponents/ExtrasCard';

export const metadata = {
    title: "Izin Tambahan - Ganesha Consulting",
    description: "Bantuan penuh pengalaman untuk memperoleh izin tambahan secara cepat dan efisien. Solusi mudah untuk semua kendala perizinan. Hubungi kami untuk konsultasi lebih lanjut!",
    keywords: "izin tambahan, perizinan, bantuan izin, konsultasi perizinan, Ganesha Consulting",
    image: "/BG/izin.jpg", // Path ke gambar terkait Izin Tambahan
    url: "https://www.ganeshaconsulting.co.id/izin-tambahan", // URL halaman Izin Tambahan Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/izin-tambahan",
        title: "Izin Tambahan - Ganesha Consulting",
        description: "Bantuan penuh pengalaman untuk memperoleh izin tambahan secara cepat dan efisien. Solusi mudah untuk semua kendala perizinan. Hubungi kami untuk konsultasi lebih lanjut!",
        image: {
            url: "https://www.ganeshaconsulting.co.id/BG/izin.jpg",
            alt: "Ganesha Consulting - Izin Tambahan"
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


export default async function IzinTambahanPage() {
    const main = "Izin";
    const other = "Tambahan";
    const other2 = "";
    const secondary =
        "Bantuan penuh pengalaman untuk memperoleh izin tambahan secara cepat dan efisien. Solusi mudah untuk semua kendala perizinan.";
    let rawData = await fs.promises.readFile('public/JSON/IzinTambahan.json', 'utf-8');
    let data = JSON.parse(rawData);

    return (
        <>

            <ImgProduk socmed={socmed} styles='bg-sky-300' stylesImg="h-[84lvh] mt-[14lvh] translate-y-[7%] dark:invert saturate-150 dark:hue-rotate-180" />
            <BannerText
                other={other} other2={other2} main={main} secondary={secondary}
                styles='bg-[#599DAD]'
                btn1='Lebih Lanjut'
                btn2='Konsultasi Sekarang'
                styleL='bg-[#EBF2FB]'
                styleR='bg-[#EBF2FB]'
                href1='#packages' />
            <ExtrasCard data={data} accent1={'bg-[#599DAD]'} accent2={'bg-[#EBF2FB]'} />
        </>
    );
}

