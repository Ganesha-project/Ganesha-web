import fs from 'fs'
import socmed from '../../public/BG/tax.png';
import { BannerText } from '@/components/BannerText';
import { ImgProduk } from '@/components/ImgProduk';
import { ExtrasCard } from '@/components/TaxComponents/ExtrasCard';

export default async function WebPage() {
    const main = "Pajak";
    const other = "";
    const other2 = "Konsultan";
    const secondary =
        "Optimalkan presensi digital perusahaan Anda dengan layanan pembuatan website kami. Desain estetik, fungsionalitas prima, dan pengalaman pengguna yang menarik, semuanya dalam satu paket. Bersama kami, hadirkan daya tarik dan kekuatan online untuk memperluas jangkauan bisnis Anda.";
    let rawData = await fs.promises.readFile('public/JSON/Pajak.json', 'utf-8');
    let data = JSON.parse(rawData);

    return (
        <>

            <ImgProduk socmed={socmed} styles='bg-sky-300' stylesImg="translate-y-[7%]" />
            <BannerText
                other={other} other2={other2} main={main} secondary={secondary}
                styles='bg-[#84534C]'
                btn1='Lebih Lanjut'
                btn2='Konsultasi Sekarang'
                styleL='bg-[#F2E6DD]'
                styleR='bg-[#F2E6DD]'
                href1='#packages' />
            <ExtrasCard data={data} accent1={'bg-[#84534C]'} accent2={'bg-[#F2E6DD]'} />
        </>
    );
}

