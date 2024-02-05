import fs from 'fs'
import socmed from '../../public/BG/management.jpg';
import { BannerText } from '@/components/BannerText';
import { ImgProduk } from '@/components/ImgProduk';
import { ExtrasCard } from '@/components/ReusableComponents/ExtrasCard';

export default async function PelayananManajemenPage() {
    const main = "Manajemen";
    const other = "";
    const other2 = "Pelayanan";
    const secondary =
        "Tingkatkan efisiensi operasional dengan Pelayanan Manajemen kami, fokus pada perencanaan strategis dan implementasi praktik manajemen terbaik.";
    let rawData = await fs.promises.readFile('public/JSON/Pajak.json', 'utf-8');
    let data = JSON.parse(rawData);

    return (
        <>

            <ImgProduk socmed={socmed} styles='bg-sky-300' stylesImg="translate-y-[7%]" />
            <BannerText
                other={other} other2={other2} main={main} secondary={secondary}
                styles='bg-[#DF6443]'
                btn1='Lebih Lanjut'
                btn2='Konsultasi Sekarang'
                styleL='bg-[#A1DDDB]'
                styleR='bg-[#A1DDDB]'
                href1='#packages' />
            <ExtrasCard data={data} accent1={'bg-[#DF6443]'} accent2={'bg-[#A1DDDB]'} />
        </>
    );
}

