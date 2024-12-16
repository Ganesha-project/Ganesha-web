
import { Explanation } from '@/components/LegalComponents/Explanation';
import { BannerService } from '@/components/ServicesComponent/BannerService';
import { dataPagePajak, taxConsultingFAQ, whyTaxConsultant } from '../../../public/Data/PajakData';
import { WhyLegal } from '@/components/LegalComponents/WhyLegal';
import { Faqs } from '@/components/LegalComponents/Faqs';
import { CopyWriting } from '@/components/PajakCompontns/CopyWriting';
import { RWhyUs } from '@/components/LegalComponents/RWhyUs';
import { ReusableCards } from '@/components/ReusableCards';
import { konsultanPajakPMA, konsultanPajakPMDN, pelaporanSPT, pendaftaranPajakDaerah, perpajakanLainnya } from '../../../public/DB/PajakPackages';

export const metadata = {
    title: "Konsultan Pajak Terbaik di Jakarta - Ganesha Consulting",
    description: "Ganesha Consulting menawarkan layanan Konsultan Pajak untuk membantu optimasi struktur pajak perusahaan Anda. Temukan paket konsultasi pajak, pelaporan SPT, dan pajak daerah yang efisien untuk memastikan kepatuhan dan pengelolaan pajak yang optimal.",
    keywords: "konsultan pajak Jakarta, konsultasi pajak, manajemen pajak, pelaporan SPT, pajak daerah, Ganesha Consulting",
    image: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236583/GaneshaAssets/sltm2ppackpygizjbiuh.png", // Path ke gambar terkait Konsultan Pajak
    url: "https://www.ganeshaconsulting.co.id/konsultan-pajak", // URL halaman Konsultan Pajak Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/konsultan-pajak",
        title: "Konsultan Pajak Terbaik di Jakarta - Ganesha Consulting",
        description: "Ganesha Consulting menawarkan layanan Konsultan Pajak untuk membantu optimasi struktur pajak perusahaan Anda. Temukan paket konsultasi pajak, pelaporan SPT, dan pajak daerah yang efisien untuk memastikan kepatuhan dan pengelolaan pajak yang optimal.",
        image: {
            url: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236583/GaneshaAssets/sltm2ppackpygizjbiuh.png",
            alt: "Ganesha Consulting - Konsultan Pajak"
        }
    },
    // Structured data untuk membantu mesin pencari memahami konten halaman
    structuredData: {
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Ganesha Consulting",
        url: "https://www.ganeshaconsulting.co.id/",
        logo: "https://www.ganeshaconsulting.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FArtboard2.b33b65bb.png&w=96&q=75",
        description: "Ganesha Consulting menawarkan layanan Konsultan Pajak yang membantu perusahaan dalam optimasi pajak dan kepatuhan regulasi. Temukan paket kami untuk pelaporan SPT, pajak daerah, dan konsultasi pajak.",
        sameAs: [
            "https://www.instagram.com/ganeshamultikreatif?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
            "https://www.facebook.com/profile.php?id=61555739807086",
            "https://www.linkedin.com/company/ganesha-multi-kreatif/",
            "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20Ganesha%20Consulting"
        ],
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+628887127000",
            contactType: "Customer Service"
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: "Jakarta",
            addressCountry: "ID"
        }
    }
};

export default async function KonsultanPajakPage() {
    return (
        <>
            <BannerService />
            <ReusableCards
                data={pelaporanSPT}
                label={'Paket Pelaporan SPT'}
            />
            <ReusableCards
                data={konsultanPajakPMDN}
                label={'Paket Konsultan Pajak PMDN'}
            />
            <ReusableCards
                data={konsultanPajakPMA}
                label={'Paket Konsultan Pajak PMA'}
            />
            <ReusableCards
                data={[...pendaftaranPajakDaerah, ...perpajakanLainnya]}
                label={'Paket Pajak Daerah & Brevet'}
            />
            <Explanation
                text1={'Apa itu'}
                text={'Konsultasi Pajak?'}
                desc={dataPagePajak.what.desc}
            />
            <WhyLegal
                data={whyTaxConsultant}
                text1={'Mengapa'}
                text={'Konsultan Pajak Diperlukan?'}
            />
            <CopyWriting data={dataPagePajak.copywriting} />
            <Faqs
                text={'FAQs'}
                data={taxConsultingFAQ}
            />
            <RWhyUs />
        </>
    );
}

