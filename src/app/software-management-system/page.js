import fs from 'fs'
import socmed from '../../public/BG/software.jpg';
import { BannerText } from '@/components/BannerText';
import { ImgProduk } from '@/components/ImgProduk';
import { ExtrasCard } from '@/components/ReusableComponents/ExtrasCard';

export default async function SoftwareManagementSystem() {
    const main = "Software Management";
    const other = "System";
    const other2 = "";
    const secondary =
        "Solusi terkini, dari Accounting Software hingga AR System, untuk meningkatkan efisiensi dan kinerja operasional.";
    let rawData = await fs.promises.readFile('public/JSON/Software.json', 'utf-8');
    let data = JSON.parse(rawData);

    return (
        <>

            <ImgProduk socmed={socmed} styles='bg-sky-300' stylesImg="translate-y-[7%]" />
            <BannerText
                other={other} other2={other2} main={main} secondary={secondary}
                styles='bg-[#D268CB]'
                btn1='Lebih Lanjut'
                btn2='Konsultasi Sekarang'
                styleL='bg-[#EFC4E9]'
                styleR='bg-[#EFC4E9]'
                href1='#packages' />
            <ExtrasCard data={data} accent1={'bg-[#D268CB]'} accent2={'bg-[#EFC4E9]'} />
        </>
    );
}

