import { ReusableCards } from "@/components/ReusableCards";
import { BannerService } from "@/components/ServicesComponent/BannerService";
import { WebPackages } from "../../../public/DB/WebPackages";
import { WebBody } from "@/components/WebComponents/WebBody";
import { WhyLegal } from "@/components/LegalComponents/WhyLegal";
import { Benefit } from "@/components/LegalComponents/Benefit";
import {
  BenefitWeb,
  dataHeader,
  dataPageWeb,
  FAQ,
} from "../../../public/Data/WebData";
import { Faqs } from "@/components/LegalComponents/Faqs";
import { Header } from "@/components/WebComponents/Header";
import { AdsBanner } from "@/components/AdsBanner";
import { WebPackageWork } from "@/components/WebComponents/WebPackageWork";
import { getPackagesByServiceId } from "@/lib/getPackagesByServiceId";

export const metadata = {
  title: "Jasa Pembuatan Website Profesional - Ganesha Consulting",
  description:
    "Ganesha Consulting menawarkan jasa pembuatan website profesional dengan desain estetik, fungsionalitas prima, dan pengalaman pengguna yang optimal. Tingkatkan presensi digital bisnis Anda sekarang.",
  keywords:
    "jasa pembuatan website, pembuatan website profesional, desain website responsif, Ganesha Consulting, website bisnis, optimasi website SEO",
  image:
    "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236584/GaneshaAssets/dktt01pu9es4cmoyr31t.png",
  url: "https://www.ganeshaconsulting.co.id/web-development",
  author: "Ganesha Consulting",
  siteName: "Ganesha Consulting",
  type: "website",
  robots: "index, follow",
  locale: "id_ID",
  openGraph: {
    type: "website",
    url: "https://www.ganeshaconsulting.co.id/web-development",
    title: "Jasa Pembuatan Website Profesional - Ganesha Consulting",
    description:
      "Layanan pembuatan website profesional dengan desain responsif dan SEO-friendly dari Ganesha Consulting. Optimalkan bisnis Anda dengan website terbaik.",
    image: {
      url: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236584/GaneshaAssets/dktt01pu9es4cmoyr31t.png",
      alt: "Jasa Pembuatan Website - Ganesha Consulting",
    },
  },
  structuredData: {
    "@context": "http://schema.org",
    "@type": "Organization",
    name: "Ganesha Consulting",
    url: "https://www.ganeshaconsulting.co.id/",
    logo: "https://www.ganeshaconsulting.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FArtboard2.b33b65bb.png&w=96&q=75",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+628887127000",
      contactType: "Customer Service",
    },
    sameAs: [
      "https://www.instagram.com/ganeshamultikreatif?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      "https://www.facebook.com/profile.php?id=61555739807086",
      "https://www.linkedin.com/company/ganesha-multi-kreatif/",
      "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20Ganesha%20Consulting",
    ],
  },
};

// Fetch available package types at build time (SSR)
async function getAvailablePackageTypes() {
  try {
    const response = await fetch(
      "https://ganesha-cms.vercel.app/api/projects?serviceId=3&limit=20",
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );
    const result = await response.json();

    if (result && result.data) {
      const packageTypes = new Set();

      result.data.forEach((project) => {
        project.packages?.forEach((pkg) => {
          const packageType = pkg?.package?.type;
          if (packageType) {
            packageTypes.add(packageType);
          }
        });
      });

      return Array.from(packageTypes);
    }
    return [];
  } catch (error) {
    console.error("Error fetching package types:", error);
    return [];
  }
}

export default async function WebPage() {
  // Fetch available package types on server
  const availablePackageTypes = await getAvailablePackageTypes();
  const webPackagesAPI = await getPackagesByServiceId(3)

  return (
    <>
      <BannerService />
      <ReusableCards
        // data={WebPackages}
        data={webPackagesAPI}
        label={"Paket Pembuatan Website"}
        seePackageWorks={true}
        availablePackageTypes={availablePackageTypes}
      />
      <WebPackageWork />
      <Header data={dataHeader.contentData} />
      <AdsBanner />
      <WhyLegal
        data={dataPageWeb.whyWebsite}
        text1={"Mengapa"}
        text={"Perusahaan membutuhkan Website?"}
      />
      <WebBody />
      <Benefit
        data={BenefitWeb}
        opening={"Yang kamu dapatkan dari"}
        title={"Pembuatan Web di Ganesha Consulting"}
      />
      <Faqs text={"FAQs"} data={FAQ} />
    </>
  );
}
