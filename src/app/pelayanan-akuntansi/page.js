import fs from 'fs'
import socmed from '../../public/BG/accounting.jpg';
import { BannerText } from '@/components/BannerText';
import { ImgProduk } from '@/components/ImgProduk';
import { ExtrasCard } from '@/components/ReusableComponents/ExtrasCard';

export default async function PelayananAkuntansi() {
    const main = "Akuntansi";
    const other = "";
    const other2 = "Pelayanan";
    const secondary =
        "Dukungan akuntansi terpercaya untuk pencatatan keuangan, pelaporan pajak, dan analisis keuangan yang akurat.";
    let rawData = await fs.promises.readFile('public/JSON/Manajemen.json', 'utf-8');
    let data = JSON.parse(rawData);

    return (
        <>

            <ImgProduk socmed={socmed} styles='bg-sky-300' stylesImg="translate-y-[7%]" />
            <BannerText
                other={other} other2={other2} main={main} secondary={secondary}
                styles='bg-[#019C85]'
                btn1='Lebih Lanjut'
                btn2='Konsultasi Sekarang'
                styleL='bg-[#A4F5EC]'
                styleR='bg-[#A4F5EC]'
                href1='#packages' />
            <ExtrasCard data={data} accent1={'bg-[#019C85]'} accent2={'bg-[#A4F5EC]'} />
        </>
    );
}

