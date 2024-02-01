import fs from 'fs'
import legal from '../../../../public/BG/VectorCV.jpg'
import { BannerText } from '@/components/BannerText';
import { ImgProduk } from '@/components/ImgProduk'
import { BodyCV } from '@/components/LegalComponents/BodyCv';
import { RWhyUs } from '@/components/LegalComponents/RWhyUs';
import { CardPriceCV } from '@/components/LegalComponents/CardPriceCv';

export default async function PendirianCvPage() {
    const other = ""
    const other2 = "Layanan"
    const main = "Pendirian CV"
    const secondary = "Pembangunan PT tanpa ribet, hanya dengan Ganesha Consulting! Dapatkan layanan cepat, terpercaya, dan harga terjangkau untuk memastikan PT Anda tumbuh sukses. Hubungi kami sekarang untuk memulai langkah pertama menuju kesuksesan bisnis Anda!."
    let rawData = await fs.promises.readFile('public/JSON/PaketCV.json', 'utf-8');
    let data = JSON.parse(rawData);

    return (
        <>
            <ImgProduk socmed={legal} styles='bg-white' />
            <BannerText
                main={main}
                other2={other2}
                other={other}
                secondary={secondary}
                styles='bg-orange-600 text-transparent bg-clip-text'
                btn1='Pilih Paket'
                btn2='Konsultasi Sekarang'
                styleL='bg-orange-200'
                styleR='bg-orange-200'
                href1='#packages'
            />
            <CardPriceCV data={data} />
            <BodyCV />
            <RWhyUs color={"orange"} />
        </>
    )
}