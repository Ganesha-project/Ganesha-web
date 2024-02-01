import socmed from '../../../public/BG/socmed.png'
import fs from 'fs'
import { BannerSosmed } from '@/components/BannerSosmed';
import { BannerText } from '@/components/BannerText';
import { HeaderContentSosmed } from '@/components/SocmedComponents/HeaderContentSosmed';
import { ImgProduk } from '@/components/ImgProduk'
import { CardPriceSocmed } from '@/components/SocmedComponents/CardPriceSocmed';
import { CardPriceDesign } from '@/components/SocmedComponents/CardPrideDesign';
import { AccordionSocmed } from '@/components/SocmedComponents/AccordionSocmed';

export default async function SosmedPage() {
    const other = "Manajemen"
    const main = "Sosial Media"
    const secondary = "Sosial Media Manajemen adalah kunci sukses modern untuk membentuk citra merek yang kuat, berinteraksi secara efektif dengan pelanggan, dan menavigasi dinamika digital dengan kesan yang positif."
    let rawData = await fs.promises.readFile('public/JSON/SocmedPrice.json', 'utf-8');
    let rawData2 = await fs.promises.readFile('public/JSON/DesignPrice.json', 'utf-8');
    let data = JSON.parse(rawData);
    let data2 = JSON.parse(rawData2);
    return (
        <>
            <ImgProduk socmed={socmed} styles='bg-violet-300' />
            <BannerText main={main} other={other} secondary={secondary}
                styles='bg-violet-400'
                btn1='Pilih Paket'
                btn2='Konsultasi Sekarang'
                styleL='bg-violet-200'
                styleR='bg-violet-200'
                href1='#packages'
                href2=''

            />
            <CardPriceSocmed data={data}/>
            <CardPriceDesign data={data2} />
            <HeaderContentSosmed />
            <BannerSosmed />
            <AccordionSocmed/>
        </>
    )
}