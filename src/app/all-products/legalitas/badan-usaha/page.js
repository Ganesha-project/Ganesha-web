import legal from '../../../../public/BG/Yayasan.png'
import fs from 'fs'
import { ImgProduk } from '@/components/ImgProduk'
import { RWhyUs } from '@/components/LegalComponents/RWhyUs';
import { BannerBadanUsaha } from '@/components/LegalComponents/BannerBadanUsaha';
import { CardPriceBadanUsaha } from '@/components/LegalComponents/CardPriceBadanUsaha';
import { FaqProduct } from '@/components/LegalComponents/FaqProduct';

export default async function PendirianBadanUsaha() {
    let rawData = await fs.promises.readFile('public/JSON/BadanUsaha.json', 'utf-8');
    let data = JSON.parse(rawData);

    return (
        <>
            <ImgProduk socmed={legal} styles='bg-teal-300' />
            <CardPriceBadanUsaha data={data} />
            <BannerBadanUsaha />
            <FaqProduct />
            <RWhyUs color={"slate"} />
        </>
    )
}