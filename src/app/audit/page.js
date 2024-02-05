import fs from 'fs'
import socmed from '../../public/BG/audit.jpg';
import { BannerText } from '@/components/BannerText';
import { ImgProduk } from '@/components/ImgProduk';
import { ExtrasCard } from '@/components/ReusableComponents/ExtrasCard';

export default async function AuditPage() {
    const main = "Audit";
    const other = "";
    const other2 = "System";
    const secondary =
        "Layanan Audit profesional kami memberikan keyakinan terhadap informasi keuangan Anda, mengidentifikasi risiko, dan memperbaiki kontrol internal.";
    let rawData = await fs.promises.readFile('public/JSON/Audit.json', 'utf-8');
    let data = JSON.parse(rawData);

    return (
        <>

            <ImgProduk socmed={socmed} styles='bg-sky-300' stylesImg="h-[53lvw] mt-7 translate-y-[7%]" />
            <BannerText
                other={other} other2={other2} main={main} secondary={secondary}
                styles='bg-[#305782]'
                btn1='Lebih Lanjut'
                btn2='Konsultasi Sekarang'
                styleL='bg-[#B2DEE2]'
                styleR='bg-[#B2DEE2]'
                href1='#packages' />
            <ExtrasCard data={data} accent1={'bg-[#305782]'} accent2={'bg-[#B2DEE2]'} />
        </>
    );
}

