import { ReusableCards } from '@/components/ReusableCards';
import { BannerService } from '@/components/ServicesComponent/BannerService';
import { VirtualOfficePackages } from '../../../public/DB/OtherPackages';
import { Faqs } from '@/components/LegalComponents/Faqs';
import { CardVO } from '@/components/VirtualOffice/CardVO';
import { Benefit } from '@/components/VirtualOffice/Benefit';
import { dataPageVO } from '../../../public/Data/VOData';

export const metadata = {
    title: "Virtual Office Jakarta - Sewa Virtual Office dengan Ganesha Consulting",
    description: "Temukan solusi Virtual Office terbaik di Jakarta dengan Ganesha Consulting. Kami menyediakan berbagai lokasi strategis seperti Menara Cakrawala, BEI SCBD, Bellezza BSA, dan lainnya. Dapatkan paket sewa Virtual Office yang fleksibel dan terjangkau untuk mendukung kebutuhan bisnis Anda.",
    keywords: "virtual office Jakarta, sewa virtual office, Menara Cakrawala, BEI SCBD, Bellezza BSA, MTH Square, Arcade Business Center, Permata Regency, Ganesha Consulting, layanan virtual office",
    canonical: "https://www.ganeshaconsulting.co.id/virtual-office",
    image: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1723691284/GaneshaAssets/bqp9x1unwnsqwx1ulgmr.png", // Path ke gambar terkait virtual office
    url: "https://www.ganeshaconsulting.co.id/virtual-office",
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow",
    locale: "id_ID",
    // Open Graph metadata
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/virtual-office",
        title: "Virtual Office Jakarta - Sewa Virtual Office dengan Ganesha Consulting",
        description: "Temukan solusi Virtual Office terbaik di Jakarta dengan Ganesha Consulting. Kami menyediakan berbagai lokasi strategis seperti Menara Cakrawala, BEI SCBD, Bellezza BSA, dan lainnya. Dapatkan paket sewa Virtual Office yang fleksibel dan terjangkau untuk mendukung kebutuhan bisnis Anda.",
        image: {
            url: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1723691284/GaneshaAssets/bqp9x1unwnsqwx1ulgmr.png",
            alt: "Ganesha Consulting - Virtual Office"
        }
    },
    // Structured data
    structuredData: {
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Ganesha Consulting",
        url: "https://www.ganeshaconsulting.co.id/",
        logo: "https://www.ganeshaconsulting.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FArtboard2.b33b65bb.png&w=96&q=75",
        description: "Ganesha Consulting menyediakan solusi Virtual Office di Jakarta dengan berbagai lokasi strategis untuk mendukung kebutuhan bisnis Anda.",
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

export default async function VirtualOfficePage() {
    return (
        <>
            <BannerService />
            <ReusableCards
                data={VirtualOfficePackages}
                label={'Paket Sewa Virtual Office'}
            />
            <CardVO />
            <Benefit />
            <Faqs
                text={'FAQ'}
                color={'neutral'}
                className={'dark:!text-neutral-100 !text-neutral-800'}
                data={dataPageVO.FAQ}
            />
        </>
    );
}

