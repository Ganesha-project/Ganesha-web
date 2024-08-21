"use client"

import { BodyPT } from '@/components/LegalComponents/BodyPt';
import { RWhyUs } from '@/components/LegalComponents/RWhyUs';
import { ReusableCards } from '@/components/ReusableCards';
import { BannerService } from "@/components/ServicesComponent/BannerService";
import { ExtrasPackages, PMAPackages, PTPackages } from '../../../public/DB/PTPackages';
import { Benefit } from '@/components/LegalComponents/Benefit';
import { WhyLegal } from '@/components/LegalComponents/WhyLegal';
import { Faqs } from '@/components/LegalComponents/Faqs';
import { ClientPhotos } from '@/components/ClientPhotos';
import { DataPageLegal } from '../Database';
import { Popup } from '@/components/Popup';
import { useEffect, useState } from 'react';
import { Explanation } from '@/components/LegalComponents/Explanation';
import { Laws } from '@/components/LegalComponents/Laws';

export default async function PendirianPtPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    useEffect(() => {
        // Atur kondisi di sini, misalnya berdasarkan query params
        const queryParams = new URLSearchParams(window.location.search);
        if (queryParams.get('showPopup') === 'true') {
            setIsPopupOpen(true);
        }
    }, []);

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <>
            <Popup
                isOpen={isPopupOpen}
                onClose={handleClosePopup}
                title="Popup Title"
                content={<p>This is the content of the popup.</p>}
            />
            <BannerService />
            <ReusableCards
                data={[...PTPackages, ...PMAPackages, ...ExtrasPackages]}
                cardColor={'bg-cyan-100'}
                typeColor={'text-cyan-600'}
                priceColor={'text-cyan-800'}
                buttonColor={'bg-cyan-500'}
                label={'Paket Pendirian PT'}
            />
            <Benefit
                opening={'Benefit'}
                title={'Dari Pendirian PT di Ganesha Consulting'}
            />
            <ClientPhotos />
            <WhyLegal
                data={DataPageLegal.whyLegal}
                text1={'Mengapa'}
                text={'Legalitas Usaha diperlukan?'}
            />
            <Explanation
                text={'Apa itu PT?'}
                desc={DataPageLegal.whatPt.desc}
            />
            <Laws
                data={DataPageLegal.legalTexts}
                text={'Terkait PT di Indonesia'}
                text1={'Undang - Undang'}
            />
            <Faqs
                text={'FAQs'}
                color={'cyan'}
                data={DataPageLegal.faqData}
            />
            <RWhyUs color={"cyan"} />
        </>
    )
}