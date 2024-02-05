import fs from 'fs'
import socmed from '../../public/BG/patent.jpg';
import { BannerText } from '@/components/BannerText';
import { ImgProduk } from '@/components/ImgProduk';
import { ExtrasCard } from '@/components/ReusableComponents/ExtrasCard';

export default async function HakiPage() {
    const main = "HAKI";
    const other = "| Hak Kekayaan Intelektual";
    const other2 = "";
    const secondary =
        "Lindungi merek, hak cipta, dan paten bisnis Anda dengan layanan HAKI kami, memberikan keunggulan kompetitif.";
    let rawData = await fs.promises.readFile('public/JSON/HAKI.json', 'utf-8');
    let data = JSON.parse(rawData);

    return (
        <>

            <ImgProduk socmed={socmed} styles='bg-sky-300' stylesImg="translate-y-[7%]" />
            <BannerText
                other={other} other2={other2} main={main} secondary={secondary}
                styles='bg-[#E43B3B]'
                btn1='Lebih Lanjut'
                btn2='Konsultasi Sekarang'
                styleL='bg-[#FFECD5]'
                styleR='bg-[#FFECD5]'
                href1='#packages' />
            <ExtrasCard data={data} accent1={'bg-[#E43B3B]'} accent2={'bg-[#FFECD5]'} />
        </>
    );
}

