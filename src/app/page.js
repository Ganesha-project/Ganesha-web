'use client';
import { useEffect, useState } from 'react';
import { HomeBanner } from "@/components/HomeBanner";
import { AllServicesBtn } from "@/components/AllServicesBtn";
import { ClientPhotos } from "@/components/ClientPhotos";
import { ClientLogo } from "@/components/ClientLogo";
import { WhyUs } from "@/components/WhyUs";
import { ArticleReccomendation } from "@/components/ArticleComponent/ArticleReccomendation";
import { SkeletonReccomendation } from '@/components/Skeleton/SekeletonReccomendation';
import { WebWork } from '@/components/WebComponents/WebWork';
import { SocmedWork } from '@/components/SocmedComponents/SocmedWork';
import Head from 'next/head';
import { AdsBanner } from '@/components/AdsBanner';
import { PriceWrapper } from '@/components/PriceWrapper';
import { dataPriceWrapper } from './Database';
import { Support } from '@/components/AboutUs/Support';
import { PseCertificate } from '@/components/PseCertificate';
import { Popup } from '@/components/Popup';
import { PopupContent } from '@/components/PopupContent';
import { HeroSection } from '@/components/HeroSection';
import { HomeBannerMobile } from '@/components/HomeBannerMobile';

export default function Home() {

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Solusi Bisnis All In One - Ganesha Consulting</title>
        <meta name="description" content="Ganesha Consulting menyediakan solusi all-in-one untuk bisnis Anda, termasuk pendirian PT atau CV, pengembangan website, manajemen media sosial, legalitas usaha, desain grafis, perpajakan, dan perizinan lainnya." />
        <meta name="keywords" content="Ganesha Consulting, pendirian PT, pendirian CV, PT PMA, pajak, konsultan pajak, konsultan bisnis, solusi bisnis, pengembangan website, manajemen media sosial, legalitas usaha, desain grafis, perpajakan, perizinan, konsultasi IT, transformasi digital, pengembangan website, manajemen media sosial, Ganesha Consulting" />
        <meta name="author" content="Ganesha Consulting" />
        <meta property="og:title" content="Ganesha Consulting - Solusi Bisnis All-in-One" />
        <meta property="og:description" content="Ganesha Consulting menyediakan solusi all-in-one untuk bisnis Anda, termasuk pendirian PT atau CV, pengembangan website, manajemen media sosial, legalitas usaha, desain grafis, perpajakan, dan perizinan lainnya." />
        <meta property="og:url" content="https://www.ganeshaconsulting.co.id" />
        <meta property="og:image" content="https://www.ganeshaconsulting.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FArtboard2.b33b65bb.png&w=96&q=75" />
        <link rel="canonical" href="https://www.ganeshaconsulting.co.id" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ConsultingBusiness",
            "name": "Ganesha Consulting",
            "url": "https://www.ganeshaconsulting.co.id",
            "logo": "https://www.ganeshaconsulting.co.id/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FArtboard2.b33b65bb.png&w=96&q=75",
            "description": "Ganesha Consulting menyediakan solusi all-in-one untuk bisnis Anda, termasuk pendirian PT atau CV, pengembangan website, manajemen media sosial, legalitas usaha, desain grafis, perpajakan, dan perizinan lainnya.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Jalan M.H. Thamrin",
              "addressLocality": "Kota Adm. Jakarta Pusat",
              "postalCode": "10340",
              "addressCountry": "ID"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+628887127000",
              "contactType": "Customer Service"
            }
          }
          `}
        </script>
      </Head>
      <HeroSection />
      <HomeBannerMobile />
      <AllServicesBtn />
      <PseCertificate />
      <PriceWrapper text={"Layanan Utama Kami"} text1={"Rekomendasi"} data={dataPriceWrapper.legal} />
      <WebWork text1={'Jelajahi'} text={'Karya Website Kami'} />
      <SocmedWork text1={'Sosial media'} text={'Yang kami tangani'} />
      <div className='md:hidden block'>
        <ClientPhotos />
      </div>
      <AdsBanner />
      <WhyUs />
      <ClientLogo />
    </>
  );
}
