import fs from 'fs'
import socmed from '../../public/BG/izin.jpg';
import { BannerText } from '@/components/BannerText';
import { ImgProduk } from '@/components/ImgProduk';
import { ExtrasCard } from '@/components/ReusableComponents/ExtrasCard';

export default async function IzinTambahanPage() {
    const main = "Izin";
    const other = "Tambahan";
    const other2 = "";
    const secondary =
        "Bantuan penuh pengalaman untuk memperoleh izin tambahan secara cepat dan efisien. Solusi mudah untuk semua kendala perizinan.";
    let rawData = await fs.promises.readFile('public/JSON/IzinTambahan.json', 'utf-8');
    let data = JSON.parse(rawData);

    return (
        <>

            <ImgProduk socmed={socmed} styles='bg-sky-300' stylesImg="h-[84lvh] mt-[14lvh] translate-y-[7%]" />
            <BannerText
                other={other} other2={other2} main={main} secondary={secondary}
                styles='bg-[#599DAD]'
                btn1='Lebih Lanjut'
                btn2='Konsultasi Sekarang'
                styleL='bg-[#EBF2FB]'
                styleR='bg-[#EBF2FB]'
                href1='#packages' />
            <ExtrasCard data={data} accent1={'bg-[#599DAD]'} accent2={'bg-[#EBF2FB]'} />
        </>
    );
}

