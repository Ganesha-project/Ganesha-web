import legal from '../../../../public/BG/VectorPT.png'
import fs from 'fs'
import { BannerText } from '@/components/BannerText';
import { ImgProduk } from '@/components/ImgProduk'
import { BodyPT } from '@/components/LegalComponents/BodyPt';
import { CardPricePt } from '@/components/LegalComponents/CardPricePt';
import { RWhyUs } from '@/components/LegalComponents/RWhyUs';
import { CardPricePma } from '@/components/LegalComponents/CardPricePma';

export default async function PendirianPtPage() {
    const other = ""
    const other2 = "Layanan"
    const main = "Pendirian PT"
    const secondary = "Pembangunan PT tanpa ribet, hanya dengan Ganesha Consulting! Dapatkan layanan cepat, terpercaya, dan harga terjangkau untuk memastikan PT Anda tumbuh sukses. Hubungi kami sekarang untuk memulai langkah pertama menuju kesuksesan bisnis Anda!."
    let rawData = await fs.promises.readFile('public/JSON/PaketPT.json', 'utf-8');
    let data = JSON.parse(rawData);

    let rawDataPma = await fs.promises.readFile('public/JSON/PaketPma.json', 'utf-8');
    let dataPma = JSON.parse(rawDataPma);

    return (
        <>
            <ImgProduk socmed={legal} stylesImg={'h-[90vh] w-auto'} styles='bg-white' />
            <BannerText
                main={main}
                other2={other2}
                other={other}
                secondary={secondary}
                styles='bg-cyan-600 text-transparent bg-clip-text'
                btn1='Pilih Paket'
                btn2='Konsultasi Sekarang'
                styleL='bg-cyan-200'
                styleR='bg-cyan-200'
                href1='#packages'
            />
            <CardPricePt data={data} />
            <CardPricePma data={dataPma}/>
            <BodyPT />
            <RWhyUs color={"cyan"} />
        </>
    )
}