import { BannerText } from '@/components/BannerText';
import { ImgProduk } from '@/components/ImgProduk';
import { CardWeb } from '@/components/WebComponents/CardWeb';
import { Navbar } from '@/components/Navbar';
import { HeaderWeb } from '@/components/WebComponents/HeaderWeb';
import { WebBody } from '@/components/WebComponents/WebBody';
import socmed from '../../../public/BG/web.png';
import fs from 'fs'

export default async function WebPage() {
    const main = "Website";
    const other = "";
    const other2 = "Jasa Pembuatan";
    const secondary =
        "Optimalkan presensi digital perusahaan Anda dengan layanan pembuatan website kami. Desain estetik, fungsionalitas prima, dan pengalaman pengguna yang menarik, semuanya dalam satu paket. Bersama kami, hadirkan daya tarik dan kekuatan online untuk memperluas jangkauan bisnis Anda.";
    let rawData = await fs.promises.readFile('public/JSON/WebPrice.json', 'utf-8');
    let data = JSON.parse(rawData);

    return (
        <>

            <ImgProduk socmed={socmed} styles='bg-sky-300' stylesImg="translate-y-[7%]" />
            <BannerText
                other={other} other2={other2} main={main} secondary={secondary}
                styles='bg-sky-400'
                btn1='Lebih Lanjut'
                btn2='Konsultasi Sekarang'
                styleL='bg-sky-200'
                styleR='bg-sky-200'
                href1='#packages' />
            <CardWeb data={data} />
            <HeaderWeb />
            <WebBody />
        </>
    );
}

