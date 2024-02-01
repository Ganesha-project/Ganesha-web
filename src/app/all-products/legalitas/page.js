import { BannerText } from '@/components/BannerText';
import { ImgProduk } from '@/components/ImgProduk'
import legal from '../../../public/BG/law.png'
import { AllProductButton } from '@/components/LegalComponents/AllProductButton';
import { BodyLegal } from '@/components/LegalComponents/BodyLegal';

export default function LegalitasPage() {
    const other = "Bisnis"
    const other2 = "Jasa"
    const main = "Legalitas"
    const secondary = "Kami hadir bersama Konsultan yang profesional untuk memberikan pelayanan Legalitas terbaik  yang akan memastikan Bisnis mu sesuai dengan aturan hukum yang berlaku di Indonesia, Legalkan Bisnis Mu Bersama Ganesha Consulting!."
    return (
        <>
            <ImgProduk socmed={legal} styles='bg-[#98AA85]' />
            <BannerText
                main={main}
                other2={other2}
                other={other}
                secondary={secondary}
                styles='bg-teal-300'
                btn1='Jelajahi'
                btn2='Konsultasi Sekarang'
                styleL='bg-teal-200'
                styleR='bg-teal-200 hidden'
                href1='#paket'
            />
            <AllProductButton />
            <BodyLegal />
        </>
    )
}