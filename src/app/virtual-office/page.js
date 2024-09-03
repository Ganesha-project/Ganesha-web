import { ReusableCards } from '@/components/ReusableCards';
import { BannerService } from '@/components/ServicesComponent/BannerService';
import { VirtualOfficePackages } from '../../../public/DB/OtherPackages';
import { Faqs } from '@/components/LegalComponents/Faqs';
import { CardVO } from '@/components/VirtualOffice/CardVO';
import { Benefit } from '@/components/VirtualOffice/Benefit';
import { dataPageVO } from '../../../public/Data/VOData';


export default async function VirtualOfficePage() {
    return (
        <>
            <BannerService />
            <ReusableCards
                data={VirtualOfficePackages}
                label={'Paket Sewa Virtual Office'}
            />
            <CardVO />
            <Benefit />
            <Faqs
                text={'FAQ'}
                color={'gray'}
                className={'dark:!text-gray-100 !text-gray-800'}
                data={dataPageVO.FAQ}
            />
        </>
    );
}

