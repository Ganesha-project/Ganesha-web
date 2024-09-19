import { WhyLegal } from '@/components/LegalComponents/WhyLegal';
import { BannerService } from '@/components/ServicesComponent/BannerService';
import { faqPerizinan, whyPerizinan } from '../../../public/Data/DataPerizinan';
import { Faqs } from '@/components/LegalComponents/Faqs';
import { RWhyUs } from '@/components/LegalComponents/RWhyUs';
import { servicePackages } from '../../../public/DB/IzinPackages';
import { ReusableCards } from '@/components/ReusableCards';

export const metadata = {
    title: "Layanan Perizinan - Ganesha Consulting",
    description: "Ganesha Consulting menyediakan layanan profesional untuk memperoleh Perizinan dengan cepat dan efisien. Temukan paket perizinan yang sesuai untuk kebutuhan Anda dan hubungi kami untuk konsultasi lebih lanjut.",
    keywords: "Perizinan, perizinan, bantuan izin, konsultasi perizinan, Izin SKPL A, Pengurusan Izin SKPL A, Sertifikat SKPL A, SBUJK Skala Kecil, Pengurusan SBUJK Skala Kecil, Sertifikat Badan Usaha Jasa Konstruksi, KTA SBUJK Skala Kecil, SBUJK Skala Menengah, Pengurusan SBUJK Skala Menengah, Sertifikat Badan Usaha Jasa Konstruksi, KTA SBUJK Skala Menengah, SBUJK Skala Besar, Pengurusan SBUJK Skala Besar, Sertifikat Badan Usaha Jasa Konstruksi, KTA SBUJK Skala Besar, Sertifikat Kompetensi Kerja Jenjang 4-6, SKK Jenjang 4-6, Pengurusan SKK Jenjang 4-6, Kartu Tanda Anggota SKK, Sertifikat Kompetensi Kerja Jenjang 7, SKK Jenjang 7, Pengurusan SKK Jenjang 7, Kartu Tanda Anggota SKK, Sertifikat Kompetensi Kerja Jenjang 8-9, SKK Jenjang 8-9, Pengurusan SKK Jenjang 8-9, Kartu Tanda Anggota SKK, ISO 9001 Terakreditasi IAS/IAF, Sertifikat ISO 9001, Pengurusan ISO 9001, Sertifikasi ISO 9001, ISO 45001 Terakreditasi IAS/IAF, Sertifikat ISO 45001, Pengurusan ISO 45001, Sertifikasi ISO 45001, ISO 37001 Smap Akreditasi KAN, Sertifikat ISO 37001, Pengurusan ISO 37001, Sertifikasi ISO 37001 KAN, ISO 37001 Smap Akreditasi IAS/IAF, Sertifikat ISO 37001, Pengurusan ISO 37001, Sertifikasi ISO 37001 IAS/IAF, Audit Barcode Izin SBU, Audit Barcode SBU Skala Menengah, Audit Barcode SBU Skala Besar, Pengurusan Audit Barcode, Konsultasi Audit Barcode, Sistem Manajemen Keselamatan dan Kesehatan Kerja, SMK3, Pengurusan SMK3, Konsultasi SMK3, Sertifikat SMK3, Ganesha Consulting",
    image: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236562/GaneshaAssets/lxcyp5lzimn5rv6fusir.svg", // Path ke gambar terkait Perizinan
    url: "https://www.ganeshaconsulting.co.id/perizinan", // URL halaman Perizinan Anda
    author: "Ganesha Consulting",
    siteName: "Ganesha Consulting",
    type: "website",
    robots: "index, follow", // Aturan indeks dan pengikutan
    locale: "id_ID", // Lokalisasi halaman (misalnya, Indonesia)
    // Open Graph metadata untuk berbagi di media sosial
    openGraph: {
        type: "website",
        url: "https://www.ganeshaconsulting.co.id/perizinan",
        title: "Layanan Perizinan - Ganesha Consulting",
        description: "Ganesha Consulting menyediakan layanan profesional untuk memperoleh Perizinan dengan cepat dan efisien. Temukan paket perizinan yang sesuai untuk kebutuhan Anda dan hubungi kami untuk konsultasi lebih lanjut.",
        image: {
            url: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236562/GaneshaAssets/lxcyp5lzimn5rv6fusir.svg",
            alt: "Ganesha Consulting - Perizinan"
        }
    },
    // Structured data untuk membantu mesin pencari memahami konten halaman
    structuredData: {
        "@context": "http://schema.org",
        "@type": "Organization",
        name: "Ganesha Consulting",
        url: "https://www.ganeshaconsulting.co.id/",
        logo: "https://www.ganeshaconsulting.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FArtboard2.b33b65bb.png&w=96&q=75",
        description: "Ganesha Consulting menyediakan layanan profesional untuk memperoleh Perizinan. Temukan berbagai paket perizinan dan hubungi kami untuk bantuan dalam proses perizinan Anda.",
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

export default async function IzinTambahanPage() {
    return (
        <>
            <BannerService />
            <ReusableCards
                data={servicePackages}
                label={'Paket Perizinan'}
                scrollToLg={20}
                scrollToMd={15}
                scrollToSm={8}
            />
            <WhyLegal
                data={whyPerizinan}
                text1={'Mengapa'}
                text={'Mengapa Perizinan dibutuhkan?'}
            />
            <Faqs
                text={'FAQs'}
                data={faqPerizinan}
            />
            <RWhyUs />
        </>
    );
}

